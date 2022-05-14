{
    const calculateResult = (amount, currency) => {
        const eur = 4.6862;
        const usd = 4.2245;
        const gbp = 5.5643;
        const chf = 4.5149;

        switch (currency) {
            case "EUR":
                return amount / eur;

            case "USD":
                return amount / usd;

            case "GBP":
                return amount / gbp;

            case "CHF":
                return amount / chf;
        }
    };
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)}PLN = <strong>${result.toFixed(2)}${currency}</strong>`;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}