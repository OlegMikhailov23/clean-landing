//Carpet Calculator 1.1
//This calculator was made by Oleg Mikhaylov 
//See me here: https://github.com/OlegMikhailov23

$(document).ready(function() {

        $('.calculator input').change(function() {
            $material = $('.calculator__choose-material-item input:checked').attr('data-cost');
            $square = (parseFloat($('#length').val()) * parseFloat($('#width').val())).toFixed(2);
            $squareSumm = 1;
            $length = 1;
            $width = 1;
            $addWork1Data = $('#add1').attr('data-cost');
            $addWork2Data = $('#add2').attr('data-cost');
            $addWork3Data = $('#add3').attr('data-cost');
            $addWork4Data = $('#add4').attr('data-cost');
            $addWork1 = 0;
            $addWork2 = 0;
            $addWork3 = 0;
            $addWork4 = 0;
            $addWork5 = 0;
            
            
            $squareSumm = $material * $square;
            
            if ($('#add1').prop("checked")) {
                $addWork1 = $('#add1').attr('data-cost');
            };


            if ($('#add2').prop("checked")) {
                $addWork2 = $('#add2').attr('data-cost');
            };

            if ($('#add3').prop("checked")) {

                $addWork3 = ($('#add3').attr('data-cost'));
            };

            if ($('#add4').prop("checked")) {

                $addWork4 = ($('#add4').attr('data-cost'));
            };
            
            if ($('#add5').prop("checked")) {

                $addWork5 = $('#add5').attr('data-cost');
            };

            $price = Math.round($squareSumm + parseInt($addWork1) + parseInt($addWork2) + parseInt($addWork3) + parseInt($addWork4) + parseInt($addWork5));
               
            if ($square < 0 || $square > 200) {
                alert('Введите корректное значение длинны и ширины!');
                $('#length').val(1);
                $('#width').val(1);
                $square = 1;
                $price = 0;
            };
            console.log($squareSumm);
            $('.calculator__total-price').text($price);
            $('.calculator__total-square').text($square);
        });
    });