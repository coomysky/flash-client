(function() {
  'use strict';

  angular
    .module('app.main')
    .directive('toolTip', toolTip);

  toolTip.$inject = [];
  /* @ngInject */
  function toolTip() {
    var directive = {
      replace: true,
      retrict: 'AE',
      transclude:true,
      templateUrl: 'app/main/directive/template/tool-tip.html',
      scope:{
        options:'=',
        onClose:'&',
        onOpen:'&'
      },
      link: link
    };

    return directive;

    function link(scope, elem, attrs){
      scope.close = close;
      scope.open = open;
      // scope.isOpen = false;

      scope.isOpen = true;


      function close(){
        scope.isOpen = false;
        elem.removeClass('-open');
        elem.addClass('-close');
        scope.onClose();
      }

      function open(){
        scope.isOpen = true;
        elem.removeClass('-close');
        elem.addClass('-open');
        scope.onOpen();


      }

    }
  }



})();
