# FormAwesome
Web front end with TypeScript, Bootstrap, Kendo UI for jQuery (ui, mvvm, and templates in use)


To create this project from scratch:
0.  Make sure you have NPM and TYPINGS installed.  (after npm, just do npm install typings --global)
1.  Create new ASP.NET MVC 6 project (not ASP.NET Core) -- no authentication.
2.  Remove JavaScript nuget references -- Microsoft unobtrusive validation, bootstrap, jquery validation, jquery, and modernizr.
3.  Remove the Scripts folder CONTENT (not the folder itself)
4.  Get rid of the project_readme.html file
5.  Add an npm configuration file to the project  (package.json)
6.  Install jquery, bootstrap 4, and kendo-ui
  npm install jquery --save
  npm install bootstrap@4.0.0-alpha.5 --save
  npm install kendo-ui-core --save
7.  Update the Views\Shared\_Layout.cshtml to have all of the right refs (see the file in this repo)

