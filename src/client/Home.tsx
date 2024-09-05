
import { useState } from 'preact/hooks';
import { render } from 'preact';
//import { App } from './About/app.tsx'
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
      <div>
      </div>
      <h1 class="text-4xl font-bold">Home!</h1>
      <hr />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
      <hr />
    </div>
    
  </>
  )
}
render(<App />, document.getElementById('app')!);
