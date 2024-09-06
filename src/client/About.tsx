
import { useState } from 'preact/hooks'
import { render } from 'preact'
import Head from '../components/Head';
//import Footer from '../components/Footer';
//
export default function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <Head />
      <div>
      </div>
      <h1 class="text-4xl font-bold">About</h1>
      <hr class="my-2" />
      <span>visit:  https://github.com/kuc-arc-f/express_49preact
      </span>
      <hr class="my-2" />
    </div>
  </>
  )
}
render(<App />, document.getElementById('app')!);
