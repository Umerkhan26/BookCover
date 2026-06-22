"""Safely prepare mobile banner visuals — edge background removal + crop only."""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

IMAGES_DIR = Path(__file__).resolve().parents[1] / "src/assets/PageBannersMobile/images"
PADDING = 12
DARK_THRESHOLD = 42


def is_dark(r: int, g: int, b: int, a: int) -> bool:
    return a > 8 and r <= DARK_THRESHOLD and g <= DARK_THRESHOLD and b <= DARK_THRESHOLD


def flood_fill_background(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    width, height = rgba.size
    pixels = rgba.load()
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    def enqueue(x: int, y: int) -> None:
        if x < 0 or y < 0 or x >= width or y >= height or visited[y][x]:
            return
        r, g, b, a = pixels[x, y]
        if not is_dark(r, g, b, a):
            return
        visited[y][x] = True
        queue.append((x, y))

    for x in range(width):
        enqueue(x, 0)
        enqueue(x, height - 1)
    for y in range(height):
        enqueue(0, y)
        enqueue(width - 1, y)

    while queue:
        x, y = queue.popleft()
        pixels[x, y] = (0, 0, 0, 0)
        enqueue(x + 1, y)
        enqueue(x - 1, y)
        enqueue(x, y + 1)
        enqueue(x, y - 1)

    return rgba


def process_image(path: Path) -> tuple[int, int]:
    img = Image.open(path)
    cleaned = flood_fill_background(img)
    bbox = cleaned.getbbox()
    if not bbox:
        raise RuntimeError(f"No visible content in {path.name}")

    left = max(0, bbox[0] - PADDING)
    top = max(0, bbox[1] - PADDING)
    right = min(cleaned.width, bbox[2] + PADDING)
    bottom = min(cleaned.height, bbox[3] + PADDING)
    cropped = cleaned.crop((left, top, right, bottom))
    cropped.save(path, format="PNG", optimize=True)
    return cropped.size


def main() -> None:
    png_files = sorted(IMAGES_DIR.glob("*.png"))
    if not png_files:
        raise SystemExit(f"No PNG files found in {IMAGES_DIR}")

    for path in png_files:
        if path.name.startswith("_test"):
            continue
        size = process_image(path)
        print(f"Processed {path.name} -> {size[0]}x{size[1]}")


if __name__ == "__main__":
    main()
