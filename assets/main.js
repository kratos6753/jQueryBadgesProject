$(function() {
	var report_card_url = 'https://www.codeschool.com/users/kratos6753.json';
	$.ajax({
		method: "GET",
		url: report_card_url,
		dataType: 'jsonp',
		success: function(response) {
			var courses_completed = response.courses.completed;
			var badges = $('#badges');
			courses_completed.forEach(function(course) {
				var course_div = $("<div />", {'class': 'course'}).appendTo(badges);
				$("<h3 />", {text: course.title}).appendTo(course_div);
				$("<img />", {'src': course.badge}).appendTo(course_div);
				$("<a />", {'href': course.url, 'target': '_blank', 'class': 'btn btn-primary', text: 'See Course'}).appendTo(course_div);
			});
		}
	});
});
