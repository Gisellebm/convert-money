const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectMain = document.querySelector(".currency-select-main");

function changeStyleCurrency(style, value) {
    let formatter;

    if (style === "dolar") {
        formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
    } else if (style === "euro") {
        formatter = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        });
    } else if (style === "libra") {
        formatter = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        });
    } else if (style === "bitcoin") {
        formatter = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
        });
    } else if (style === "real") {
        formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    if (!formatter) {
        console.error('No formatter found for style:', style);
        return null;
    }

    return formatter.format(value);
}

async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    let inputCoefficient = 0.0;
    let outputCoefficient = 0.0;

    if (currencySelect.value === "dolar") {
        outputCoefficient = 5.2;
    } else if (currencySelect.value === "euro") {
        outputCoefficient = 5.6;
    } else if (currencySelect.value === "libra") {
        outputCoefficient = 6.3;
    } else if (currencySelect.value === "bitcoin") {
        outputCoefficient = 0.000008;
    }

    if (currencySelectMain.value === "dolar") {
        inputCoefficient = 5.2;
    } else if (currencySelectMain.value === "euro") {
        inputCoefficient = 5.6;
    } else if (currencySelectMain.value === "libra") {
        inputCoefficient = 6.3;
    } else if (currencySelectMain.value === "bitcoin") {
        inputCoefficient = 0.000008;
    } else if (currencySelectMain.value === "real") {
        inputCoefficient = 1.0;
    }

    const convertedValue = (inputCurrencyValue * inputCoefficient) / outputCoefficient;
    const formattedValue1 = changeStyleCurrency(currencySelect.value, convertedValue);
    currencyValueConverted.innerHTML = formattedValue1 ? formattedValue1 : 'Error formatting value';

    const formattedValue2 = changeStyleCurrency(currencySelectMain.value, inputCurrencyValue);
    currencyValueToConvert.innerHTML = formattedValue2 ? formattedValue2 : 'Error formatting value';
}

function changeCurrencyMain() {
    const currencyNameMain = document.getElementById("currencyNameMain");
    const currencyImageMain = document.querySelector(".currency-img-main");

    if (currencySelectMain.value === "dolar") {
        currencyNameMain.innerHTML = "Dólar americano";
        currencyImageMain.src = "./assets/dollar.png";
    } else if (currencySelectMain.value === "euro") {
        currencyImageMain.src = "./assets/euro.png";
        currencyNameMain.innerHTML = "Euro";
    } else if (currencySelectMain.value === "libra") {
        currencyNameMain.innerHTML = "Libra";
        currencyImageMain.src = "./assets/libra.png";
    } else if (currencySelectMain.value === "bitcoin") {
        currencyNameMain.innerHTML = "Bitcoin";
        currencyImageMain.src = "./assets/bitcoin.png";
    } else if (currencySelectMain.value === "real") {
        currencyNameMain.innerHTML = "Real";
        currencyImageMain.src = "./assets/real.png";
    }

    convertValues();
}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/dollar.png";
    } else if (currencySelect.value === "euro") {
        currencyImage.src = "./assets/euro.png";
        currencyName.innerHTML = "Euro";
    } else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    } else if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues();
}

currencySelectMain.addEventListener("change", changeCurrencyMain);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
