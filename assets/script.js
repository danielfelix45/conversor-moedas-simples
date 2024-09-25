let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convertCurrency("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convertCurrency("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    if (usdInput.value !== "") {
        usdInput.value = formatCurrency(usdInput.value)
    }
})

brlInput.addEventListener("blur", () => {
    if (brlInput.value !== "") {
        brlInput.value = formatCurrency(brlInput.value)
    }
})

usdInput.value = "1,00"
convertCurrency("usd-to-brl")

// Funções
function formatCurrency(value) {

    let fixedValue = fixValue(value)
    // Função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixedValue)
}

// Função que ajusta o valor
function fixValue(value) {

    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (isNaN(floatValue)) {
        floatValue = 0
    }

    return floatValue
}

async function convertCurrency(type) {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';

    try {
        const response = await fetch(url);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        let exchangeRate = data.USDBRL.bid;

        if (type == "usd-to-brl") {
            if (usdInput.value.trim() === "") {
                brlInput.value = ""
                return;
            }
            let fixedValue = fixValue(usdInput.value);
            let result = (fixedValue * exchangeRate).toFixed(2);
            brlInput.value = formatCurrency(result);
        }

        if (type == "brl-to-usd") {
            if (brlInput.value.trim() === "") {
                usdInput.value = ""
                return;
            }
            let fixedValue = fixValue(brlInput.value);
            let result = (fixedValue / exchangeRate).toFixed(2);
            usdInput.value = formatCurrency(result);
        }

    } catch (error) {
        console.error("Erro ao converter moedas:", error);
        alert("Houve um problema ao tentar obter a taxa de conversão. Tente novamente mais tarde.");
    }
}