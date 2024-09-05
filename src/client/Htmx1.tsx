
import { render } from 'preact'
import { useState } from 'preact/hooks'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from '../components/Head';
import Footer from '../components/Footer';
let items: any[] = [];
//
export function App() {
  const [updatetime, setUpdatetime] = useState("");
  //
  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">Htmx1</h1>
      <hr />
      <form
      hx-post="/api/test/test"
      hx-trigger="submit"
      hx-target="#h2"
      hx-on--before-request=""
      hx-on--after-request="alert('OK, post send')"
      >
        <Label htmlFor="name">Name</Label><br />
        <Input name="name" placeholder="Name 123" value="name123" />
        <button type="submit" class="btn my-2">[ Post ]</button>
      </form>
      <hr class="my-2" />
      <h3 id="h2">ここに表示</h3>
    </div>
  </>
  )
}
render(<App />, document.getElementById('app')!);
/*
<input type="text" name="name" class="input_text" />
*/