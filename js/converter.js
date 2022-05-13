{
    const calculateResult = (amount, currency) => {
        const EUR = 4.6862;
        const USD = 4.2245;
        const GBP = 5.5643;
        const CHF = 4.5149;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;

            case "CHF":
                return amount / CHF;

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