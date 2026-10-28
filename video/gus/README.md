# Досье: Гус Фринг — части ролика

Полный ролик (11:03, 1080p60) порезан на 12 частей примерно по 55 секунд, без перекодирования.
Чтобы склеить обратно:

```
for f in gus_part*.mp4; do echo "file '$f'"; done > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy gus_full.mp4
```
