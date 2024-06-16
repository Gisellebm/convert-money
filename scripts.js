const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const currencySelect = document.querySelector(".currency-select");

    const dollarToday = 5.2;
    const euroToday = 5.6;
    const libraToday = 6.3;
    const bitcoinToday = 0.000008;
    


    if(currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }
    if(currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

convertButton.addEventListener("click", convertValues)