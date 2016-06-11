


		$("#addUser").on("click", function() { 

			var name = $('#eventName').val().trim();
			var date = $('#eventDate').val().trim();
			var time = $('#eventTime').val().trim();
			var location = $('#eventLocation').val().trim();
			var countdown = 0;

			console.log(name);


			$('#eventData').prepend("<tr>"+
						"<td>"+name+"</td>"+
						"<td>"+date+"</td>"+
						"<td>"+time+"</td>"+
						"<td>"+location+"</td>"+
						"<td>"+countdown+"</td>"+
					"</tr>");



		});





	$("#clearAll").click(function() {
  			$("#eventName").val('');
  			$("#eventDate").val('');
  			$("#eventTime").val('');
  			$("#eventLocation").val('');
		});
