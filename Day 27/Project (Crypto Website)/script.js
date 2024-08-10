// var btc =document.getElementById("bitcoin");
// var doge =document.getElementById("dogecoin");
// var ethereum =document.getElementById("ethereum");
 
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
//     "method": "GET",
//     "headers": {}
// }

// $.ajax(settings).done(function (response) {
//     btc.innerHTML = Math.round(response.price);
//     // doge.innerHTML = response.dogecoin.usd;
//     // ethereum.innerHTML = response.ethereum.usd;
//     console.log(response);
// });


const urls = [
    'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
    'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
    'https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT'
];

async function fetchPrices() {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        document.getElementById('bitcoin').innerText = parseFloat(data[0].price).toFixed(2);
        document.getElementById('ethereum').innerText = parseFloat(data[1].price).toFixed(2);
        document.getElementById('dogecoin').innerText = parseFloat(data[2].price).toFixed(2);
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

// Fetch prices on page load
fetchPrices();

// set an interval to refresh the prices every minute
setInterval(fetchPrices, 6000);