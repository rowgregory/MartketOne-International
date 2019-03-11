$().ready(function() {

    $('#signupForm').validate({
        rules: {
            firstname: {
                required:true,
                minlength:2
            },
            lastname:"required",
            email: {
                required:true,
                email:true
            },
            title: {
                required:true,
                pattern: '^(M(?:is)?s|(?:Mrs?))'

            },
            phone: {
                required:true,
                digits:true
            },
            input: {
                required:true,  
            }
        },
        messages: {
            firstname: {
                required:'Please enter your first name',
                minlength:$.validator.format("Your minlength of {0} is not right!")
            },
            lastname:"Please enter your last name",
            title: {
                required:'Please enter your title',
                pattern:'Please enter Mr, Mrs, Ms,'

            },
            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>Valid</em> email address'
            },
            phone: {
                required:'Please enter your phone number',
                digits:'Only numbers please'
            },
            inputState: {
                required:'Please select an answer'
            }
        },
        submitHandler: function() {
            
            var data = $('#signupForm').serialize().split('&');
            var obj = {};
            for(var key in data) {
                obj[data[key].split('=')[0]] = data[key].split('=')[1];
            }

            $.ajax({
                url: "images/iconfinder_correct_3855625.svg",
                dataType: 'html',
                type: 'GET',
                success: function(data) {         
                    $(".nested-box-2").prepend(data)
                                        .css({
                                            'display':'flex',
                                            'justify-content':'center',
                                            'align-items':'center'
                                        })
                    $("#signupForm").hide();
                    
                    function welcomeName() {
                        $('.welcome').append(obj.firstname)
                        .css({'color':'#ff0000', 'transition':'2s ease'})
                        .fadeIn('show', 2000)
                        setTimeout(function() {
                            $('.welcome').css({'color':'#000000', 'transition':'2s ease'})
                        }, 2000)
                    };
                    setTimeout(welcomeName, 2000);

                    var $formBox = $(".nested-box-2")

                    $($formBox).click(function() {
                        location.reload()
                    })
                }  
            });   
        },
        success: function(element) {
            element.remove();
        }
    });
});

$('.nav-link').each(function(){
    $(this).append('<img src="images/mobile_link_arrow.png">')
    $(this).addClass('nav-link-button');
           
});