$(document).ready(function() {
	$("#form").validate({
		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		rules: {
			name: {
				required: true
			},

			email: {
				email: true,
				required: true
			},

			message: {
				maxLength: 2000,
				required: true
			}
		},

		messages: {
			name: {
				required: "Please add a name"
			},

			email: {
				email: "Please add a valid email.",
				required: "Please add an email."
			},

			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		submitHandler : function(form) {
			$("#form").ajaxSubmit({
				type: "POST",
				url: $("#form").attr("action"),
				
				success: function(ajaxOutput) {
					$("#output-area").css("display", "clear");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#my-contact-form")[0].reset();
					}
				}
			})
		}
	})
});

