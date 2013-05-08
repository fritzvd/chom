    // angular.module('instagram', ['ngResource']).
    //   factory('Project', function($resource) {
    //     var Project = $resource('https://api.instagram.com/v1/tags/cheesesofmexico/media/recent?client_id=e8020c94851e4938ae02ca397c441fd4&callback=JSON_CALLBACK',
    //       {}, {
    //         get: {method:'GET'},
    //         replies: {method:'JSONP'}
    //       });     
    //   return Project;
    // });

    // angular.module('project', ['instagram']).
    //   config(function($routeProvider) {
    //   $routeProvider.
    //   when('/', {controller:ListCtrl, templateUrl:'/static/templates/list.html'}).
    //   otherwise({redirectTo:'/'});
    // });
     
     
    // function ListCtrl($scope, Project) {
    //   debugger
    //   $scope.project = Project.get();
    // }

    //   // $(window).load(function(){
    //   //       $('#launch').modal('show');
    //   //   });

    $.ajax({
      url: "https://api.instagram.com/v1/tags/cheesesofmexico/media/recent?client_id=e8020c94851e4938ae02ca397c441fd4", 
      dataType: 'jsonp', 
      method: 'GET'}).done(function(response){
        $.each(response.data, function(){
          $('#images').append('<img src="'+ this.images.low_resolution.url +'" />')

        })
      })