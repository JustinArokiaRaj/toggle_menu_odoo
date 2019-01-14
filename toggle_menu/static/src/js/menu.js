//$(document).ready(function () {
//
//    $( ".toggle_leftmenu").click(function() {
//            $( ".o_sub_menu").animate({
//            width: 'toggle'
//        });
//         $( "#oe_main_menu_navbar").animate({
//            width: 'toggle'
//        });
//
////        alert();
//     //   $("#oe_main_menu_navbar").hide();
//
//            $( ".o_sub_menu").find('img').animate({
//            width: 'toggle'
//        });
//         $( "#oe_main_menu_navbar").find('img').animate({
//            width: 'toggle'
//        });
//
//    });
//
//    $( "ul.nav li a" ).each(function(index) {
//        $(this).on("click", function(){
//            $( ".o_sub_menu").show();
//             $("#oe_main_menu_navbar").show();
//            $( ".o_sub_menu").find('img').show();
//        });
//    });
//});






$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		         $( "#oe_main_menu_navbar").toggle({
            direction: "right"
        },2000);
            $( ".o_sub_menu").animate({
            width: 'toggle'
	});
	            $( ".o_sub_menu").find('img').animate({
            width: 'toggle'
        });
});
});