# Angular and Single Page Aplications (SPA)

In this section, we're going to be ripping out our backbone work for Shortly and replace it with Angular. Your goal is to learn the basics of Angular and how a SPA works, including how to test and debug your code.

##What exactly is Angular?
* An opensource framework maintained by Google and the community. Angular tries to make it easy to build single page applications by taking a very opinionated approach compared to other MVC's such as Backbone.

###Things convered in the sprint
* Controllers & $scope
* Modules
* Routing & multiple views
* Factories & Services
* Directives
* Promises
* Filters

##What is a SPA?
* A single page application varies differently than a traditional web app. The server does not render any views, it only serves the index.html, static assets, and maybe act as a RESTFUL JSON API. Once the index.html is loaded, all templating and routing is handled by front-end javaScript frameworks like Angular.

##Token based authentication
* Instead of using sessions and having our server keep track of the current user, this server uses tokens. To be exact, JSON web tokens or JWT, pronounced jot. The client stores the token and must send the token on every request that wants access to a protected endpoint. The server knows nothing of the current users. 

##Mongo
* Mongo is a No-SQL database. It does not require schemas and was built entirely in JavaScript. This server uses Mongo and an ORM called Mongoose, instead of Bookshelf and sql-lite.

##Gulp
* Gulp is based off of Node streams and has a more natural feel when using Node. Gulp is quickly becoming the go to when using task runners. The community has built amaing plugins to provide the same fuctionalty you got when using Grunt plugins. You only need one, Gulp or Grunt. They both solve the same problem, just in two different ways.

## What's in this repo?
* Express 4 sever
  - Connected to MongoDB
  - Authentication disabled by default
  - removal of EJS templating
  
* Gulpfile
  - instructions for all your tasks

* Skeleton app
  - All the files needed for your angular app is there

* Client and Server testing

To ease development of your Angular app,  __authentication has been disabled__,during the initial development phase.

## Reference material:
* [Getting started series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)
* [Cookies vs JWT](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)
* [Factories & Services](http://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory)
* [Routing with ngRoute](http://scotch.io/tutorials/javascript/single-page-apps-with-angularjs-routing-and-templating)
* 

## Your Goals

###Basic requirements:
- Testing
  * [ ] Pass all test

- Create a basic shortly app
  * [ ] Build the links view
  * [ ] Build the shorten view
  * [ ] Enable navigation between views using ngRoute and ngView

- Validations
  * [ ] [Validate](https://docs.angularjs.org/api/ng/input/input%5Burl%5D) the shorten links form before it submits to the server.

- Sorting and filtering:
  * [ ] Display the links on the listing page sorted by visit count
  * [ ] Add a live-search box that displays only the links that match the search criteria 


###Extra Credit:
- Enable client-side authentication system
  * [ ] Enable authentication
      * uncomment line 20 in `server/config/middleware.js`
  * [ ] Add front-end route protection inside the `.run()` in `client/app/app.js`
  * [ ] Allow users to register through the front-end
  * [ ] Save the user's token in localStorage and automatically log them back in when they return

- Widgets
  * [ ] Use a custom directive to display your links. ex: `<shortend-link> </shortened-link>`

- Optimization:
  * [ ] Use caching and localstorage to optimize the flow of the application and to limit the number of calls to make to the backend


- Look & Feel
  * [ ] Upgrade your UI wnd style with a CSS library
  * [ ] Add animations to views & elements with [ngAnimate](https://docs.angularjs.org/api/ngAnimate) and [ng-Fx](https://github.com/Hendrixer/ng-Fx)

###Nightmare Mode
- Routing 
  * [ ] Strip out ngRoute and use [ui-router](https://github.com/angular-ui/ui-router) elaborate here
- Views
  * [ ] create a stats view for each of your links
  * [ ] display a d3 graph that shows the link's stats
