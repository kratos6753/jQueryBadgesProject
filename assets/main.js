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
				var course_div = $("<div></div>").attr('class', 'course')[0];
				badges.append(course_div);
				var h3 = $("<h3></h3>").html(course.title);
				course_div.append(h3[0]);
				var img = $("<img />").attr('src', course.badge);
				course_div.append(img[0]);
				var course_link = $("<a></a>").attr({'href': course.url, 'target': '_blank', 'class': 'btn btn-primary'}).text('See Course');
				course_div.append(course_link[0]);
			});
		}
	});
});
