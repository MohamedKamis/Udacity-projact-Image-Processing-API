import express from 'express';
import path from 'path';
import { check } from './checkData';
const app = express();
const port = 3000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req, res) => {
  const nam = req.query.namimg as string;
  const width = req.query.widthimg as string;
  const height = req.query.heightimg as string;
  const oldimg =
    path.resolve('./') + `/dist/resizimg/${nam}_${width}_${height}.jpg`;
  // Check image data
  check(nam, width, height, oldimg, res);
});
app.listen(port, () => {
  console.log(
    `Your server starting on --> http://localhost:${port}?namimg=&widthimg=&heightimg=`
  );
});
/*for start writ (npm run dev)*/
export default app;
