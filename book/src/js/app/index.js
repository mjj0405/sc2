require(['jquery'], function($) {
    $.ajax({
        url: '/api/index',
        dataType: 'json',
        success: function(res) {
            console.log(res);
        },
        error: function(error) {
            console.warn(error);
        }
    })
})