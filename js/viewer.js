document.addEventListener("DOMContentLoaded", function() {



	var trigger = document.querySelectorAll("[data-type='list'] li a");
	var views = document.getElementById("views");
	var mainView = document.getElementById("mainView");
	var backTrigger = document.getElementById("backTrigger");

	backTrigger.addEventListener("click", function(e) {
		e.preventDefault();
		var viewer = views.querySelector("iframe");
		viewer.classList.remove("active");
		mainView.classList.add("active");
		backTrigger.classList.add("hidden");
		viewer.addEventListener("transitionend", function end(e) {
			views.removeChild(viewer);
			this.removeEventListener("transitionend", end);
		});
	});

	for (var i = 0; i < trigger.length; i++) {
		trigger[i].addEventListener("click", function(e) {

			e.preventDefault();

			var viewer = document.createElement("iframe");
			viewer.src = this.href;
			viewer.dataset.viewport = "end";
			backTrigger.classList.remove("hidden");
			viewer.onload = function() {
				document.querySelector("[data-viewport].active").classList.remove("active");
				viewer.classList.add("active");
			};

			views.appendChild(viewer);

		});
	}




});
