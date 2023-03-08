# AngularJS with .NET Framework
A demo project using AngularJS, .NET Framework 4.8, and ASP.NET MVC 5.

## Features

- XLTS for AngularJS - installed using npm
- jQuery 3.6.3 - installed using npm
- .NET Framework 4.8
- ASP.NET MVC 5
- Bundling using [Microsoft.AspNet.Web.Optimization](https://docs.microsoft.com/en-us/aspnet/mvc/overview/performance/bundling-and-minification)

## Prerequisites

- Windows 10/11 - Older versions of Windows may work but have not been tested.
- [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) - The free *Community Edition* is sufficient.
Older versions of Visual Studio may work but have not been tested.
- [.Net Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework) - This can optionally be installed
as part of the Visual Studio 2022 installation as well.

## Getting Started
Make sure you have configured your authentication with the XLTS.dev registry via:

- supplying the token in the `.npmrc` file in your user home directory
- logging into the registry via the npm CLI

- Clone repository: `git clone https://github.com/xlts-dev/angularjs-asp-net48-mvc5.git`.
- install npm packages:

  ```
  npm install
  ```

- Run the project by pressing the `F5` key or using the green start button in the toolbar. This will launch your web
browser and display the web application.

## Angular LTS support
If you want to use the LTS packages, you have to run `npm run switch-to-lts-packages` script instead of `npm i`.
