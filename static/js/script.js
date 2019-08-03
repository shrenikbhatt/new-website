$(document).ready(function(){
    $(this).scrollTop(0); //Scroll to top on refresh.

    var ids = ['#home', '#about', '#projects', '#contact'];
    var tabs = ['#home1','#about1', '#projects1', '#contact1'];
    var count = 0;
    var lock = false;
    //function to create slideshow effect (works on chrome and firefox)
    $('#fullpage').on('wheel', function (e) {
        var delta = e.originalEvent.deltaY;
        if (lock){
            delta = 0;
            return;
        }
        if (delta != 0){
            lock = true;
        }
        // $('.active').removeClass('active');
        if (delta > 0) {
            if (count >= 3){
                count = 3;
                $(tabs[count]).addClass('active');
                window.setTimeout(function(){
                    lock = false;
                }, 500);
                return;
            }
            count++;
            $(document.documentElement).animate({
                scrollTop: $(ids[count]).offset().top
            }, 1500);
        } else if (delta < 0) {
            if (count <= 0){
                count = 0;
                $(tabs[count]).addClass('active');
                window.setTimeout(function(){
                    lock = false;
                }, 500);
                return
            }
            count--;
            scrolled = true;
            $(document.documentElement).animate({
                scrollTop: $(ids[count]).offset().top
            }, 1500);
        }
        changeNavColour()

        window.setTimeout(function(){
        lock = false;
        }, 2250);
    });

    //For touch devices (optimize code)
    var lastY;
    var done = 0;
    // var check = false;
    $('#fullpage').on('touchmove', function(e){
        if (done >= 2){
            lastY = undefined;
            return;
        }
        check = false;
        done++;
        var currentY = e.originalEvent.touches ?
            e.originalEvent.touches[0].pageY : e.pageY;
        if (currentY > lastY){
            if (count <= 0){
                count = 0;
                if (lastY != undefined){
                    window.setTimeout(function(){
                        done = 0;
                    }, 1000);
                }
                return
            }
            count--;
            scrolled = true;
            $(document.documentElement).animate({
                scrollTop: $(ids[count]).offset().top
            }, 1500);
        }
        else if (lastY > currentY)
            {
            if (count >= 3){
                count = 3;
                if (lastY != undefined){
                    window.setTimeout(function(){
                        done = 0;
                    }, 1000);
                }
                return;
            }
            count++;
            $(document.documentElement).animate({
                scrollTop: $(ids[count]).offset().top
            }, 1500);
        }
        changeNavColour();
        if (lastY != undefined){
            window.setTimeout(function(){
                done = 0;
            }, 1000);
        }
        lastY = currentY;
    });

    //Function to scroll on tab click
    $('.nav-link').on('click', function(){
        $('.active').removeClass('active');
        var hre = $(this).attr('href');
        if (hre == '#home'){
            count = 0;
            $('#home1').addClass('active');
        }
        else if(hre == '#about'){
            count = 1;
            $('#about1').addClass('active');
        }
        else if(hre == '#projects'){
            count = 2;
            $('#projects1').addClass('active');
        }
        else if (hre == '#contact'){
            count = 3;
            $('#contact1').addClass('active');
        }
        $(document.documentElement).animate({
            scrollTop: $(hre).offset().top
            }, 1250);
        changeNavColour();
    });

    function changeNavColour(){
        $('.active').removeClass('active');
        $(tabs[count]).addClass('active')
        if (count != 0 || count != 2){
            $(".navbar").removeClass("bg-white");
            $(".navbar").addClass("bg-dark");
            $(".navbar").removeClass("navbar-light");
            $(".navbar").addClass("navbar-dark");
        }
        if (count == 0 || count == 2){
            $(".navbar").removeClass("bg-dark");
            $(".navbar").removeClass("navbar-dark");
            $(".navbar").addClass("bg-white");
            $(".navbar").addClass("navbar-light");
        }
    }
});