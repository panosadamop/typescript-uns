/**
 * Directive use to start a highlight.js block.
 */
angular.module('highlightjs',[])
	.directive('highlightjs',function(Notifications){

		return {
			restrict:'C',
			isolate:true,
			link: function($scope,$elm,$attrs){
				hljs.tabReplace = '<span class="indent">\t</span>'
				hljs.highlightBlock($elm[0],hljs.tabReplace);
			},
			scope:true
		}
	})