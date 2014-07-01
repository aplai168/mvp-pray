angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getAll()
      .then(function (links) {
        $scope.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
