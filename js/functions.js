function countClick(context) {
    $.ajax({
        url: '/js/ajax-update-ad-click.php',
        type: 'POST',
        data: {
            id: $(context).data("id")
        },
        dataType: 'text',
        success: function(response) {}
    });
    return true
}