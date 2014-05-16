# Angular and Single Page Aplications (SPA)

In this section, we're going to be ripping out our backbone work for Shortly and replace it with Angular. Your goal is to learn the basics of Angular and how a SPA works, including how to test and debug your code.

## What exactly is Angular?

An opensource framework maintained by Google and the community. Angular tries to make it easy to build single page applications by taking a very opinionated approach compared to other MVC's such as Backbone. Because of this, Angular is less flexible, but makes it very simple to create common features needed in a web app. It uses a modies version of Jquery called jQLite that assits with DOM manipulation.

### Things convered in the sprint

  - Controllers
  - Modules
  - $scopes
  - Routing & multiple views
  - Factories
  - Promises
  - Filters

## What is a SPA?

- A single page application varies differently than a traditional web app. The server does not render any views, it only serves the index.html, static assets, and maybe act as a RESTFUL JSON API. Once the idnex.html is loaded, all templating and routing sis handled by front-end javaScript frameworks like Angular.


## What's in this repo?

- Express sever (very similar to your shortly-deploy server)
  - Connected to MongoDB
  - Authentication disabled
  - removal of EJS templating
  
- Gulpfile (similar to Gruntfile when using Grunt)
  - instrictions for all your tasks

- Angular
  - Basic angular depenedencies
  - index.html file


To ease development of your Angular app,  __disable authentication on the server__, during the initial development phase.

## Reference material:

### [Getting started series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)

## Your Goals

### Basic requirements:

- Create a basic shortly app
  - [ ] Build the listing view
  - [ ] Build the shorten view
  - [ ] Enable navigation between views using [ngRoute and the $routeProvider]()

- Validations
  - [ ] [Validate](https://docs.angularjs.org/api/ng/directive/input) the shorten links form before it submits to the server.

- Sorting and filtering:
  - [ ] Display the links on the listing page sorted by visit count
  - [ ] Add a live-search box that displays only the links that match the search criteria 
  - [ ] Allow the user to sort by other criteria, such as last visited time (hottest), latest (created_at), or visit count (populate)

- Testing
  - [ ] Use karma to set up unit tests to test your factories and controllers
  - [ ] Use karma to set up end-to-end tests to test the flow of your Shortly

### Extra Credit:

- Enable client-side authentication system
  - [ ] Require users to log in to see shortened links using $http interceptors
  - [ ] Allow users to register through the front-end
  - [ ] Save the user's info in a cookie and automatically log them back in when they return

- Alerts:
  - [ ] Build a directive to display errors gracefully on the page

- Optimization:
  - [ ] Use caching and localstorage to optimize the flow of the application and to limit the number of calls to make to the backend

- Touch
  - [ ] Touch-enable your Shortly application

- Look & Feel
  - [ ] Upgrade your UI wnd style with a CSS library like:(Foundation, Twitter Bootstrap)
  - [ ] Add animations to views & elements with [ngAnimate](https://docs.angularjs.org/api/ngAnimate) and [ng-Fx](https://github.com/Hendrixer/ng-Fx)

### Nightmare Mode

- Routing 
  - [ ] Strip out ngRoute and use [ui-router](https://github.com/angular-ui/ui-router) elaborate here

- Widgets
  - [ ] Use a custom directive to display your links. ex: `<shortend-link> </shortened-link>`
- Views
  - [ ] create a stats view for each of your links
  - [ ] display a d3 graph that shows the link's stats
