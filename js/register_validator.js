$(document).ready(function () {
    $('#sign-up').validate({
        rules: {

            username: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16
            },
            confirmPassword : {
                required : true,
                equalTo : '#password'
            },
            gender : {
                required : true,
            },
            checkbox :{
                required : true,
            }
        },
        messages: {
            username: {
                minlength: 'Username must be at least 4 characters',
                maxlength: 'Username must be between 4 to 15 characters'
            },
            email: {
                email: 'Please enter valid email address'
            },
            password: {
                minlength: 'Password must be at least 8 characters long',
                maxlength: 'Password must be between 8 to 16 characters'
            },

        }
    });


});