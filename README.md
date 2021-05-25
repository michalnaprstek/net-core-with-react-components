# ASP.NET Core MVC with react components
Sample project with standalone react components based on https://reciosonny.com/how-to-integrate-reactjs-in-existing-asp-net-mvc-app/

- scaffolded standard ASP.NET Core MVC project
- added and configured WebPack
- added and configured Babel
- added weback command as build script

Contains one simple react function component HelloWorld.
Another component called Parent contains sub component OnOffToggle.

## Adding new component
When you want to add a standalone component to the page you have to:
- create the component, eventually with subcomponents
- add the component as entry point in ./Scripts/config/webpack.cfg
- add a root element with particular id for rendering the component
- add script of the component built using webpack (i.e.: ```<script src="~/dist/helloworld.js"></script>)```)
- run ```npm run build```

## What next
- It'd be nice to have hot reload on javascript code updates.
- It'd be cool to setup TypeScript
