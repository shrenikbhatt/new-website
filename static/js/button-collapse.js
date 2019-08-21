$(document).ready(function(){
    //About page mobile version
    if ($(window).width() < 768){
        $('.hidden').removeClass('hidden');
        $("#connections").removeClass('col-8 offset-2');
        $("#connections").addClass('col-4 offset-4');
    }
    else if ($(window).height() < 1024){
        $('.remove').removeClass('collapse');
    }
    else{
        $('.remove').removeClass('collapse');
        $('.toggle-hidden').removeClass('collapse')
        $('#next').addClass('hidden')
    }

    $('.ab').on('click', function() {
        $('.active').removeClass('active');
        $('#'+this.id).addClass('active');
        $('.show').removeClass('show');
    });

    //Projects page mobile version
    $('#next').on('click', function() {
        $('.toggle-hidden').toggleClass('collapse')
        $(this).text(function(i, v){
            return v === 'Next' ? 'Previous' : 'Next'
         });
    });
 });