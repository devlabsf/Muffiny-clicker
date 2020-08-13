var muffins = 0;

var phrases = [
  "Don't waste your muffins!",
  "Hi, grandma",
  "You muffiny rested",
  "RIP Lachlan",
  "RIP Jayden",
  "You are Stinkey",
  "Everyone likes your muffins",
  "You are a muffins",
  "Your muffins are tasty",
  "Muffins are tasty",
  "Angle Brackets are good",
  "Keep Muffiny clicking!"
]

var price = []
price["baker"] =       20;
price["bakery"] =      200;
price["factory"] =     2000;
price["country"] =     20000;
price["planet"] =      200000;
price["solarsystem"] = 2000000;
price["galaxy"] =      20000000;
price["universe"] =    200000000;
price["cosmos"] =      2000000000;

function randomphrase() {
  var num = Math.floor(Math.random() * 11);
  document.getElementById("messages").innerText = phrases[num];
}

function error(msg) {
  document.getElementById("messages").innerText = msg;
}

function formatNum(num) {
  if (num > 1000000000000) {
    n = (num / 1000000000000).toFixed(2);
    return (n.toString() + " trillion");
  }
  else if (num > 1000000000) {
    n = (num / 1000000000).toFixed(2);
    return (n.toString() + " billion");
  }
  else if (num > 1000000) {
    n = (num / 1000000).toFixed(2);
    return (n.toString() + " million");
  }
  else if (num > 1000) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  else {
    return num.toString();
  }
}

function muffinclick() {
  muffins += 1;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}

function work_bakers() {
  var bakers = document.getElementById("bakercount").innerText;
  muffins += parseInt(bakers);
  document.getElementById("muffincount").innerText = formatNum(muffins);
}

function work_bakeries() {
  var bakeries = document.getElementById("bakerycount").innerText;
  muffins += parseInt(bakeries) * 10;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}

function work_factories() {
  var factories = document.getElementById("factorycount").innerText;
  muffins += parseInt(factories) * 100;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}

function work_countries() {
  var countries = document.getElementById("countrycount").innerText;
  muffins += parseInt(countries) * 1000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}

function work_planets() {
  var planets = document.getElementById("planetcount").innerText;
  muffins += parseInt(planets) * 10000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}
function work_solarsystems() {
  var solarsystems = document.getElementById("solarsystemcount").innerText;
  muffins += parseInt(solarsystems) * 100000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}
function work_galaxies() {
  var galaxies = document.getElementById("galaxycount").innerText;
  muffins += parseInt(galaxies) * 10000000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}
function work_universes() {
  var universes = document.getElementById("universecount").innerText;
  muffins += parseInt(universes) * 10000000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}
function work_cosmos() {
  var cosmoses = document.getElementById("cosmoscount").innerText;
  muffins += parseInt(cosmoses) * 100000000;
  document.getElementById("muffincount").innerText = formatNum(muffins);
}


function buy_baker() {
  var bakers = document.getElementById("bakercount").innerText;
  var currentprice = price["baker"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a baker!");
  }
  else {
    document.getElementById("bakercount").innerText = parseInt(bakers) + 1;
    muffins -= currentprice;
    price["baker"] = Math.round(currentprice * 1.1);
    document.getElementById("bakerprice").innerText = formatNum(price["baker"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_bakery() {
  var bakeries = document.getElementById("bakerycount").innerText;
  var currentprice = price["bakery"];
  if (muffins < currentprice) {
   error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a bakery.");
  }
  else {
    document.getElementById("bakerycount").innerText = parseInt(bakeries) + 1;
    muffins -= currentprice;
    price["bakery"] = Math.round(price["bakery"] * 1.1);
    document.getElementById("bakeryprice").innerText = formatNum(price["bakery"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_factory() {
  var factories = document.getElementById("factorycount").innerText;
  var currentprice = price["factory"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a factory!");
 }
 else {
  document.getElementById("factorycount").innerText = parseInt(factories) + 1;
  muffins -= currentprice;
  price["factory"] = Math.round(price["factory"] * 1.1);
  document.getElementById("factoryprice").innerText = formatNum(price["factory"]);
  document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_country() {
  var countries = document.getElementById("countrycount").innerText;
  var currentprice = price["country"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a country!");
  }
  else {
    document.getElementById("countrycount").innerText = parseInt(countries) + 1;
    muffins -= currentprice;
    price["country"] = Math.round(price["country"] * 1.1);
    document.getElementById("countryprice").innerText = formatNum(price["country"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_planet() {
  var planets = document.getElementById("planetcount").innerText;
  var currentprice = price["planet"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a planet!");
  }
  else {
    document.getElementById("planetcount").innerText = parseInt(planets) + 1;
    muffins -= currentprice;
    price["planet"] = Math.round(price["planet"] * 1.1);
    document.getElementById("planetprice").innerText = formatNum(price["planet"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_solarsystem() {
  var solarsystems = document.getElementById("solarsystemcount").innerText;
  var currentprice = price["solarsystem"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a solar system!");
  }
  else {
    document.getElementById("solarsystemcount").innerText = parseInt(solarsystems) + 1;
    muffins -= currentprice;
    price["solarsystem"] = Math.round(price["solarsystem"] * 1.1);
    document.getElementById("solarsystemprice").innerText = formatNum(price["solarsystem"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_galaxy() {
  var galaxies = document.getElementById("galaxycount").innerText;
  var currentprice = price["galaxy"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a galaxy!");
  }
  else {
    document.getElementById("galaxycount").innerText = parseInt(galaxies) + 1;
    muffins -= currentprice;
    price["galaxy"] = Math.round(price["galaxy"] * 1.1);
    document.getElementById("galaxyprice").innerText = formatNum(price["galaxy"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}

function buy_universe() {
  var universes = document.getElementById("universecount").innerText;
  var currentprice = price["universe"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a universe!");
  }
  else {
    document.getElementById("universecount").innerText = parseInt(universes) + 1;
    muffins -= currentprice;
    price["universe"] = Math.round(price["universe"] * 1.1);
    document.getElementById("universeprice").innerText = formatNum(price["universe"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}
function buy_cosmos() {
  var cosmos = document.getElementById("cosmoscount").innerText;
  var currentprice = price["cosmos"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a cosmos!");
  }
  else {
    document.getElementById("cosmoscount").innerText = parseInt(cosmos) + 1;
    muffins -= currentprice;
    price["cosmos"] = Math.round(price["cosmos"] * 1.1);
    document.getElementById("cosmosprice").innerText = formatNum(price["cosmos"]);
    document.getElementById("muffincount").innerText = formatNum(muffins);
  }
}



setInterval(function(){ work_bakers(); } , 1000);
setInterval(function(){ work_bakeries(); } , 1000);
setInterval(function(){ work_factories(); } , 1000);
setInterval(function(){ work_countries(); } , 1000);
setInterval(function(){ work_planets(); } , 1000);
setInterval(function(){ work_solarsystems(); } , 1000);
setInterval(function(){ work_galaxies(); } , 1000);
setInterval(function(){ work_universes(); } , 1000);
setInterval(function(){ randomphrase(); } , 10000);

function fixCompany() {
  var name = prompt("Enter new company name:");
  document.getElementById('company').innerText = name + "'s Factory";
}