$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
});


$(document).ready(function(){
    
    
    $('.button2_title').click(function(){
        $('html').animate({scrollTop: 0}, 2000);
            
    });
});

