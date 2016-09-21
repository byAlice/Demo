
$(function(){

	$('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5","page6"],
		menu:'#menu',
		verticalCentered: true,
		afterLoad: function(anchorLink,index){
			/*$('.welcome').remove();*/
			/*预加载*/
			setTimeout(function () {
				$(".welcome").css("display","none");
			},10);
			if(index==1){
				$(".header").css({
					backgroundColor:"transparent",
					height:'150px'
				});
				$('#logo').css({
					marginTop: '20px'
				});
				$('.words').css({
					marginTop: '40px'
				});
				$('.nav li a ').css({
					fontSize:'22px',
					lineHeight:'150px',
					paddingTop:'60px'
				});
				$('.phone a').css({
					fontSize:'22px',
					lineHeight:'150px',
					paddingTop:'50px'
				});
			}
			if(index==2){
				$(".header").animate({
					backgroundColor:"#67696a",
					height:'72px'
				},'20');
				$('#logo').animate({
					marginTop: '2px'
				},'100');
				$('.words').animate({
					marginTop: '0'
				},'100');
				$('.nav li a ').animate({
					fontSize:'20px',
					lineHeight:'72px',
					paddingTop:'20px'
				},'100');
				$('.phone a').animate({
					lineHeight:'72px',
					paddingTop:'0px'
				},'100');
				$('.two .box ul.items li i').before('<u class="cl"></u>'+
				'<u class="cr"></u>')

			}
			if(index==3){
				$(".header").animate({
					backgroundColor:"#67696a",
					height:'72px'
				},'20');
				$('#logo').animate({
					marginTop: '2px'
				},'100');
				$('.words').animate({
					marginTop: '0'
				},'100');
				$('.nav li a ').animate({
					fontSize:'20px',
					lineHeight:'72px',
					paddingTop:'20px'
				},'100');
				$('.phone a').animate({
					lineHeight:'72px',
					paddingTop:'0px'
				},'100');
				$('.container a p').after(
					'<div class="h-top"><i></i></div>'+
					'<div class="h-bottom"></div>')

			}

			if(index==4){
				$(".header").animate({
					backgroundColor:"#67696a",
					height:'72px'
				},'20');
				$('#logo').animate({
					marginTop: '2px'
				},'100');
				$('.words').animate({
					marginTop: '0'
				},'100');
				$('.nav li a ').animate({
					fontSize:'20px',
					lineHeight:'72px',
					paddingTop:'20px'
				},'100');
				$('.phone a').animate({
					lineHeight:'72px',
					paddingTop:'0px'
				},'100');

			}
			if(index==5){
				$(".header").animate({
					backgroundColor:"#67696a",
					height:'72px'
				},'20');
				$('#logo').animate({
					marginTop: '2px'
				},'100');
				$('.words').animate({
					marginTop: '0'
				},'100');
				$('.nav li a ').animate({
					fontSize:'20px',
					lineHeight:'72px',
					paddingTop:'20px'
				},'100');
				$('.phone a').animate({
					lineHeight:'72px',
					paddingTop:'0px'
				},'100');

			}
			if(index==5){
				$(".header").animate({
					backgroundColor:"#67696a",
					height:'72px'
				},'20');
				$('#logo').animate({
					marginTop: '2px'
				},'100');
				$('.words').animate({
					marginTop: '0'
				},'100');
				$('.nav li a ').animate({
					fontSize:'20px',
					lineHeight:'72px',
					paddingTop:'20px'
				},'100');
				$('.phone a').animate({
					lineHeight:'72px',
					paddingTop:'0px'
				},'100');

			}
		}
		/*onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5){
				$(".title_en").remove();
			}
		}*/
	});


	/*$.ajax({
		type: "GET",
		url: "ajax/message.json",
		dataType: "json",
		success: function(data){
			for(var i in data.about_info){
				$("#about_info").append("<p>"+data.about_info[i]+"</p>");
			}
			$("#skill_info").append("<p>"+data.skill_info+"</p>");
			$(".skill_int").append("<ul></ul>");
			for(var i in data.html){
				$("#skill_int1 ul").append("<li>"+data.html[i]+"</li>");
			}
			for(var i in data.css){
				$("#skill_int2 ul").append("<li>"+data.css[i]+"</li>");
			}
			for(var i in data.javaScript){
				$("#skill_int3 ul").append("<li>"+data.javaScript[i]+"</li>");
			}
			for(var i in data.jQuery){
				$("#skill_int4 ul").append("<li>"+data.jQuery[i]+"</li>");
			}
			for(var i in data.contact_info){
				$("#contact_info").append("<p>"+data.contact_info[i]+"</p>");
			}
		}
	});*/
});

/*
(function ($) {
	$.fn.loadingRing = function () {
		var defaultOpt = {
			trackColor: '#f0f0f0',
			progressColor: '#6ec84e',
			precent: 75,
			duration: 1500
		}; // 默认选项
		$(this).each(function () {
			var $target = $(this);
			var color = $target.data('color'); // 颜色
			var precent = parseInt($target.data('precent'), 10); // 百分比
			var duration = parseFloat($target.data('duration'), 10) * 1000; // 持续时间
			var trackColor, progressColor;
			if (color && color.split(',').length === 2) {
				var colorSet = color.split(',');
				trackColor = colorSet[0];
				progressColor = colorSet[1];
			} else {
				trackColor = defaultOpt.trackColor;
				progressColor = defaultOpt.progressColor;
			}
			if (!precent)
				precent = defaultOpt.precent;
			if (!duration)
				duration = defaultOpt.duration;

			$target.append('<div class="progress-track"></div><div class="progress-left"></div><div class="progress-right"></div><div class="progress-cover"></div><div class="progress-text"><span class="progress-num">' + precent +'</span><span class="progress-percent">%</span></div>');

			var x = $target.find('.progress-cover').height(); // 触发 Layout
			// http://stackoverflow.com/questions/12088819/css-transitions-on-new-elements

			$target.find('.progress-track, .progress-cover').css('border-color', trackColor);
			$target.find('.progress-left, .progress-right').css('border-color', progressColor);

			$target.find('.progress-left').css({
				'transform': 'rotate(' + precent * 3.6 + 'deg)',
				'-o-transform': 'rotate(' + precent * 3.6 + 'deg)',
				'-ms-transform': 'rotate(' + precent * 3.6 + 'deg)',
				'-moz-transform': 'rotate(' + precent * 3.6 + 'deg)',
				'-webkit-transform': 'rotate(' + precent * 3.6 + 'deg)',
				'transition': 'transform ' + duration + 'ms linear',
				'-o-transition': '-o-transform ' + duration + 'ms linear',
				'-ms-transition': '-ms-transform ' + duration + 'ms linear',
				'-moz-transition': '-moz-transform ' + duration + 'ms linear',
				'-webkit-transition': '-webkit-transform ' + duration + 'ms linear'
			});

			if (precent > 50) {
				var animation = 'toggle ' + (duration * 50 / precent) + 'ms';
				$target.find('.progress-right').css({
					'opacity': 1,
					'animation': animation,
					'animation-timing-function': 'step-end'
				});
				$target.find('.progress-cover').css({
					'opacity': 0,
					'animation': animation,
					'animation-timing-function': 'step-start'
				});
			}
		});
	};
})(jQuery);
*/
