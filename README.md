# Angular 

In this section, we're going to be ripping out our backbone work for Shortly and replace it with Angular. Your goal is to learn the basics of Angular, including how to test and debug your code.

##What exactly is Angular?
* An opensource framework maintained by Google and the community. Angular tries to make it easy to build single page applications by taking a very opinionated approach compared to other MVC's such as Backbone. Because of this, Angular is less flexible, but makes it very simple to create common features needed in a web app. It uses depenedency injection

###Things convered in the sprint
* Controllers
* Modules
* $scopes
* Routing & multiple views
* Factories
* Promises
* Filters


## What's in this repo?
* Skeleton structure for your client, nothing in the files.


##Getting Started

###Reference material:

[Getting started series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html). Go through these steps to get familiar with Angular.

To ease development of your Angular app,  you should __disable authentication__ during the initial development phase. Check the extra credit.

* [ ] Add one of your last sprints (express+bookshelf or express+mongo)into this one
* [ ] delete all Backbone code and dependencies
* [ ] run `bower install` to install angular dependencies
* [ ] Although Angular does not need EJS or any server side rendering, setup your `layout.ejs` to load Angular dependencies.
* [ ] Erase the contents of your  `layout.ejs` file and load up Angular with `ng-app`.
* [ ] disable authentication on your server.


## Your Goals

###Basic requirements:

- Create a basic shortly app
  * [ ] Build the listing view
  * [ ] Build the shorten view
  * [ ] Enable navigation between views using [ngRoute and the $routeProvider]()

- Validations
  * [ ] [Validate](https://docs.angularjs.org/api/ng/directive/input) the shorten links form before it submits to the server.

- Sorting and filtering:
  * [ ] Display the links on the listing page sorted by visit count
  * [ ] Add a live-search box that displays only the links that match the search criteria 
  * [ ] Allow the user to sort by other criteria, such as last visited time (hottest), latest (created_at), or visit count (populate)

- Testing
  * [ ] Use karma to set up unit tests to test your factories and controllers
  * [ ] Use karma to set up end-to-end tests to test the flow of your Shortly

###Extra Credit:
- Enable client-side authentication system
  * [ ] Require users to log in to see shortened links using $http interceptors
  * [ ] Allow users to register through the front-end
  * [ ] Save the user's info in a cookie and automatically log them back in when they return

- Alerts:
  * [ ] Build a directive to display errors gracefully on the page

- Look & Feel
  * [ ] Upgrade your UI wnd style with a CSS library like:(Foundation, Twitter Bootstrap)
  * [ ] Add animations to views & elements with [ngAnimate](https://docs.angularjs.org/api/ngAnimate) and [ng-Fx](https://github.com/Hendrixer/ng-Fx)

- Optimization:
  * [ ] Use caching and localstorage to optimize the flow of the application and to limit the number of calls to make to the backend


###Nightmare Mode
- Routing 
  * [ ] Strip out ngRoute and use [ui-router](https://github.com/angular-ui/ui-router) 
    * ngRoute only allows one instance of the `ng-view` directive, meaing only view can be rendered at a time. ngRoute also relies on the url using `$urlProvider` to determine what view should be loaded. `ui-router` fixes this by associating views with state. The url will no longer determine what template we can load. You will then have the ability to load as many templates as you'd like, even nest them using the `$stateProvider`. 
    
- Widgets
  * [ ] Use a custom directive to display your links. ex: `<shortend-link> </shortened-link>`
    * Right now you probably have all your links listed as `<li>` elements on the page, refactor this an create a custom directive to display each link instead. A shortend link widget.
  * [ ] Have the link animate on hover.
  
- Views
  * [ ] create a stats view for each of your links
  * [ ] display a d3 graph that shows the link's stats
