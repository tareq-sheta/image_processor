import express from 'express';
import resizer from './api/fruits_resize';
import { existsSync } from 'fs';
import path from 'path'; //importing reqired files
export let i: string
export const prePrcessDir: string = path.resolve('./my input images'); //variable for input images directory
export const postPrcessDir: string = path.resolve('./my processed images'); //variable for output images directory
export const pre: string = prePrcessDir
export const post: string = postPrcessDir
const fileExistnce = (filDir: string): boolean => {
  //chicking if the file\directory exist
  return existsSync(filDir)
};
const myRoute = express.Router() //creating router instance

// myRoute.get("/image"); 
function process(req: express.Request, res: express.Response) {
  //setting a function to handle errors and process input images
  const {
    filename: image_name, //destructuring query parameters
    width: image_width,
    height: image_height,
  } = req.query
  //
  const prePrcessImg = path.join(prePrcessDir, `/${image_name}.jpg`) //variable for input images
  /* const postPrcessImg = path.join(
    postPrcessDir,
    `/${image_name}_${image_width}x${image_height}.jpg`
  ); */
  //
  /*
   *
   *
   */
  //error handling
  if (Object.keys(req.query).length === 0) {
    //displayed if query parameters not yet added

    return res
      .status(200)
      .send(
        'hey,welcome to img api processor\nplease enter a query that include filename , width and height'
      )
      .end()
  }
  /* else if (Object.keys(req.query).length < 3 && Object.keys(req.query).length !== 0) {  //displayed if query parameters not yet added

   return res
      .status(200)
      .send(
        ""
      )
      .end();
  } */
    // to ensure query parameters are vaild
    (Object.keys(req.query).length < 3 &&
      Object.keys(req.query).length !== 0) ||
    !image_name ||
    !image_width ||
    !image_height ||
    Number(image_name) < 0 ||
    Number(image_width) < 0 ||
    Number(image_height) < 0 ||
    isNaN(Number(image_width)) ||
    isNaN(Number(image_height))
  ) {
    return res
      .send(
        "a required query parameter is missing or misspelled or its value is invalid\n(parameters needed are filename , width ,height)"
      )
      .end();
  } else if (!fileExistnce(prePrcessImg)) {
    // to ensure the image exists in input folder
    /*  console.log(prePrcessDir);
    console.log(postPrcessImg);
    console.log(postPrcessDir);
    console.log(prePrcessImg);
    console.log(typeof prePrcessDir);
    console.log(typeof postPrcessImg);
    console.log(typeof postPrcessDir);
    console.log(typeof prePrcessImg);
    console.log(existsSync(prePrcessImg));
    console.log(existsSync(postPrcessDir));
    console.log(existsSync(prePrcessDir));
    console.log(existsSync(postPrcessImg)); */
    return res.send('sorry, the image is not available :(').end()
  }
  /*
   *
   *
   *
   */
  resizer(
    //the main resizer function which take image from input ,resize it wait till it is resized and ready then display it
    image_name as string,
    image_width as string,
    image_height as string
  ).then((processed) => {
    if (existsSync(processed)) {
      return res.status(200).sendFile(processed)
    }
  })
  /* console.log(prePrcessDir);
  console.log(postPrcessImg);
  console.log(postPrcessDir);
  console.log(prePrcessImg);
  console.log(existsSync(prePrcessImg));
  console.log(existsSync(postPrcessDir));
  console.log(existsSync(prePrcessDir));
  console.log(typeof prePrcessDir);
  console.log(typeof postPrcessImg);
  console.log(typeof postPrcessDir);
  console.log(typeof prePrcessImg); */
  //console.log(existsSync(prePrcessImg));
}
myRoute.get('/image', process) //adding the functon to the route

export default /* process */myRoute//setting a route at /image to add query values
//module.exports = { prePrcessDir, postPrcessDir, process };
