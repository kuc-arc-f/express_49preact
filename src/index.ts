import express from "express";
import Top from './pages/App';
import About from './pages/About';
import Button from './pages/Button';
import Card from './pages/Card';
import Test from './pages/Test';
import AlertDialog from './pages/AlertDialog';
import NavigationMenu from './pages/NavigationMenu';
//
import testRouter from './routes/test'; 
//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/test', testRouter);

//MPA
app.get('/navigation_menu', (req: any, res: any) => {
  try {res.send(NavigationMenu({}));} catch (error) { res.sendStatus(500);}
});
app.get('/alert_dialog', (req: any, res: any) => {
  try {res.send(AlertDialog({}));} catch (error) { res.sendStatus(500);}
});
app.get('/card', (req: any, res: any) => {
  try {res.send(Card({}));} catch (error) { res.sendStatus(500);}
});
app.get('/test', (req: any, res: any) => {
  try {res.send(Test({}));} catch (error) { res.sendStatus(500);}
});
app.get('/button', (req: any, res: any) => {
  try {res.send(Button({}));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {res.send(About({}));} catch (error) { res.sendStatus(500);}
});
app.get("/", (req, res) => {
//res.send("Hello World 11");
  const htm = Top({});
  //console.log(htm);
  res.send(htm);
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
