import renderLayout from './renderLayout';
let PATH__ENTRY_CLIENT = "/static/DataTable.js";

//
export default function Page(props: any) { 
  if(process.env.NODE_ENV === "production") {
    PATH__ENTRY_CLIENT = "/public/static/DataTable.js";
  }
  //
  const htm = `
  <div className="container mx-auto my-2 px-8 bg-white">
    <div id="app"></div>
    <script type="module" src="${PATH__ENTRY_CLIENT}"></script>
  </div>
  `;
  return renderLayout({children: htm, title: "DataTable"});
}
/*
<h1>Home</h1>
*/