// import { existsSync } from 'fs';
// import sharp from 'sharp';
import { resizeimg } from '../checkData';
import { response } from 'express';
describe('Test resizing images....', () => {
  const res = response;
  const path_img_input = './src/img1.jpg';
  const path_img_output = './dist/resizimg/img1_300_300.jpg';
  const oldimg = './dist/resizimg/img1_300_300.jpg';
  const check = () => {
    resizeimg(path_img_input, 300, 300, path_img_output, oldimg, res);
  };

  it('image file exist ', () => {
    check();
    expect(check).toBeDefined();
  });
});
