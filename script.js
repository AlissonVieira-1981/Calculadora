const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectof = document.querySelector(".currency-select-of")
const currencyBoxConvert = document.querySelector(".currancy-box-convert")
const currancyValueToConvert = document.querySelector(".currancy-value-to-convert")
const currancyValueToConverted = document.querySelector(".currancy-value")


function convertValues() {

    const inputCurrancyValue = document.querySelector(".input-currancy").value
    const currancyValueToConvert = document.querySelector(".currancy-value-to-convert")
    const currancyValueToConverted = document.querySelector(".currancy-value")

    const DollarToday = 6.12

    const EuroToday = 6.44

    const LibraToday = 7.65

    const BitCoinToday = 623.967

    const dollarForEuro = DollarToday / EuroToday

    const EuroToDollar = EuroToday / DollarToday

    const LibraToEuro = LibraToday / EuroToday

    const LibraToDollar = LibraToday / DollarToday

    const LibraToBitCoin = LibraToday / BitCoinToday

    const BitCoinToEuro = BitCoinToday / EuroToday

    const BitCoinToLibra = BitCoinToday / LibraToday

    const BitCoinToDollar = BitCoinToday / DollarToday



    if (currencySelect.value == "Dollar") {
        currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrancyValue / DollarToday)
    }

    if (currencySelect.value == "Euro") {
        currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrancyValue / EuroToday)
    }

    if (currencySelect.value == "Libra") {
        currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrancyValue / LibraToday)
    }

    if (currencySelect.value == "BitCoin") {
        currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrancyValue / BitCoinToday)
    }

    currancyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrancyValue)


    if (currencySelectof.value == "Dollar-Americano") {
        currancyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrancyValue)

        if (currencySelect.value == "Euro") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrancyValue * dollarForEuro)
        }

        if (currencySelect.value == "Real") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrancyValue * DollarToday)
        }

    }



    if (currencySelectof.value == "Euro") {
        currancyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrancyValue)


        if (currencySelect.value == "Dollar") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrancyValue * EuroToDollar)
        }

        if (currencySelect.value == "Real") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrancyValue * EuroToday)
        }

    }



    if (currencySelectof.value == "Libra") {
        currancyValueToConvert.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrancyValue)


        if (currencySelect.value == "Euro") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrancyValue * LibraToEuro)
        }

        if (currencySelect.value == "Real") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrancyValue * LibraToday)
        }

        if (currencySelect.value == "Dollar") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrancyValue * LibraToDollar)
        }

        if (currencySelect.value == "BitCoin") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrancyValue * LibraToBitCoin)
        }

    }

    if (currencySelectof.value == "BitCoin") {
        currancyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrancyValue)

        if (currencySelect.value == "Euro") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrancyValue * BitCoinToEuro)
        }

        if (currencySelect.value == "Real") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrancyValue * BitCoinToday)
        }

        if (currencySelect.value == "Dollar") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrancyValue * BitCoinToDollar)
        }

        if (currencySelect.value == "Libra") {
            currancyValueToConverted.innerHTML = new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrancyValue * BitCoinToLibra)
        }

    }

}


function ChangeValueFlags() {

    const currencyImage = document.querySelector(".currency-img")
    const currencyName = document.getElementById("currency-name")

    if (currencySelect.value == "Dollar") {
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
        currencyName.innerHTML = "U$S Dollar Americano"

    }

    if (currencySelect.value == "Euro") {
        currencyImage.src = "./assets/Design sem nome 3.png"
        currencyName.innerHTML = "€ Euro"
    }
    if (currencySelect.value == "BitCoin") {
        currencyImage.src = "./assets/bitcoin 1.png"
        currencyName.innerHTML = "₿ BitCoin"
    }

    if (currencySelect.value == "Libra") {
        currencyImage.src = "./assets/libra 1.png"
        currencyName.innerHTML = "£ Libra"
    }

    if (currencySelect.value == "Real") {
        currencyImage.src = "./assets/brasil 2.png"
        currencyName.innerHTML = "R$ Real"
    }

    convertValues()
}



function ChangeSelectOf() {

    const currencyChoosen = document.querySelector(".currency-choosen")
    const coinFlag = document.querySelector(".coin-flag")

    if (currencySelectof.value == "Euro") {
        currencyChoosen.innerHTML = "Euro"
        coinFlag.src = "./assets/Design sem nome 3.png"

    }
    if (currencySelectof.value == "Dollar-Americano") {
        currencyChoosen.innerHTML = "Dollar"
        coinFlag.src = "./assets/estados-unidos (1) 1.png"

    }

    if (currencySelectof.value == "BitCoin") {
        currencyChoosen.innerHTML = "BitCoin"
        coinFlag.src = "./assets/bitcoin 1.png"
    }

    if (currencySelectof.value == "Libra") {
        currencyChoosen.innerHTML = "Libra"
        coinFlag.src = "./assets/libra 1.png"
    }

    if (currencySelectof.value == "Real") {
        currencyChoosen.innerHTML = "Real"
        coinFlag.src = "./assets/brasil 2.png"
    }

    convertValues()
}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", ChangeValueFlags)
currencySelectof.addEventListener("change", ChangeSelectOf)










