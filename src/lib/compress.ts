import sharp from "sharp";

export async function compressImage(
  buffer: Buffer
): Promise<{ data: Buffer; width: number; height: number; size: number; mimeType: string }> {
  const image = sharp(buffer);
  const metadata = await image.metadata();

  const maxWidth = 1200;
  const width = Math.min(metadata.width || maxWidth, maxWidth);

  const compressed = await image
    .resize(width, undefined, { withoutEnlargement: true })
    .webp({ quality: 75 })
    .toBuffer({ resolveWithObject: true });

  return {
    data: compressed.data,
    width: compressed.info.width,
    height: compressed.info.height,
    size: compressed.info.size,
    mimeType: "image/webp",
  };
}
