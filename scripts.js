const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectMain = document.querySelector(".currency-select-main");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dollarToday = 5.2;
    const euroToday = 5.6;
    const libraToday = 6.3;
    const bitcoinToday = 0.000008;
    


    if(currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    } else if(currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } else if(currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    } else if(currencySelect.value === "bitcoin") {
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

function changeCurrencyMain() {
    const currencyNameMain = document.getElementById("currencyNameMain");
    const currencyImageMain = document.querySelector(".currency-img");

    if(currencySelectMain.value === "dolar") {
        currencyNameMain.innerHTML = "Dólar americano";
        currencyImageMain.src = "./assets/dollar.png";
    } else if(currencySelectMain.value === "euro") {
        currencyImageMain.src = "./assets/euro.png";
        currencyNameMain.innerHTML = "Euro";
    } else if(currencySelectMain.value === "libra") {
        currencyNameMain.innerHTML = "Libra";
        currencyImageMain.src = "./assets/libra.png";
    } else if(currencySelectMain.value === "bitcoin") {
        currencyNameMain.innerHTML = "Bitcoin";
        currencyImageMain.src = "./assets/bitcoin.png";
    }

    //convertValues()
}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName");
    const currencyImage = document.querySelector(".currency-img");

    if(currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/dollar.png";
    } else if(currencySelect.value === "euro") {
        currencyImage.src = "./assets/euro.png";
        currencyName.innerHTML = "Euro";
    } else if(currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    } else if(currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues()
}

currencySelectMain.addEventListener("change", changeCurrencyMain)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)