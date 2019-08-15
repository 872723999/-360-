
var $http = (function () {

	function post(url, data, callback) {
		$.ajax({
			url: url,
			dataType: "json",
			data: data,
			type: "post",
			success: function (res) {
				callback(res);
			}
		})
	}

	function get(url, callback) {
		$.ajax({
			url: url,
			dataType: "json",
			type: "get",
			success: function (res) {
				callback(res);
			}
		})
	}

	return {
		post: post,
		get: get
	}

})()