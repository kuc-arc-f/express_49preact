
import { useState } from 'preact/hooks';
import { render } from 'preact';
import Head from '../components/Head';
import Footer from '../components/Footer';
import '../style.css';
//  
export default function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <Head />
      {/* navi */}
      {/* items */}
      <h1 class="text-4xl font-bold">Components</h1>
      <hr class="my-2" />
      <div class="flex flex-wrap">
        <div class="p-2 m-0">
          <a href="/alert_dialog" class="" >
            <button class="btn-outline-blue">AlertDialog</button>
          </a>
        </div>
        <div class="p-2 m-0">
        <a href="/button" class="" >
          <button class="btn-outline-blue">Button</button>
        </a>
        </div>
        <div class="p-2">
          <a href="/card" class="" ><button class="btn-outline-blue">Card</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/calendar" class="" ><button class="btn-outline-blue">Calendar</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/checkbox"><button class="btn-outline-blue">CheckBox</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/dialog"><button class="btn-outline-blue">Dialog</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/datepicker"><button class="btn-outline-blue">DatePicker</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/form"><button class="btn-outline-blue">Form</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/input"><button class="btn-outline-blue">input</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/navigation_menu">
             <button class="btn-outline-blue">navigation_menu</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/textarea">
             <button class="btn-outline-blue">TextArea</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/progress">
             <button class="btn-outline-blue">Progress</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/radio">
             <button class="btn-outline-blue">Radio</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/select">
             <button class="btn-outline-blue">Select</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/sheet">
             <button class="btn-outline-blue">Sheet</button>
          </a>
        </div>
        <div class="p-2">
          <a href="/switch">
             <button class="btn-outline-blue">Switch</button>
          </a>
        </div>

        <div class="p-2">
          <a href="/table">
             <button class="btn-outline-blue">Table</button>
          </a>
        </div>

      </div>
    </div>
    
  </>
  )
}
render(<App />, document.getElementById('app')!);
/*
<div class="flex flex-row">
  <div class="flex-1 p-2"><a href="/">[ home ]</a>
  </div>
  <div class="flex-1 text-right p-2">
    <a href="/about" class="ms-2" >[ about ]</a>
  </div>
</div>
<hr class="my-1" />
*/
