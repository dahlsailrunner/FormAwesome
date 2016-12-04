# FormAwesome
Web front end with TypeScript, Bootstrap, Kendo UI for jQuery (ui, mvvm, and templates in use)


## The setup - jQuery, Bootstrap, and Kendo
This project was created as an ASP.NET MVC website, to help show how you can start to migrate away from the server-side technologies and into more client-side code.  

The basic setup involves first getting jQuery, Bootstrap, and Kendo installed into the project.  The steps here are included in case you want to create your own project from scratch and show what I did to set things up.

To begin with, make sure you have NPM, BOWER, and TYPINGS installed.  (after npm, just do `npm install bower --global` and  `npm install typings --global`)

1.  Create new ASP.NET MVC 6 project (not ASP.NET Core) -- no authentication.
2.  Remove JavaScript nuget references -- Microsoft unobtrusive validation, bootstrap, jquery validation, jquery, and modernizr.
3.  Remove the contents of the Scripts folder (not the folder itself)
4.  Get rid of the project_readme.html file
5.  Add a bower configuration file to the project (bower.json)
6.  Install jquery, bootstrap 4, and kendo-ui.  These items will be in the bower.json file -- you could run `bower install` to pull them down if you are cloning this repo.
```
  bower install jquery --save
  bower install bootstrap#v4.0.0-alpha.5 --save
  bower install kendo-ui-core --save
```

7.  Update the Views\Shared\_Layout.cshtml to have all of the right refs (see the file in this repo)

## More setup -- TypeScript and the Typings files
In order to properly use TypeScript and get good Intellisense during the development process, we need to set up the TypeScript compiler and get a hold of the typings files.

1. Add a TypeScript configuration file to the project (`tsconfig.json`)
See the file in this repo for the contents of mine.

2.  Add the typings to the project with the following commands.
```
typings install dt~jquery --global --save
typings install dt~bootstrap --global --save
typings install dt~kendo-ui --global --save
```

## Everything is set up!  Go code!
For more information about the tech in this project and the code, check out my blog post.
