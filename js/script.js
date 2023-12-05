$(function () {
	
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	var btn = $('#button');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});

	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });


});


	function openNav() {
	document.getElementById("mySidepanel").style.width = "250px";
	}

	function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
	}



/* Modal
		-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	var openModalBtn = document.getElementById('read_more');
	var closeModalBtn = document.getElementById('closeModalBtn');
	var modal = document.getElementById('myModal');


	openModalBtn.onclick = function() {
	modal.style.display = 'block';
	}


	closeModalBtn.onclick = function() {
	modal.style.display = 'none';
	}


	window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
	}