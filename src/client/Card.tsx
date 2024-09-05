import { useState } from 'preact/hooks'
import { render } from 'preact'
import { BellRing, Check } from "lucide-react"

import Head from '../components/Head'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"


export default function App() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Card</h1>
    <hr className="my-2" />
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Card Item</CardTitle>
        <CardDescription>information , title</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name 123" />
              <Label>textArea</Label>
              <Textarea id="textarea" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">SelectItems</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="item_1">item_1</SelectItem>
                  <SelectItem value="item_2">item_2</SelectItem>
                  <SelectItem value="item_3">item_3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>RadioCheck</Label>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
              <hr class="my-2" />
              <Label>CheckBox</Label><br />
              <Checkbox id="checkbox_1" />
              <span class="ms-2">checkbox_1</span><br />
              <Checkbox id="checkbox_2" />
              <span class="ms-2">checkbox_2</span><br />
              <hr class="my-2" />
              <input type="date" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>    
  </div>

  )
}
render(<App />, document.getElementById('app')!);