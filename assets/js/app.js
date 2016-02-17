(function ($) {
	$(function () {


// Github Latest Commit
		var b_github = jQuery('.b-github');
		if (b_github.length > 0) { // Checks if widget div exists (Index only)
			jQuery.ajax({
				url: "https://api.github.com/repos/nulllogic/16blocks/commits/master",
				dataType: "json",
				success: function (data) {
					var sha = data.sha,
						date = jQuery.timeago(data.commit.author.date);
					if (jQuery(window).width() < 1120) {
						sha = sha.substring(0, 7);
					}
					b_github.find('.date').html(date);
					b_github.find('.sha').html(sha).attr('href', data.html_url);
				}
			});
		}
	}); // end of document ready

})(jQuery); // end of jQuery name space