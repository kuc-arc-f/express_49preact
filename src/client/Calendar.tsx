import { useState } from 'preact/hooks'
import { render } from 'preact'
//console.log("#about.tsx");
import Head from '../components/Head'
// 
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

//
export default function App(){
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  //
  return(
  <div className="container mx-auto my-2 px-8">
    <Head />
    <h1 className="text-4xl font-bold">Calendar</h1>
    <hr className="my-2" />
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className=""
      />
    </div>
  </div>
  );
}
render(<App />, document.getElementById('app')!);
/* rounded-md border ,  w-[350px]
*/
