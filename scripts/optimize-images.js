import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUALITY = 80;
const MAX_WIDTH = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Calculate new width while maintaining aspect ratio
    const newWidth = Math.min(metadata.width, MAX_WIDTH);
    const newHeight = Math.round((newWidth / metadata.width) * metadata.height);

    await image
      .resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(2);

    console.log(`Optimized ${path.basename(inputPath)}: ${savings}% smaller`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeDirectory(inputDir, outputDir) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.jpg'));

    if (fs.statSync(inputPath).isDirectory()) {
      await optimizeDirectory(inputPath, outputPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(inputPath, outputPath);
    }
  }
}

// Optimize homepage images
optimizeDirectory(
  path.join(__dirname, '../src/assets/Homepage-images'),
  path.join(__dirname, '../src/assets/Homepage-images/optimized')
);

// Optimize other images
optimizeDirectory(
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../src/assets/optimized')
);
