import $ from "jquery";

// API pública de criptomonedas (CoinGecko en este ejemplo)
const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const PARAMS = "?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

export function initializeDashboard() {
  fetchDataAndRender();
}

function fetchDataAndRender() {
  $.ajax({
    url: API_URL + PARAMS,
    method: "GET",
    success: function (data) {
      renderCryptoCards(data);
    },
    error: function () {
      $("#crypto-dashboard").html(
        `<div class="col-12 text-danger text-center">Error al cargar datos</div>`
      );
    },
  });
}

function renderCryptoCards(cryptos) {
  const container = $("#crypto-dashboard");
  container.empty();

  cryptos.forEach((coin) => {
    const card = `
      <div class="col-md-6">
        <div class="crypto-card">
          <h5>${coin.name} (${coin.symbol.toUpperCase()})</h5>
          <div class="crypto-price">$${coin.current_price.toLocaleString()}</div>
          <div class="crypto-change ${coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}">
            Cambio 24h: ${coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <img src="${coin.image}" alt="${coin.name}" width="30" height="30" />
        </div>
      </div>
    `;
    container.append(card);
  });
}
