// Require Express to run server and routes
/* import prePrcessDir from "./routes/processing";
import postPrcessDir from "./routes/processing"; */
import express from "express";
import myRoute from "./routes/processing";
// import process from "./routes/processing";
// import path from "path";
const port = 7777; //adjusting the app to listen to at port 7777
const app = express() //creating app instance
//including myRoute in the app

app.get('/', (req, res) => {
  res.send(
    'welcome to fruits image api processor to add an image please add {/image} to the url then add query params values'
  )
  console.log()
});
//

app.listen(port, () => {
  console.log(`this is my server\nit is running on the port No.${port}`)
});
app.use(myRoute);
export default app;
