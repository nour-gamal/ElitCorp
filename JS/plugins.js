$(function(){


    /*Calulating the height of carousel*/
    
    var winH=$(window).height(),
        upperbarH=$('.upperbar').innerHeight(),
        navbarH=$('.navbar').innerHeight();

        $('.carousel,.carousel-item').height(winH-(upperbarH+navbarH));
        
    /*End Calulating the height of carousel*/

    /*Start featured work section*/
    
    $('.featuredWork ul li').on("click",function(){

        $(this).addClass('active').siblings().removeClass('active');
     
        if($(this).data('class')==='.all'){
            $('.img-parent .col-sm-3').css('opacity','1');
            }else{
                
                    $($(this).data('class')).parent().siblings().css('opacity','.1');
                    $($(this).data('class')).parent().css('opacity','1');

                }



    });



    /*End featured work section*/
    /*Start statistics section */    
    let flag=0; //flag to prevent browser to operate the function with each scroll

        $(window).on('scroll',function(){
            if( $(this).scrollTop() >= $('.statistics').offset().top-400){
                if(flag==0){
                flag++;
                $('.timer').countTo();
                }

            }
            })
    
    /*End statistics section */    
    
});