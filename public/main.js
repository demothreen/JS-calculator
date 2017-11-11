"use strict";

    var result;

    function calc(Num) {

        if (Num === 'c') {
            display.value = '';
        } else if (Num === "=") {
            try {
                var result1 = eval(result);

                display.value = result1
                if (result1 === Infinity || Number.isNaN(result1)) {
                    alert('На ноль делить нельзя!');
                    throw new Error('Печаль');
                } 
            } catch (e) {

                display.value = '';
            }
        } else if (Num !== "=") {
            display.value += Num;
            result = display.value;

        }

}
