
let PATH__FAVICON = "/favicon.ico";
let PATH__ENTRY_CLIENT = "/static/entry-client.js";
let PATH_GLOBAL_CSS = "/static/style.css";
//
export default function Compo(props: any) {
//console.log("renderLayout.env.PROD=", import.meta.env.PROD);
  if(process.env.NODE_ENV === "production") {
    PATH_GLOBAL_CSS = "/public/static/style.css";
  }
  //
  const html = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
    <link href="${PATH_GLOBAL_CSS}" rel="stylesheet" />
    <script
    src="https://unpkg.com/htmx.org@1.9.10"
    integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
    crossOrigin="anonymous"
    ></script>
  </head>
  <body> 
    ${props.children}
  </body></html>
  `
  return html;
}
/*
    <hr />        
    <div>
      <a href="/">[ home ]</a>
      <a href="/htmx2">[ htmx2 ]</a>
      <a href="/htmx3">[ htmx3 ]</a>
    </div>
*/