import sharp from "sharp";
import path from "path";

async function resizer(n: string, w: string, h: string): Promise<string> {
  await sharp(path.resolve(`./my input images/${n}.jpg`))
    .resize(Number(w), Number(h))
    .toFile(path.resolve(`./my processed images/${n}_${w}x${h}.jpg`));

  return path.resolve(`./my processed images/${n}_${w}x${h}.jpg`);
}

export default resizer;
