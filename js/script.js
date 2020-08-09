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
price["baker"] = 10;
price["bakery"] = 100;
price["factory"] = 1000;
price["country"] = 10000;
price["planet"] =  100000;
price["solarsystem"] = 1000000;
price["universe"] = 10000000;

function randomphrase() {
  var num = Math.floor(Math.random() * 11);
  document.getElementById("messages").textContent = phrases[num];
}

function muffinclick() {
  var totalmuffins = document.getElementById( "muffincount").innerHTML;
  totalmuffins = parseInt(totalmuffins) + 1;
  document.getElementById("muffincount").innerHTML = totalmuffins;
}

function work_bakers() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var bakers = document.getElementById("bakercount").innerHTML;
  var newmuffins = parseInt(muffins) + parseInt(bakers);
  document.getElementById("muffincount").innerHTML = newmuffins;
}

function work_bakeries() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var bakeries = document.getElementById("bakerycount").innerHTML;
  var newmuffins = parseInt(muffins) + parseInt(bakeries) * 10;
  document.getElementById("muffincount").innerHTML = newmuffins;
}

function work_factories() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var factories = document.getElementById("factorycount").innerHTML;
  var newmuffins = parseInt(muffins) + parseInt(factories) * 100;
  document.getElementById("muffincount").innerHTML = newmuffins;
}

function work_countries() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var countries = document.getElementById("countrycount").innerHTML;
  var newmuffins = parseInt(muffins) + parseInt(countries) * 1000;
  document.getElementById("muffincount").innerHTML = newmuffins;
}

function work_planets() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var planets = document.getElementById("planetcount").innerHTML;
  var newmuffins = parseInt(muffins) + parseInt(planets) * 10000;
  document.getElementById("muffincount").innerHTML = newmuffins;
}


function buy_baker() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var bakers = document.getElementById("bakercount").innerHTML;
  var currentprice = price["baker"];
  if (muffins < currentprice) {
    document.getElementById("messages").innerHTML = "You muffiny clicker! You need " + currentprice + " muffins to buy a baker!"
  }
  else {
    document.getElementById("bakercount").innerHTML = parseInt(bakers) + 1;
    document.getElementById("muffincount").innerHTML = muffins - currentprice;
    price["baker"] = Math.round(price["baker"] * 1.1);
    document.getElementById("bakerprice").innerHTML = price["baker"];
  }
}

function buy_bakery() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var bakeries = document.getElementById("bakerycount").innerHTML;
  var currentprice = price["bakery"];
  if (muffins < currentprice) {
   document.getElementById("messages").innerHTML = "You muffiny clicker! You need " + currentprice + " muffins to buy a bakery."
  }
  else {
    document.getElementById("bakerycount").innerHTML = parseInt(bakeries) + 1
    document.getElementById("muffincount").innerHTML = muffins - currentprice
    price["bakery"] = Math.round(price["bakery"] * 1.1);
    document.getElementById("bakeryprice").innerHTML = price["bakery"];
  }
}
function buy_factory() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var factories = document.getElementById("factorycount").innerHTML;
  var currentprice = price["factory"];
  if (muffins < currentprice) {
   document.getElementById("messages").innerHTML = "You muffiny clicker! You need " + currentprice + " muffins to buy a factory!";
 }
 else {
  document.getElementById("factorycount").innerHTML = parseInt(factories) + 1
  document.getElementById("muffincount").innerHTML = muffins - currentprice;
  price["factory"] = Math.round(price["factory"] * 1.1);
  document.getElementById("factoryprice").innerHTML = price["factory"];
 }
}

function buy_country() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var countries = document.getElementById("countrycount").innerHTML;
  var currentprice = price["country"];
  if (muffins < currentprice) {
   document.getElementById("messages").innerHTML = "You muffiny clicker! You need " + currentprice + " muffins to buy a country!";
 }
 else {
   document.getElementById("countrycount").innerHTML = parseInt(countries) + 1;
   document.getElementById("muffincount").innerHTML = muffins - currentprice;
   price["country"] = Math.round(price["country"] * 1.1);
  document.getElementById("countryprice").innerHTML = price["country"];
 }
}

function buy_planet() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var planets = document.getElementById("planetcount").innerHTML;
  var currentprice = price["planet"];
  if (muffins < currentprice) {
   document.getElementById("messages").textContent = "You muffiny clicker! You need " + currentprice + " muffins to buy a planet!";
 }
 else {
   document.getElementById("planetcount").innerHTML = parseInt(planets) + 1;
   document.getElementById("muffincount").innerHTML = muffins - currentprice;
   price["planet"] = Math.round(price["planet"] * 1.1);
   document.getElementById("planetprice").innerHTML = price["planet"];
 }
}

function buy_solarsystem() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var solarsystems = document.getElementById("solarsystemcount").innerHTML;
  var currentprice = price["solarsystem"];
  if (muffins < currentprice) {
   document.getElementById("messages").textContent = "You muffiny clicker! You need " + currentprice + " muffins to buy a solar system!";
 }
 else {
   document.getElementById("solarsystemcount").innerHTML = parseInt(solarsystems) + 1;
   document.getElementById("muffincount").innerHTML = muffins - currentprice;
   price["solarsystem"] = Math.round(price["solarsystem"] * 1.1);
   document.getElementById("solarsystemprice").innerHTML = price["solarsystem"];
 }
}

function buy_universe() {
  var muffins = document.getElementById("muffincount").innerHTML;
  var universes = document.getElementById("universecount").innerHTML;
  var currentprice = price["universe"];
  if (muffins < currentprice) {
   document.getElementById("messages").textContent = "You muffiny clicker! You need " + currentprice + " muffins to buy a universe!";
 }
 else {
   document.getElementById("universecount").innerHTML = parseInt(universes) + 1;
   document.getElementById("muffincount").innerHTML = muffins - currentprice;
   price["universe"] = Math.round(price["universe"] * 1.1);
   document.getElementById("universeprice").innerHTML = price["universe"];
 }
}


setInterval(function(){ work_bakers(); } , 2000);
setInterval(function(){ work_bakeries(); } , 2000);
setInterval(function(){ work_factories(); } , 2000);
setInterval(function(){ work_countries(); } , 2000);
setInterval(function(){ randomphrase(); } , 10000);
