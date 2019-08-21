$(document).ready(function(){
    $('.submit').click(function(event) {
        event.preventDefault();

        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();

        if (email.length < 5 || !email.includes('@') || !mail.includes('.')){
            console.log('email is invalid');
        }
        if (subject.length < 1){
            console.log('subject is invalid');
        }
        if (message.length < 1){
            console.log('message is invalid');
        }


    });
});