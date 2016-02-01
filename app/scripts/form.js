angular.module('myApp', [])
    .controller('UploadController', function ($scope, $http) {
            $scope.setMediaFile = function (element) {
                //console.log(element.files[0].type);
                $scope.mimeType = element.files[0].type;
                $scope.type = $scope.mimeType.substr(0, 5);

            };
            $scope.sendImage = function () {
                var fd = new FormData(document.getElementById('fileForm'));
                fa.append('user', 6);
                fa.append('type', XXXX);
                fa.append('mime-type', YYYY);
                var request = $http.post('http://util.mw.metropolia.fi/ImageRekt/api/v2/upload', fd, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                });

                request.then(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });

            };
        };