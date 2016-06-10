


		$("#addUser").on("click", function() { 

			var name = $('#eventName').val().trim();
			var date = $('#eventDate').val().trim();
			var time = $('#eventTime').val().trim();
			var location = $('#eventLocation').val().trim();

			console.log(name);


		});
















	$("#clearAll").click(function() {
  			$("#eventName").val('');
  			$("#eventDate").val('');
  			$("#eventTime").val('');
  			$("#eventLocation").val('');
		});
