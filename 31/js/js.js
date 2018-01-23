/* 
* @Author: Marte
* @Date:   2017-04-10 15:27:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-13 11:46:43
*/

 $(document).ready(function($) {
         $(".tian-content").hide();
         $(".arrow-down").hide();
        $(".tianjia").click(function(event) {
          $(".tian-content").show();
            var i = $(this).index()-5;
            /*alert(i);*/
            $(this).parent().next().children().children().children().children().eq(i).show().siblings().hide();
            /*$(this).parent().next().children().children().children().children().eq(i).children().eq(0).show().siblings().hide();*/
            $(".pic").children().eq(0).show().siblings().hide();
            $(".pic").children(".tab1").eq(0).show().siblings().hide();
            $(".pic").children("table").eq(0).show().siblings().hide();
            $(this).children('.arrow-up').hide();
            $(this).siblings().children('.arrow-up').show();
            $(this).siblings().children('.arrow-down').hide();
            $(this).children('.arrow-down').show();

            $(".arrow-left").click(function(e) {        
                 $(".pic").children("table").eq(0).show().siblings().hide();
              });  
              $(".arrow-right").click(function(e) {        
                 $(".pic").children("table").eq(1).show().siblings().hide();
              }); 

           var j=0
              $(".arrow-left").click(function(e) {        
                 $(".line0").children().eq(i).children().eq(j-1).show().siblings().hide();
                 j--;
              });  
              $(".arrow-right").click(function(e) {        
                 $(".line0").children().eq(i).children().eq(j+1).show().siblings().hide();
                 j++;
              }); 
        });
        $("#close1,#close2,#close3").click(function(event) {
            $(".tian-content").hide();
            $(".arrow-up").show();
            $(".arrow-down").hide();
        });

        


    });
    