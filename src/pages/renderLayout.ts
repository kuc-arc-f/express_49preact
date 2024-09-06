
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
  </head>
  <body> 
    ${props.children}
  </body></html>
  `
  return html;
}
/*
*/