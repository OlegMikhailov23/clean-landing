$('.room-minus, .room-plus').click(function () {
    var $input = $(this).parent().find('#room-count-top');
    var val = parseFloat($input.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 10 || isNaN(val))
        val = 10;

    $input.val(val + '-комнатная').trigger('change');
});
$('.bath-minus, .bath-plus').click(function () {
    var $input = $(this).parent().find('#bath-count-top');
    var val = parseFloat($input.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 6 || isNaN(val))
        val = 6;

    $input.val(val + '-санузел').trigger('change');
});

$('.room-minus-bottom, .room-plus-bottom').click(function () {
    var $inputbtm = $(this).parent().find('#room-count-bottom');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus-bottom') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 10 || isNaN(val))
        val = 10;

    $inputbtm.val(val + '-комнатная').trigger('change');
});
$('.bath-minus-bottom, .bath-plus-bottom').click(function () {
    var $inputbtm = $(this).parent().find('#bath-count-bottom');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus-bottom') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 6 || isNaN(val))
        val = 6;

    $inputbtm.val(val + '-санузел').trigger('change');
});

//Мытье окон верхняя форма//

$('.room-minus, .room-plus').click(function () {
    var $inputbtm = $(this).parent().find('#window-top');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 2 || isNaN(val))
        val = 2;
    if (val > 10 || isNaN(val))
        val = 10;

    $inputbtm.val(val + ' окна').trigger('change');

    if (val > 4 || isNaN(val))

    $inputbtm.val(val + ' окон').trigger('change');
});

$('.bath-minus, .bath-plus').click(function () {
    var $inputbtm = $(this).parent().find('#balcon-window-top');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 6 || isNaN(val))
        val = 6;

    $inputbtm.val(val + ' балкон').trigger('change');

    if (val < 1 || isNaN(val))
    $inputbtm.val(val + ' балконов').trigger('change');

    if (val > 1 || isNaN(val))
    $inputbtm.val(val + ' балкона').trigger('change');

    if (val > 4 || isNaN(val))
    $inputbtm.val(val + ' балконов').trigger('change');
});

//Мытье окон верхняя форма//

//Мытье окон нижняя форма//

$('.room-minus-bottom, .room-plus-bottom').click(function () {
    var $inputbtm = $(this).parent().find('#window-bottom');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus-bottom') ? 1 : -1;
    if (val < 2 || isNaN(val))
        val = 2;
    if (val > 10 || isNaN(val))
        val = 10;

    $inputbtm.val(val + ' окна').trigger('change');

    if (val > 4 || isNaN(val))

    $inputbtm.val(val + ' окон').trigger('change');
});

$('.bath-minus-bottom, .bath-plus-bottom').click(function () {
    var $inputbtm = $(this).parent().find('#balcon-window-bottom');
    var val = parseFloat($inputbtm.val());

    val += $(this).hasClass('plus-bottom') ? 1 : -1;
    if (val < 1 || isNaN(val))
        val = 1;
    if (val > 6 || isNaN(val))
        val = 6;

    $inputbtm.val(val + ' балкон').trigger('change');

    if (val < 1 || isNaN(val))
    $inputbtm.val(val + ' балконов').trigger('change');

    if (val > 1 || isNaN(val))
    $inputbtm.val(val + ' балкона').trigger('change');

    if (val > 4 || isNaN(val))
    $inputbtm.val(val + ' балконов').trigger('change');
});

//Мытье окон нижняя форма//