import $ from 'jquery';
// import check from './lib/common.js';
// import {TweenLite} from 'gsap';
$(document).ready(function(){
	var showPass = $('.input__showPass');
	var showPassIcon = $('.input__showPassIcon');
	var regularInput = $('.input__hiddenInput');
	var passwordInput = $('.input__passwordInput');
	var loginInput = $('.input__loginInput');
	var submitButton = $('.loginForm__submit');
	showPass.on('click', function() {
		console.log("click");
		if(regularInput.css('display') === 'none') {
			regularInput.val(passwordInput.val()).show();
			passwordInput.hide();
			showPassIcon.removeClass('slash').addClass('no-slash');
		} else {
			passwordInput.val(regularInput.val()).show();
			regularInput.hide();
			showPassIcon.removeClass('no-slash').addClass('slash');
		}
	});
	$('.button__input').on('click', function(e) {
		e.preventDefault();
		$('.loginForm__result').fadeOut();
		$.ajax({
			url: '/auth.php',
			method: 'post',
			data: {
				login: loginInput.val(),
				password: passwordInput.val(),
			}
		})
		.done(function(res) {
			var response = JSON.parse(res);
			if(response.error !== null) $('.loginForm__result').html(response.error).fadeIn();
			if(response.status) document.location.reload();
		});
	});
});