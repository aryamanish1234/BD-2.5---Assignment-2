const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;


app.use(cors())


app.get('/', (req, res) => {
  res.send("BD 2.5 - Assignment 2")
});

let stocks = [
  { id: 1, name: "reliance industries", price: 2500, growth: 3.5, industry: "finance", exchange: "nse" },
  { id: 2, name: "hdfc bank", price: 1800, growth: 4.2, industry: "finance", exchange: "bse" },
  { id: 3, name: "icici bank", price: 1600, growth: 5.1, industry: "finance", exchange: "nse" },
  { id: 4, name: "tata consultancy services", price: 3200, growth: 2.9, industry: "finance", exchange: "bse" },
  { id: 5, name: "infosys", price: 2900, growth: 3.8, industry: "finance", exchange: "nse" },
  { id: 6, name: "dr. reddy's laboratories", price: 2100, growth: 4.7, industry: "pharma", exchange: "bse" },
  { id: 7, name: "sun pharmaceutical", price: 2300, growth: 3.2, industry: "pharma", exchange: "nse" },
  { id: 8, name: "cipla", price: 2100, growth: 2.6, industry: "pharma", exchange: "bse" },
  { id: 9, name: "ntpc", price: 1200, growth: 4.1, industry: "power", exchange: "nse" },
  { id: 10, name: "power grid corporation", price: 1500, growth: 3.4, industry: "power", exchange: "bse" },
  { id: 11, name: "adani power", price: 2200, growth: 5.3, industry: "power", exchange: "nse" },
  { id: 12, name: "lupin", price: 2000, growth: 4.5, industry: "pharma", exchange: "bse" },
  { id: 13, name: "axis bank", price: 1750, growth: 2.8, industry: "finance", exchange: "nse" },
  { id: 14, name: "state bank of india", price: 1450, growth: 3.6, industry: "finance", exchange: "bse" },
  { id: 15, name: "bajaj finance", price: 2650, growth: -2.9, industry: "finance", exchange: "nse" },
  { id: 16, name: "dr. reddy's laboratories", price: 1950, growth: 4.3, industry: "pharma", exchange: "bse" },
  { id: 17, name: "biocon", price: 1850, growth: 3.9, industry: "pharma", exchange: "nse" },
  { id: 18, name: "torrent power", price: 1600, growth: 2.4, industry: "power", exchange: "bse" },
  { id: 19, name: "tata power", price: 1750, growth: 4.0, industry: "power", exchange: "nse" },
  { id: 20, name: "jsw energy", price: 1450, growth: 3.1, industry: "power", exchange: "bse" },
];

// Endpoint 1: Get all stocks
app.get('/stocks', (req, res) => {
  res.json({ stocks });
});

// Endpoint 2: Get stocks sorted by pricing
app.get('/stocks/sort/pricing', (req, res) => {
  const { order } = req.query; // Expecting order parameter: "asc" or "desc"
  const sortedStocks = [...stocks].sort((a, b) => {
    return order === 'desc' ? b.price - a.price : a.price - b.price;
  });
  res.json({ stocks: sortedStocks });
});

// Endpoint 3: Get stocks sorted by growth
app.get('/stocks/sort/growth', (req, res) => {
  const { order } = req.query; // Expecting order parameter: "asc" or "desc"
  const sortedStocks = [...stocks].sort((a, b) => {
    return order === 'desc' ? b.growth - a.growth : a.growth - b.growth;
  });
  res.json({ stocks: sortedStocks });
});

// Endpoint 4: Filter stocks by exchange
app.get('/stocks/filter/exchange', (req, res) => {
  const { exchange } = req.query; // Expecting exchange parameter: "nse" or "bse"
  const filteredStocks = stocks.filter(stock => stock.exchange.toLowerCase() === exchange.toLowerCase());
  res.json({ stocks: filteredStocks });
});

// Endpoint 5: Filter stocks by industry
app.get('/stocks/filter/industry', (req, res) => {
  const { industry } = req.query; // Expecting industry parameter: "finance", "pharma", or "power"
  const filteredStocks = stocks.filter(stock => stock.industry.toLowerCase() === industry.toLowerCase());
  res.json({ stocks: filteredStocks });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
