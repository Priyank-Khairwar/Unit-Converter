var OptionType = document.getElementById('OptionType');
var input = document.getElementById('input');
var result = document.getElementById('result');
var InputType = document.getElementById('InputType');
var ResultType = document.getElementById('ResultType');

var InputTypeValue, ResultTypeValue,OptionTypeValue;

OptionType.addEventListener("change",myResult);
input.addEventListener("keyup", myResult);
InputType.addEventListener("change", myResult);
ResultType.addEventListener("change", myResult);

InputTypeValue = InputType.value;
ResultTypeValue = ResultType.value;
OptionTypeValue = OptionType.value;

function myResult() {

    InputTypeValue = InputType.value;
    ResultTypeValue = ResultType.value;


    // ******************* Length Converter  *************************************
    
    if (InputTypeValue ==="meter" && ResultTypeValue ==="kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (InputTypeValue === "meter" && ResultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
    }
    else if (InputTypeValue === "meter" && ResultTypeValue === "meter") {
        result.value = input.value;
    }

    if (InputTypeValue === "kilometer" && ResultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    }
    else if (InputTypeValue === "kilometer" && ResultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100000;
    }
    else if (InputTypeValue === "kilometer" && ResultTypeValue === "kilometer") {
        result.value = input.value;
    }

    if (InputTypeValue === "centimeter" && ResultTypeValue === "meter") {
        result.value = Number(input.value) * 0.00001;
    }
    else if (InputTypeValue === "centimeter" && ResultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.01;
    }
    else if (InputTypeValue === "centimeter" && ResultTypeValue === "centimeter") {
        result.value = input.value;
    }
    
    // *********************** Tempreature Converter ********************************


    if (InputTypeValue === "Degree Celsius" && ResultTypeValue === "Fahrenheit") {
        result.value = Number(input.value) * 1.8+32;
    }
    else if (InputTypeValue === "Degree Celsius" && ResultTypeValue === "Kelvin") {
        result.value = Number(input.value) + 273.15;
    }
    else if (InputTypeValue === "Degree Celsius" && ResultTypeValue === "Degree Celsius") {
        result.value = input.value;
    }
    if (InputTypeValue === "Fahrenheit" && ResultTypeValue === "Degree Celsius") {
        result.value = ((Number(input.value)- 32) * (5/9));
    }
    else if (InputTypeValue === "Fahrenheit" && ResultTypeValue === "Kelvin") {
        result.value = (Number(input.value) + 459.67)*(5/9);
    }
    else if (InputTypeValue === "Fahrenheit" && ResultTypeValue === "Fahrenheit") {
        result.value = input.value;
    }
    if (InputTypeValue === "Kelvin" && ResultTypeValue === "Degree Celsius") {
        result.value = (Number(input.value)-273.15);
    }
    else if (InputTypeValue === "Kelvin" && ResultTypeValue === "Fahrenheit") {
        result.value = ((9/5)*(Number(input.value)-273) + 32);
    }
    else if (InputTypeValue === "Kelvin" && ResultTypeValue === "Kelvin") {
        result.value = input.value;
    }

    
    
    // ************************ Weight Converter ****************************


    // ***************** Kg  to gram,Miligram,Microgram,Pound ***************

   
    if (InputTypeValue === "Kilogram" && ResultTypeValue === "Gram") {
        result.value = (Number(input.value) * 1000);
    }
    else if (InputTypeValue === "Kilogram" && ResultTypeValue === "Miligram") {
        result.value = (Number(input.value) * 1000000);
    }
    else if (InputTypeValue === "Kilogram" && ResultTypeValue === "Microgram") {
        result.value = (Number(input.value) * 1000000000);
    }
    else if (InputTypeValue === "Kilogram" && ResultTypeValue === "Pound") {
        result.value = (Number(input.value) * 2.205);
    }
    else if (InputTypeValue === "Kilogram" && ResultTypeValue === "Kilogram") {
        result.value = input.value;
    }


    // ************** Gram to Kg ,miligram,microgram,pound ***********
    if (InputTypeValue === "Gram" && ResultTypeValue === "Kilogram") {
        result.value = (Number(input.value) / 1000);
    }
    else if (InputTypeValue === "Gram" && ResultTypeValue === "Miligram") {
        result.value = (Number(input.value) * 1000);
    }
    else if (InputTypeValue === "Gram" && ResultTypeValue === "Microgram") {
        result.value = (Number(input.value) * 1000000);
    }
    else if (InputTypeValue === "Gram" && ResultTypeValue === "Pound") {
        result.value = (Number(input.value) / 453.6);
    }
    else if (InputTypeValue === "Gram" && ResultTypeValue === "Gram") {
        result.value = input.value;
    }


    //********* Mg to Kg,gram,microgram,pound *******************
    
    
    if (InputTypeValue === "Miligram" && ResultTypeValue === "Kilogram") {
        result.value = (Number(input.value) / 1000000);
    }
    else if (InputTypeValue === "Miligram" && ResultTypeValue === "Gram") {
        result.value = (Number(input.value) / 1000);
    }
    else if (InputTypeValue === "Miligram" && ResultTypeValue === "Microgram") {
        result.value = (Number(input.value) * 1000);
    }
    else if (InputTypeValue === "Miligram" && ResultTypeValue === "Pound") {
        result.value = (Number(input.value) / 453600);
    }
    else if (InputTypeValue === "Miligram" && ResultTypeValue === "Miligram") {
        result.value = input.value;
    }

    
    // ************  Microgram to kilogram,gram,miligram,pound  *****************************
    
    
    if (InputTypeValue === "Microgram" && ResultTypeValue === "Kilogram") {
        result.value = (Number(input.value) / 1000000000);
    }
    else if (InputTypeValue === "Microgram" && ResultTypeValue === "Gram") {
        result.value = (Number(input.value) / 1000000);
    }
    else if (InputTypeValue === "Microgram" && ResultTypeValue === "Miligram") {
        result.value = (Number(input.value) / 1000);
    }
    else if (InputTypeValue === "Microgram" && ResultTypeValue === "Pound") {
        result.value = ((Number(input.value) * (2.205))/1000000000);
    }
    else if (InputTypeValue === "Microgram" && ResultTypeValue === "Microgram") {
        result.value = input.value;
    }

    
    // ******************* Pound to kilogram,gram,miligram,microgram,pound **************
    
    
    if (InputTypeValue === "Pound" && ResultTypeValue === "Kilogram") {
        result.value = (Number(input.value) / 2.205);
    }
    else if (InputTypeValue === "Pound" && ResultTypeValue === "Gram") {
        result.value = (Number(input.value) * 453.6);
    }
    else if (InputTypeValue === "Pound" && ResultTypeValue === "Miligram") {
        result.value = (Number(input.value) * 453600);
    }
    else if (InputTypeValue === "Pound" && ResultTypeValue === "Microgram") {
        result.value = ((Number(input.value) * 453592370));
    }
    else if (InputTypeValue === "Pound" && ResultTypeValue === "Pound") {
        result.value = input.value;
    }

    
    // *********************** Time Converter *******************************

    // ************************ Mint to Hour,sec **************************
    
    
    if (InputTypeValue === "Minute" && ResultTypeValue === "Hour") {
        result.value = (Number(input.value) / 60);
    }
    else if (InputTypeValue === "Minute" && ResultTypeValue === "Second") {
        result.value = (Number(input.value) * 60);
    }
    else if (InputTypeValue === "Minute" && ResultTypeValue === "Minute") {
        result.value = input.value;
    }


    // ******************  Hour to Mint,Sec **************************
    
    
    if (InputTypeValue === "Hour" && ResultTypeValue === "Minute") {
        result.value = (Number(input.value) * 60);
    }
    else if (InputTypeValue === "Hour" && ResultTypeValue === "Second") {
        result.value = (Number(input.value) * 3600);
    }
    else if (InputTypeValue === "Hour" && ResultTypeValue === "Hour") {
        result.value = input.value;
    }


    //****************** Sec to Mint,Hour ***************************
    
    
    if (InputTypeValue === "Second" && ResultTypeValue === "Minute") {
        result.value = (Number(input.value) / 60);
    }
    else if (InputTypeValue === "Second" && ResultTypeValue === "Hour") {
        result.value = (Number(input.value) * 3600);
    }
    else if (InputTypeValue === "Second" && ResultTypeValue === "Second") {
        result.value = input.value;
    }
}