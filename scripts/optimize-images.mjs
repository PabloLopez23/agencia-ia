import { mkdir, readdir, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const backupDir = path.join(rootDir, ".asset-backups", "public-png-originals");

await mkdir(backupDir, { recursive: true });

const files = await readdir(publicDir);
const pngFiles = files.filter((file) => file.endsWith(".png"));

for (const file of pngFiles) {
  const sourcePath = path.join(publicDir, file);
  const backupPath = path.join(backupDir, file);
  const outputPath = path.join(publicDir, file.replace(/\.png$/, ".webp"));

  await copyFile(sourcePath, backupPath);
  await sharp(sourcePath)
    .webp({ quality: 82, alphaQuality: 90, effort: 6 })
    .toFile(outputPath);
}

console.log(`Optimized ${pngFiles.length} PNG files to WebP.`);
