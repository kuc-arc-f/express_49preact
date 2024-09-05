
import { render } from 'preact'
import { useState } from 'preact/hooks'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from '../components/Head';
import Footer from '../components/Footer';
//import 'htmx.org';

// 
const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let items: any[] = [];
//
export function App() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  const testProc = function(){
    //items = dataItems;
    //const inputValue = getInputValue("form1");
//    console.log(inputValue);
    //@ts-ignore
    htmx.ajax("POST", "/api/test/test", {
      target: "#resulte_form1", swap: "innerHTML", values: { name: "taro"}
    }).then(() => {
      console.log("Content inserted successfully!");
    });
    setUpdatetime(new Date().toString());
  }
  //
  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">Test</h1>
      <hr />
      <div class="card">
        <button class="btn-purple" onClick={() => testProc()}>[ Test ]
        </button>
      </div>
      <div id ="resulte_form1"></div>
      <hr />
      {items.map((item: any) => {
        return (
        <li key={item.id}>
          <h3 class="text-3xl font-bold">{item.title}</h3>
          <span>id: {item.id}</span>
        </li>
        );
      })}
      <hr />
      <h1 class="text-4xl font-bold">Load-hx-post</h1>
      <form  class=""
      hx-post="/api/test/test"
      hx-trigger="load" hx-target="#resulte_h2" >
        <div class="input_wrap">
          <Label htmlFor="name">Name</Label>
          <Input name="name" placeholder="Name 123" value="name123" />
        </div>
      </form>
      <h3 id="resulte_h2">ここに表示</h3>
    </div>
  </>
  )
}
render(<App />, document.getElementById('app')!);
/*
<label>name: </label><br />
<input type="text" name="name111" value="name123"/>
*/