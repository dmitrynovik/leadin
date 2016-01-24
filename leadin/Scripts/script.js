//When the DOM tree is loaded
$(document).ready(function() {

    //Add pointer class to .photo .item
    $(".photo .item").addClass("pointer");

    //Hover over photo fade in hidden span
    $(".photo .item").hover(
        function() {
            $(this).find("span").fadeIn();
        },
        function() {
            $(this).find("span").fadeOut();
        }
    );
});

/* Enabling  Unobtrusive Client Side Validation */
$(function () {
	var validator = $.data($('form')[1], 'validator');
	var settngs = validator.settings;
	settngs.highlight = function (element) {
		$(element).addClass("error");
	};
	settngs.unhighlight = function (element) {
		$(element).removeClass("error");
	};
});
