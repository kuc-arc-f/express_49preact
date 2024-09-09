import express from "express";
import Top from './pages/App';
import About from './pages/About';
import Button from './pages/Button';
import Card2 from './pages/Card2';
import Card from './pages/Card';
import Calendar from './pages/Calendar';
import Dialog from './pages/Dialog';
import Test from './pages/Test';
import AlertDialog from './pages/AlertDialog';
import NavigationMenu from './pages/NavigationMenu';
import Input from './pages/Input';
import TextArea from './pages/TextArea';
import Select from './pages/Select';
import Radio from './pages/Radio';
import CheckBox from './pages/CheckBox';
import DatePicker from './pages/DatePicker';
import Progress from './pages/Progress';
import Switch from './pages/Switch';
import Table from './pages/Table';
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
app.get('/switch', (req: any, res: any) => {
  try {res.send(Switch({}));} catch (error) { res.sendStatus(500);}
});
app.get('/table', (req: any, res: any) => {
  try {res.send(Table({}));} catch (error) { res.sendStatus(500);}
});
app.get('/progress', (req: any, res: any) => {
  try {res.send(Progress({}));} catch (error) { res.sendStatus(500);}
});
app.get('/dialog', (req: any, res: any) => {
  try {res.send(Dialog({}));} catch (error) { res.sendStatus(500);}
});
app.get('/datepicker', (req: any, res: any) => {
  try {res.send(DatePicker({}));} catch (error) { res.sendStatus(500);}
});
app.get('/calendar', (req: any, res: any) => {
  try {res.send(Calendar({}));} catch (error) { res.sendStatus(500);}
});
app.get('/checkbox', (req: any, res: any) => {
  try {res.send(CheckBox({}));} catch (error) { res.sendStatus(500);}
});
//Dialog

app.get('/radio', (req: any, res: any) => {
  try {res.send(Radio({}));} catch (error) { res.sendStatus(500);}
});
app.get('/input', (req: any, res: any) => {
  try {res.send(Input({}));} catch (error) { res.sendStatus(500);}
});
app.get('/textarea', (req: any, res: any) => {
  try {res.send(TextArea({}));} catch (error) { res.sendStatus(500);}
});
app.get('/select', (req: any, res: any) => {
  try {res.send(Select({}));} catch (error) { res.sendStatus(500);}
});
app.get('/navigation_menu', (req: any, res: any) => {
  try {res.send(NavigationMenu({}));} catch (error) { res.sendStatus(500);}
});
app.get('/alert_dialog', (req: any, res: any) => {
  try {res.send(AlertDialog({}));} catch (error) { res.sendStatus(500);}
});
app.get('/card', (req: any, res: any) => {
  try {res.send(Card({}));} catch (error) { res.sendStatus(500);}
});
app.get('/card2', (req: any, res: any) => {
  try {res.send(Card2({}));} catch (error) { res.sendStatus(500);}
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
