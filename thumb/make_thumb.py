# YouTube thumbnail: huge word behind the subject (subject cut out with rembg), film grain, vignette.
# usage: python3 make_thumb.py src.png WORD out.jpg [text_y] [shift_x] [flip]
import sys, os
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
from rembg import remove, new_session

src, word, out = sys.argv[1:4]
ty = float(sys.argv[4]) if len(sys.argv) > 4 else .5
sx = int(sys.argv[5]) if len(sys.argv) > 5 else 0
flip = len(sys.argv) > 6 and sys.argv[6] == 'flip'
color = sys.argv[7] if len(sys.argv) > 7 else 'paper'   # paper | red | ink
side = sys.argv[8] if len(sys.argv) > 8 else 'center'   # center | right | left: word only in that part of the frame
W, H = 1280, 720
im = Image.open(src).convert('RGB').resize((W, H), Image.LANCZOS)
if flip: im = im.transpose(Image.FLIP_LEFT_RIGHT)
if sx:  # zoom in just enough to slide the frame without exposing an edge
    z = (W + 2 * abs(sx)) / W; big = im.resize((int(W * z), int(H * z)), Image.LANCZOS); ox = (big.width - W) // 2 - sx; oy = (big.height - H) // 2
    im = big.crop((ox, oy, ox + W, oy + H))
im = ImageEnhance.Contrast(im).enhance(1.08); im = ImageEnhance.Color(im).enhance(float(os.environ.get('SAT', .9)))

# subject matte (soft edge)
cut = remove(im, session=new_session('u2net_human_seg'), post_process_mask=True)
alpha = cut.split()[-1].filter(ImageFilter.GaussianBlur(1.2))
fg = im.copy(); fg.putalpha(alpha)

# background: darker, slightly softer, warm-cool grade
bg = im.filter(ImageFilter.GaussianBlur(2.5)); bg = ImageEnhance.Brightness(bg).enhance(float(os.environ.get('BG', .72)))

# word: as wide as the frame allows
font_path = '/usr/share/fonts/opentype/inter/InterDisplay-Black.otf'
size = 400
while True:
    f = ImageFont.truetype(font_path, size); b = f.getbbox(word)
    if b[2] - b[0] <= W * (.94 if side == 'center' else .46) or size < 80: break
    size -= 6
tw, th = b[2] - b[0], b[3] - b[1]
txt = Image.new('L', (W, H), 0); d = ImageDraw.Draw(txt)
cx = W / 2 if side == 'center' else (W * .77 if side == 'right' else W * .23)
d.text((cx - tw / 2 - b[0], H * ty - th / 2 - b[1]), word, font=f, fill=255)
# paper texture on the letters
rng = np.random.default_rng(3); noise = rng.normal(0, 1, (H // 2, W // 2)).astype(np.float32)
tex = Image.fromarray(np.clip(232 + noise * 9, 0, 255).astype(np.uint8)).resize((W, H), Image.BICUBIC)
paper = Image.merge('RGB', (tex.point(lambda v: min(255, v + 6)), tex.point(lambda v: min(255, v + 2)), tex.point(lambda v: max(0, v - 8))))
if color != 'paper':
    base = {'red': (176, 34, 28), 'ink': (22, 26, 34)}[color]
    paper = Image.merge('RGB', [tex.point(lambda v, c=c: int(max(0, min(255, c + (v - 232) * .9)))) for c in base])
shadow = txt.filter(ImageFilter.GaussianBlur(18))
comp = bg.copy()
comp.paste(Image.new('RGB', (W, H), (0, 0, 0)), (0, 0), shadow.point(lambda v: int(v * .55)))
comp.paste(paper, (0, 0), txt)

# subject on top, with a soft contact shadow on the letters
sh = alpha.filter(ImageFilter.GaussianBlur(22)).point(lambda v: int(v * .5))
sh_img = Image.new('RGB', (W, H), (0, 0, 0)); sh_mask = Image.new('L', (W, H), 0); sh_mask.paste(sh, (14, 10))
comp.paste(sh_img, (0, 0), Image.fromarray(np.minimum(np.array(sh_mask), np.array(txt)).astype(np.uint8)))
comp.paste(fg, (0, 0), fg)
if os.environ.get('FRONT') == '1':  # word on top of the subject (for side layouts)
    comp.paste(Image.new('RGB', (W, H), (0, 0, 0)), (0, 0), shadow.point(lambda v: int(v * .55)))
    comp.paste(paper, (0, 0), txt)

# grade, vignette, grain
a = np.asarray(comp).astype(np.float32) / 255
yy, xx = np.mgrid[0:H, 0:W]; r = np.sqrt(((xx - W / 2) / (W * .62)) ** 2 + ((yy - H / 2) / (H * .62)) ** 2)
a *= (1 - .45 * np.clip(r - .45, 0, 1) ** 1.4)[..., None]
a = a * (np.array([1.02, 1.0, .96]) if os.environ.get('WARM', '1') == '1' else 1) + .012
g = rng.normal(0, .028, (H, W, 1)).astype(np.float32); a = np.clip(a + g, 0, 1)
Image.fromarray((a * 255).astype(np.uint8)).save(out, quality=94)
print(out, size)
