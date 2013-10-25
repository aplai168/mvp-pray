# Angular

In this section, we're going to be ripping out our backbone work for Shortly and replace it with Angular. 

## What's in this repo?

This repo contains the basic version of shortly. It contains the fully featured version of Shortly from the backbone version converted entirely to Angular.

It uses the following angular concepts:

* Controllers
* Modules
* $scopes
* Routing & multiple views
* Factories
* Promises
* Filters

Client-side, we only store the functionality in a single file, but can easily break them out.

## Reference material:

[Getting started series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)

## Your Goals

Basic requirements:

- Sorting and filtering:
  * [ ] Display the links on the listing page sorted by visit count
  * [ ] Add a live-search box that displays only the links that match the search criteria
  * [ ] Allow the user to sort by other criteria, such as last visited time (hottest), latest (created_at), or visit count (populate)

- Create a stats page per link
  * [ ] Show clicks by time grouped into 5 min. intervals

- Validations
  * [ ] Validate the shorten links form before it submits to the server
  
- Use a basic authentication system
  * [ ] Require users to log in to see shortened links using $http interceptors
  * [ ] Allow users to register through the front-end
  * [ ] Save the user's info in a cookie and automatically log them back in when they return

- Shorten new links feature:
  * [ ] Allow users to 'quick-create' links from the homepage
  * [ ] Give the user's an alert when they are shortening a link that already exists

- Testing
  * [ ] Use karma to set up unit tests to test your factories and controllers
  * [ ] Use karma to set up end-to-end tests to test the flow of your Shortly

Extra Credit:

- Deployment:
  * [ ] Deploy to heroku

- Stats
  * [ ] Use D3 to display interesting data about your links
  * [ ] Show an hourly graph using d3 per clicks

- Alerts:
  * [ ] Build a directive to display errors gracefully on the page

- Optimization:
  * [ ] Use caching and localstorage to optimize the flow of the application and to limit the number of calls to make to the backend

- Touch
  * [ ] Touch-enable your Shortly application