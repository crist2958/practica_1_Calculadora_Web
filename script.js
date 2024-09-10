$(document).ready(function() {
    $('#calculate').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operation = $('#operation').val();
        var result;

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, introduce numeros válidos.');
            return;
        }

        switch (operation) {
            case 'sumar':
                result = num1 + num2;
                break;
            case 'restar':
                result = num1 - num2;
                break;
            case 'multiplicar':
                result = num1 * num2;
                break;
            case 'dividir':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert('No se puede dividir por cero.');
                    return;
                }
                break;
            default:
                alert('Selecciona una opción válida.');
                return;
        }

        $('#result').val(result);
    });
});
