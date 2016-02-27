// this is a watcher
<div>{{title}}</div>

// this is also a watcher
scope.$watch("title", () => {
  scope.upperCaseTitle = scope.title.toUpperCase();
});

//all watchers evaluated at $digest cycle
$scope.$apply() -> $scope.$digest()