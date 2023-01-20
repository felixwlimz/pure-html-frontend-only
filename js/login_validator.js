$(document).ready(function () {
    $('.log-in.form').validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                email: 'Invalid email address'
            },
            password: {
                password: 'Incorrect password'
            }
        }
    });
});