# Angular

In this section, we're going to be ripping out our backbone work for Shortly and replace it with Angular. Your goal is to learn the basics of Angular, including how to test and debug your code.

You will learn the Angular concepts:

* Controllers
* Modules
* $scopes
* Routing & multiple views
* Factories
* Promises
* Filters

## What's in this repo?

This is an empty repo. Before you begin, please copy one of your previous Shortly sprints into this folder. You have the option of using either sprint - express+bookshelf or express+mongo.

To ease development of your Angular app, it is strongly recommended that you disable authentication, during the initial development phase.

## Reference material:

[Getting started series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)

## Your Goals

Basic requirements:

- Create a basic shortly app
  * [ ] Build the listing view
  * [ ] Build the shorten view
  * [ ] Enable navigation between views

- Validations
  * [ ] Validate the shorten links form before it submits to the server

- Sorting and filtering:
  * [ ] Display the links on the listing page sorted by visit count
  * [ ] Add a live-search box that displays only the links that match the search criteria
  * [ ] Allow the user to sort by other criteria, such as last visited time (hottest), latest (created_at), or visit count (populate)

- Testing
  * [ ] Use karma to set up unit tests to test your factories and controllers
  * [ ] Use karma to set up end-to-end tests to test the flow of your Shortly

Extra Credit:

- Alerts:
  * [ ] Build a directive to display errors gracefully on the page

- Optimization:
  * [ ] Use caching and localstorage to optimize the flow of the application and to limit the number of calls to make to the backend

- Touch
  * [ ] Touch-enable your Shortly application

- Look & Feel
  * [ ] Hook up your CSS

- Enable client-side authentication system
  * [ ] Require users to log in to see shortened links using $http interceptors
  * [ ] Allow users to register through the front-end
  * [ ] Save the user's info in a cookie and automatically log them back in when they return
