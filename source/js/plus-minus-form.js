$('.room-minus, .room-plus').click(function () {
    var $input = $(this).parent().find('input');
    var val = parseFloat($input.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;

    $input.val(val + '-комнатная').trigger('change');
});
$('.bath-minus, .bath-plus').click(function () {
    var $input = $(this).parent().find('input');
    var val = parseFloat($input.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;

    $input.val(val + '-санузел').trigger('change');
});