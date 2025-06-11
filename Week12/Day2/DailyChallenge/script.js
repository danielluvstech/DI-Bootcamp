const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const switchBtn = document.getElementById("switch-btn");
const resultDiv = document.getElementById("result");

const API_KEY = "818940cb73c2a1c251159aff";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;
const SUPPORTED_CODES_URL = `${BASE_URL}/codes`;

// Populate currency dropdowns using supported codes
async function populateCurrencies() {
  try {
    const response = await fetch(SUPPORTED_CODES_URL);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("Failed to load supported codes");
    }

    const currencies = data.supported_codes;

    currencies.forEach(([code, name]) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = option2.value = code;
      option1.text = option2.text = `${code} - ${name}`;

      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });

    // Set default selections
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
  } catch (error) {
    resultDiv.textContent = "Error loading currency list.";
    console.error("Error fetching supported currencies:", error);
  }
}

// Convert currency using the Pair Conversion endpoint
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("Pair conversion request failed");
    }

    const converted = data.conversion_result.toFixed(2);
    const rate = data.conversion_rate;

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to} (Rate: ${rate})`;
  } catch (error) {
    resultDiv.textContent = "Error converting currency.";
    console.error("Error fetching conversion data:", error);
  }
}

// Swap currencies and auto-convert
switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  convertCurrency();
});

// Event listeners
convertBtn.addEventListener("click", convertCurrency);
populateCurrencies();



