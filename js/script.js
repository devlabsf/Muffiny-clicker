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
price["baker"] =       10;
price["bakery"] =      100;
price["factory"] =     1000;
price["country"] =     10000;
price["planet"] =      100000;
price["solarsystem"] = 1000000;
price["galaxy"] =      10000000;
price["universe"] =    100000000;
price["cosmos"] =      1000000000;

function randomphrase() {
  var num = Math.floor(Math.random() * 11);
  document.getElementById("messages").textContent = phrases[num];
}

function error(msg) {
  document.getElementById("messages").textContent = msg;
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
    return num;
  }
}

function muffinclick() {
  muffins += 1;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}

function work_bakers() {
  var bakers = document.getElementById("bakercount").innerHTML;
  muffins += parseInt(bakers);
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}

function work_bakeries() {
  var bakeries = document.getElementById("bakerycount").innerHTML;
  muffins += parseInt(bakeries) * 10;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}

function work_factories() {
  var factories = document.getElementById("factorycount").innerHTML;
  muffins += parseInt(factories) * 100;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}

function work_countries() {
  var countries = document.getElementById("countrycount").innerHTML;
  muffins += parseInt(countries) * 1000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}

function work_planets() {
  var planets = document.getElementById("planetcount").innerHTML;
  muffins += parseInt(planets) * 10000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}
function work_solarsystems() {
  var solarsystems = document.getElementById("solarsystemcount").innerHTML;
  muffins += parseInt(solarsystems) * 100000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}
function work_galaxies() {
  var galaxies = document.getElementById("galaxycount").innerHTML;
  muffins += parseInt(galaxies) * 10000000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}
function work_universes() {
  var universes = document.getElementById("universecount").innerHTML;
  muffins += parseInt(universes) * 10000000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}
function work_cosmos() {
  var cosmoses = document.getElementById("cosmoscount").innerHTML;
  muffins += parseInt(cosmoses) * 100000000;
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
}


function buy_baker() {
  var bakers = document.getElementById("bakercount").innerHTML;
  var currentprice = price["baker"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a baker!");
  }
  else {
    document.getElementById("bakercount").innerHTML = parseInt(bakers) + 1;
    muffins -= currentprice;
    price["baker"] = Math.round(currentprice * 1.1);
    document.getElementById("bakerprice").innerHTML = formatNum(price["baker"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_bakery() {
  var bakeries = document.getElementById("bakerycount").innerHTML;
  var currentprice = price["bakery"];
  if (muffins < currentprice) {
   error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a bakery.");
  }
  else {
    document.getElementById("bakerycount").innerHTML = parseInt(bakeries) + 1;
    muffins -= currentprice;
    price["bakery"] = Math.round(price["bakery"] * 1.1);
    document.getElementById("bakeryprice").innerHTML = formatNum(price["bakery"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}
function buy_factory() {
  var factories = document.getElementById("factorycount").innerHTML;
  var currentprice = price["factory"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a factory!");
 }
 else {
  document.getElementById("factorycount").innerHTML = parseInt(factories) + 1;
  muffins -= currentprice;
  price["factory"] = Math.round(price["factory"] * 1.1);
  document.getElementById("factoryprice").innerHTML = formatNum(price["factory"]);
  document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_country() {
  var countries = document.getElementById("countrycount").innerHTML;
  var currentprice = price["country"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a country!");
  }
  else {
    document.getElementById("countrycount").innerHTML = parseInt(countries) + 1;
    muffins -= currentprice;
    price["country"] = Math.round(price["country"] * 1.1);
    document.getElementById("countryprice").innerHTML = formatNum(price["country"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_planet() {
  var planets = document.getElementById("planetcount").innerHTML;
  var currentprice = price["planet"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a planet!");
  }
  else {
    document.getElementById("planetcount").innerHTML = parseInt(planets) + 1;
    muffins -= currentprice;
    price["planet"] = Math.round(price["planet"] * 1.1);
    document.getElementById("planetprice").innerHTML = formatNum(price["planet"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_solarsystem() {
  var solarsystems = document.getElementById("solarsystemcount").innerHTML;
  var currentprice = price["solarsystem"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a solar system!");
  }
  else {
    document.getElementById("solarsystemcount").innerHTML = parseInt(solarsystems) + 1;
    muffins -= currentprice;
    price["solarsystem"] = Math.round(price["solarsystem"] * 1.1);
    document.getElementById("solarsystemprice").innerHTML = formatNum(price["solarsystem"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_galaxy() {
  var galaxy = document.getElementById("galaxycount").innerHTML;
  var currentprice = price["galaxy"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a galaxy!");
  }
  else {
    document.getElementById("galaxycount").innerHTML = parseInt(galaxycount) + 1;
    muffins -= currentprice;
    price["galaxy"] = Math.round(price["galaxy"] * 1.1);
    document.getElementById("galaxyprice").innerHTML = formatNum(price["galaxy"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}

function buy_universe() {
  var universes = document.getElementById("universecount").innerHTML;
  var currentprice = price["universe"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a universe!");
  }
  else {
    document.getElementById("universecount").innerHTML = parseInt(universes) + 1;
    muffins -= currentprice;
    price["universe"] = Math.round(price["universe"] * 1.1);
    document.getElementById("universeprice").innerHTML = formatNum(price["universe"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}
function buy_cosmos() {
  var cosmos = document.getElementById("cosmoscount").innerHTML;
  var currentprice = price["cosmos"];
  if (muffins < currentprice) {
    error("You muffiny clicker! You need " + formatNum(currentprice) + " muffins to buy a cosmos!");
  }
  else {
    document.getElementById("cosmoscount").innerHTML = parseInt(cosmos) + 1;
    muffins -= currentprice;
    price["cosmos"] = Math.round(price["cosmos"] * 1.1);
    document.getElementById("cosmosprice").innerHTML = formatNum(price["cosmos"]);
    document.getElementById("muffincount").innerHTML = formatNum(muffins);
  }
}



setInterval(function(){ work_bakers(); } , 2000);
setInterval(function(){ work_bakeries(); } , 2000);
setInterval(function(){ work_factories(); } , 2000);
setInterval(function(){ work_countries(); } , 2000);
setInterval(function(){ work_planets(); } , 2000);
setInterval(function(){ work_solarsystems(); } , 2000);
setInterval(function(){ work_galaxies(); } , 2000);
setInterval(function(){ work_universes(); } , 2000);
setInterval(function(){ randomphrase(); } , 10000);

function fixCompany() {
  var name = prompt("Enter new company name:");
  document.getElementById('company').innerText = name + "'s Factory";
}