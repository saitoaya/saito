$(function(){

	/**
	 * トップ用初期処理
	 */
	var initTop = function() {

	//TOP100%表示
	var windowHeight = $(window).height(); console.log($('body').height());
	$('#intro .inner_section').css({height:windowHeight - 140 -110});
	$('.image').css({height:windowHeight*0.8});
	
	//テキストをふわっと表示
	$(window).on('load scroll', function(){
		var scrollTop = $(window).scrollTop();
		var imgTopPosition = $('.imgTop').height();
		var txtFadeAreaPosotion = $('.txtFadeArea').offset();
		
		if(scrollTop >= 400){
			$('.txtFadeArea').animate({
				opacity: '1',
				marginTop: 300
			}, 1000);
		}
	});


	/**
	 * トップ用初期処理	ここまで
	 */
	};

	//subNav配置位置取得
	var h1Width = $('.topLogo').width();
	$('.subNav').css({paddingLeft: h1Width});
	$(window).resize(function(){
		var h1Width = $('.topLogo').width();
	$('.subNav').css({paddingLeft: h1Width});
	});
	
	/*onScreen関係*/
	$('.lazy').onScreen({
		  tolerance: 200,
		  toggleClass: true,
		  doIn: function() {
			$(this).addClass('onScreen')
		  }
		});



	// 初期処理
	initTop();

});
