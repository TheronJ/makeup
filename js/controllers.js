angular.module("makeUp.controllers", [])

    .controller('entryCtrl', function ($scope, $timeout,spinnerService) {

        $scope.loading = function () {
                spinnerService.show('html5spinner');

                $timeout(function () {
                    spinnerService.hide('html5spinner');

                }, 3500);

            };


        var slideIndex = 1;
        showSlides(slideIndex);

        $scope.plusSlides = function(n) {
            showSlides(slideIndex += n);
        }

        $scope.currentSlide =  function(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

    })

    
    
    .controller('healthCtrl', function ($scope, spinnerService, $timeout) {
        $scope.loading = function () {
                spinnerService.show('html5spinner');

                $timeout(function () {
                    spinnerService.hide('html5spinner');

                }, 3500);

            };
    })

    .controller('makeupTipsCtrl', function ($scope, spinnerService, $timeout) {
         $scope.loading = function () {
                spinnerService.show('html5spinner');

                $timeout(function () {
                    spinnerService.hide('html5spinner');

                }, 3500);

            };


         $scope.cousess = function () {
             
             console.log("lololo");
            document.getElementById("couses").style.display = "block";
            document.getElementById("couses1").style.display = "none";
            document.getElementById("couses2").style.display = "none";

        }
        $scope.cousess1 = function () {
            document.getElementById("couses").style.display = "none";
            document.getElementById("couses1").style.display = "block";
            document.getElementById("couses2").style.display = "none";

        }
        $scope.cousess2 = function () {
            document.getElementById("couses").style.display = "none";
            document.getElementById("couses1").style.display = "none";
            document.getElementById("couses2").style.display = "block";

        }

    })


        .controller('aboutCtrl', function (spinnerService, $timeout, $scope) {

            $scope.loading = function () {
                spinnerService.show('html5spinner');

                $timeout(function () {
                    spinnerService.hide('html5spinner');

                }, 3500);

            };

            $scope.input = "comic store";
      
      
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.7502917, lng: 28.1879108},
        zoom: 14,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
       
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: center,
                map: map
            });

            

            infoWindow.setPosition(center);
            infoWindow.setContent('Our location');
            map.setCenter(center);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      } 
        })
        .controller('cosmeticCtrl', function (spinnerService, $timeout, $scope) {

            $scope.loading = function () {
                spinnerService.show('html5spinner');

                $timeout(function () {
                    spinnerService.hide('html5spinner');

                }, 3500);

            };

            $(function () {
                $("#prod_nav ul").tabs("#panes > div", {
                    effect: 'fade',
                    fadeOutSpeed: 400
                });
            });

            $(document).ready(function () {
                $(".pane-list li").click(function () {
                    window.location = $(this).find("a").attr("href");
                    return false;
                });
            });

        })