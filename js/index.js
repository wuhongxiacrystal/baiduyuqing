$(function(){
		$('.containers').fullpage({

			sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		    'navigation': true,
		    'navigationTooltips':["登录百度舆情","领先：数据收集与处理","全面：舆情分析与架构","专业：专业数据可视化"],
		});
		// console.log(a);
		$('.containers').delegate('.inner a','click',function(e){
			
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		})

		$('.phone').mouseover(function(){
			// var index=$(this).index();
			$('.list').css('display','block');
		})
		$('.phone').mouseout(function(){
			// var index=$(this).index();
			$('.list').css('display','none');
		})
		
	});