import { useState } from 'preact/hooks'
import { render } from 'preact'
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
//
export default function App(){
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Button</h1>
    <hr className="my-2" />
    <Button>Button</Button>
    <hr className="my-2" />
    <Button variant="outline">Outline</Button>
    <hr className="my-2" />
    <Button variant="secondary" disabled={true} >Secondary</Button>
    <hr className="my-2" />
    <Button variant="destructive">Destructive</Button>
    <hr className="my-2" />
  </div>
  );
}
render(<App />, document.getElementById('app')!);
