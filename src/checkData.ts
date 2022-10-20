import { existsSync } from 'fs';
import sharp from 'sharp';
import { Response } from 'express';

function resizeimg(
  path_img_input: string,
  imgwidth: number,
  imgheight: number,
  path_img_output: string,
  oldimg: string,
  res: Response
) {
  sharp(path_img_input)
    .resize({
      width: imgwidth,
      height: imgheight,
    })
    .toFile(path_img_output)
    .then(() => {
      res.sendFile(oldimg);
    });
}

async function check(
  nam: string,
  width: string,
  height: string,
  oldimg: string,
  res: Response
) {
  const imgwidth = Number(width);
  const imgheight = Number(height);
  if (nam === '') {
    return res
      .status(404)
      .send('Invalid original file names,parameter(namimg)');
  }

  if (isNaN(imgwidth) || imgwidth <= 0) {
    return res
      .status(404)
      .send(
        'Bad request, query parameter (widthimg) is required,or parameter is`int Number.'
      );
  }
  if (isNaN(imgheight) || imgheight <= 0) {
    return res
      .status(402)
      .send(
        'Bad request, query parameter (heightimg) is required,or parameter is`int Number.'
      );
  }
  if (existsSync(oldimg)) {
    return res.sendFile(oldimg);
  }
  const path_img_input = `./src/${nam}.jpg`;
  const path_img_output = `./dist/resizimg/${nam}_${imgwidth}_${imgheight}.jpg`;

  if (existsSync(path_img_input)) {
    resizeimg(
      path_img_input,
      imgwidth,
      imgheight,
      path_img_output,
      oldimg,
      res
    );
  } else {
    res.status(400).send('I havent  img has this name in (./src).');
  }
}

export { check, resizeimg };
