(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["knockout", "jquery"], factory);
	} else {
		// Browser globals
		factory(ko, $);
	}
}(this, function(ko, $) {
	ko.bindingHandlers.magicTextarea = {
		init: function(element) {
			var $element = $(element);

			$element.on('keydown keyup input paste propertychange click submit mouseenter', function(){
				element.style.height = "auto";
				var newHeight = element.scrollHeight + parseInt(window.getComputedStyle(element)["padding-top"]) + parseInt(window.getComputedStyle(element)["padding-bottom"]);
				$element.outerHeight(newHeight);
			});
		}
	};
}));