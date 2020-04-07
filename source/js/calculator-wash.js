
        $('.calculator__field-container').on('change', function() {
            $itemOne = $('select#item-1 option:selected').attr('data-cost');
            $itemTwo = $('select#item-2 option:selected').attr('data-cost');
            $itemThree = $('select#item-3 option:selected').attr('data-cost');
            $itemFour = $('select#item-4 option:selected').attr('data-cost');
            $addWork = $('select#addSelect option:selected').val();
            $getAddWork = function($addWork) {
                if ($addWork != 0) {
                    return 1.3;

                } else {
                    return 1;
                }
            };
            $getAddWorkVal = $getAddWork($addWork);
            $price = parseInt($itemOne) + parseInt($itemTwo) + parseInt($itemThree) + parseInt($itemFour);
            $totalPrice = $price * $getAddWorkVal;
            $('.calculator__total-price').text($totalPrice);
        });