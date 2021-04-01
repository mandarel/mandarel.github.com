/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var trees = 1000000000;
var money = 1000;
var trunks = 0;
var growerincome = 0;
var chopperincome = 0;
var sellerincome = 0;
var growerexpense = 0;
var chopperexpense = 0;
var sellerexpense = 0;
var growerincomepersec = 0;
var chopperincomepersec = 0;
var sellerincomepersec = 0;
var growerexpensepersec = 0;
var chopperexpensepersec = 0;
var sellerexpensepersec = 0;
var date = new Date();
var goal = 0;
var prestigepoints = 0;
var achievsmultiplier = 1;
var treemodifier = 100;
var slaingreatoaks= 0;
var mana=0;

var apiBase = "http://city-weather-e-api.us-e1.cloudhub.io/api/cities&callback=? ";

fetch(apiBase)
  .then(function(response) {
  console.log(response);
    return response.json();
  })
  .catch(function(err){
    console.log(err);
  });

fetch('http://city-weather-e-api.us-e1.cloudhub.io/api/cities', 
{
	method: 'POST',
	body: JSON.stringify({
      cities: [
        { cityName: "Warsaw", country: "Poland" },
        { cityName: "Gdansk", country: "Poland" }
      ],
      firstDay: "2021-04-01T03:34:41.098Z",
      lastDay: "2021-04-05T03:34:41.098Z"
    })
}).then(function(response) {
  console.log(response);
    return response.json();
  }).catch(function(err){
  console.log(err);
})


function Upgrades(price, name, number, building, multiplier, active) {
    this.price = price;
    this.name = name;
    this.number = number;
    this.building = building;
    this.multiplier = multiplier;
    this.active = active;
}
var upgrade = new Array(18);
function Grow(price, income, expense, name, number) {
    this.price = price;
    this.income = income;
    this.expense = expense;
    this.name = name;

    this.number = number;
}
var grower = new Array(6);
function Chop(price, income, expense, name, number) {
    this.price = price;
    this.income = income;
    this.expense = expense;
    this.name = name;
    this.number = number;
}
var chopper = new Array(6);

function Sell(price, income, expense, name, number) {
    this.price = price;
    this.income = income;
    this.expense = expense;
    this.name = name;
    this.number = number;
}
var seller = new Array(6);
function Forest(price, income, name,active) {
    this.price = price;
    this.income = income;
    this.active = active;
    this.name = name;
 //   this.number = number;
}
var forester = new Array(6);

grower[0]= new Grow(100,2,0,"Sapling",1);
grower[1]= new Grow(200,4,0,"Sprinkler",0);
grower[2]= new Grow(6500,130,0,"Forester",0);
grower[3]= new Grow(73000,1460,0,"Tractor",0);
grower[4]= new Grow(409700,8194,0,"Forestry",0);
grower[5]= new Grow(1562600,31252,0,"National Park",0);

chopper[0]= new Chop(100,2,1,"Saw",1);
chopper[1]= new Chop(200,4,7.5,"Lumberjack",0);
chopper[2]= new Chop(6500,130,30,"Forwarder",0);
chopper[3]= new Chop(73000,1460,120,"Chainsaw",0);
chopper[4]= new Chop(409700,8194,1000,"Logging camp",0);
chopper[5]= new Chop(1562600,31252,5000,"Laser saw",0);

seller[0]= new Sell(100,2,2,"Gawker",1);
seller[1]= new Sell(200,4,15,"Stand",0);
seller[2]= new Sell(6500,130,60,"Sawmill",0);
seller[3]= new Sell(73000,1460,240,"Furniture factory",0);
seller[4]= new Sell(409700,8194,2000,"Expo Hall",0);
seller[5]= new Sell(1562600,31252,5000,"New King In Town",0);

forester[0]= new Forest(1,1,"New Forest Deal",0);
forester[1]= new Forest(10,2,"forest2",0);
forester[2]= new Forest(20,3,"forest3",0);
forester[3]= new Forest(30,4,"forest4",0);
forester[4]= new Forest(40,5,"forest5",0);
forester[5]= new Forest(50,6,"forest6",0);





upgrade[0] = new Upgrades(100, "Bigger Sprinklers", 0, 0, 2, 0);
upgrade[1] = new Upgrades(200, "Sharper Saws", 0, 1, 2, 0);
upgrade[2] = new Upgrades(500, "Louder Gawkers", 0, 2, 2, 0);
upgrade[3] = new Upgrades(1000, "Doubler Saplings", 1, 0, 2, 0);
upgrade[4] = new Upgrades(1700, "Better Workout", 1, 1, 2, 0);
upgrade[5] = new Upgrades(2600, "Shinier Stand", 1, 2, 2, 0);
upgrade[6] = new Upgrades(3700, "Hard Working Men", 2, 0, 2, 0);
upgrade[7] = new Upgrades(5000, "Bigger Loads", 2, 1, 2, 0);
upgrade[8] = new Upgrades(6500, "Sharper Saws- Sawmill", 2, 2, 2, 0);
upgrade[9] = new Upgrades(8200, "Better Engines", 3, 0, 2, 0);
upgrade[10] = new Upgrades(10100, "Oiled Chainsaws", 3, 1, 2, 0);
upgrade[11] = new Upgrades(12200, "Bader Maior", 3, 2, 2, 0);
upgrade[12] = new Upgrades(14500, "Double Size", 4, 0, 2, 0);
upgrade[13] = new Upgrades(17000, "Better Community", 4, 1, 2, 0);
upgrade[14] = new Upgrades(19700, "Artisan Workshops", 4, 2, 2, 0);
upgrade[15] = new Upgrades(22600, "Safari", 5, 0, 2, 0);
upgrade[16] = new Upgrades(25700, "They didn't SAW what was coming", 5, 1, 2, 0);
upgrade[17] = new Upgrades(29000, "Unsuited", 5, 2, 2, 0);



function Achiev(active, building, set, threshold, name, tooltip) {
    this.active = active;
    this.building = building;
    this.set = set;
    this.threshold = threshold;
    this.name = name;
    this.tooltip = tooltip;
}
var achievements = new Array(90);
achievements[0] = new Achiev(0, 0, 0, 1, "1 Sapling", "");
achievements[1] = new Achiev(0, 0, 0, 10, "10 Saplings", "");
achievements[2] = new Achiev(0, 0, 0, 25, "25 Saplings", "");
achievements[3] = new Achiev(0, 0, 0, 50, "50 Saplings", "");
achievements[4] = new Achiev(0, 0, 0, 100, "100 Saplings", "");
achievements[5] = new Achiev(0, 0, 1, 1, "1 Saw", "");
achievements[6] = new Achiev(0, 0, 1, 10, "10 Saws", "");
achievements[7] = new Achiev(0, 0, 1, 25, "25 Saws", "");
achievements[8] = new Achiev(0, 0, 1, 50, "50 Saws", "");
achievements[9] = new Achiev(0, 0, 1, 100, "100 Saws", "");
achievements[10] = new Achiev(0, 0, 2, 1, "1 Gawker", "");
achievements[11] = new Achiev(0, 0, 2, 10, "10 Gawkers", "");
achievements[12] = new Achiev(0, 0, 2, 25, "25 Gawkers", "");
achievements[13] = new Achiev(0, 0, 2, 50, "50 Gawkers", "");
achievements[14] = new Achiev(0, 0, 2, 100, "100 Gawkers", "");
achievements[15] = new Achiev(0, 1, 0, 1, "1 Sprinkler", "");
achievements[16] = new Achiev(0, 1, 0, 10, "10 Sprinklers", "");
achievements[17] = new Achiev(0, 1, 0, 25, "25 Sprinklers", "");
achievements[18] = new Achiev(0, 1, 0, 50, "50 Sprinklers", "");
achievements[19] = new Achiev(0, 1, 0, 100, "100 Sprinklers", "");
achievements[20] = new Achiev(0, 1, 1, 1, "1 Lumberjack", "");
achievements[21] = new Achiev(0, 1, 1, 10, "10 Lumberjacks", "");
achievements[22] = new Achiev(0, 1, 1, 25, "25 Lumberjacks", "");
achievements[23] = new Achiev(0, 1, 1, 50, "50 Lumberjacks", "");
achievements[24] = new Achiev(0, 1, 1, 100, "100 Lumberjacks", "");
achievements[25] = new Achiev(0, 1, 2, 1, "1 Stand", "");
achievements[26] = new Achiev(0, 1, 2, 10, "10 Stands", "");
achievements[27] = new Achiev(0, 1, 2, 25, "25 Stands", "");
achievements[28] = new Achiev(0, 1, 2, 50, "50 Stands", "");
achievements[29] = new Achiev(0, 1, 2, 100, "100 Stands", "");
achievements[30] = new Achiev(0, 2, 0, 1, "1 Forester", "");
achievements[31] = new Achiev(0, 2, 0, 10, "10 Forester", "");
achievements[32] = new Achiev(0, 2, 0, 25, "25 Forester", "");
achievements[33] = new Achiev(0, 2, 0, 50, "50 Forester", "");
achievements[34] = new Achiev(0, 2, 0, 100, "100 Forester", "");
achievements[35] = new Achiev(0, 2, 1, 1, "1 Forwarder", "");
achievements[36] = new Achiev(0, 2, 1, 10, "10 Forwarder", "");
achievements[37] = new Achiev(0, 2, 1, 25, "25 Forwarder", "");
achievements[38] = new Achiev(0, 2, 1, 50, "50 Forwarder", "");
achievements[39] = new Achiev(0, 2, 1, 100, "100 Forwarder", "");
achievements[40] = new Achiev(0, 2, 2, 1, "1 Sawmill", "");
achievements[41] = new Achiev(0, 2, 2, 10, "10 Sawmill", "");
achievements[42] = new Achiev(0, 2, 2, 25, "25 Sawmill", "");
achievements[43] = new Achiev(0, 2, 2, 50, "50 Sawmill", "");
achievements[44] = new Achiev(0, 2, 2, 100, "100 Sawmill", "");
achievements[45] = new Achiev(0, 3, 0, 1, "1 Tractor", "");
achievements[46] = new Achiev(0, 3, 0, 10, "10 Tractor", "");
achievements[47] = new Achiev(0, 3, 0, 25, "25 Tractor", "");
achievements[48] = new Achiev(0, 3, 0, 50, "50 Tractor", "");
achievements[49] = new Achiev(0, 3, 0, 100, "100 Tractor", "");
achievements[50] = new Achiev(0, 3, 1, 1, "1 Chainsaw", "");
achievements[51] = new Achiev(0, 3, 1, 10, "10 Chainsaw", "");
achievements[52] = new Achiev(0, 3, 1, 25, "25 Chainsaw", "");
achievements[53] = new Achiev(0, 3, 1, 50, "50 Chainsaw", "");
achievements[54] = new Achiev(0, 3, 1, 100, "100 Chainsaw", "");
achievements[55] = new Achiev(0, 3, 2, 1, "1 Furniture factory", "");
achievements[56] = new Achiev(0, 3, 2, 10, "10 Furniture factory", "");
achievements[57] = new Achiev(0, 3, 2, 25, "25 Furniture factory", "");
achievements[58] = new Achiev(0, 3, 2, 50, "50 Furniture factory", "");
achievements[59] = new Achiev(0, 3, 2, 100, "100 Furniture factory", "");
achievements[60] = new Achiev(0, 4, 0, 1, "1 Forestry", "");
achievements[61] = new Achiev(0, 4, 0, 10, "10 Forestry", "");
achievements[62] = new Achiev(0, 4, 0, 25, "25 Forestry", "");
achievements[63] = new Achiev(0, 4, 0, 50, "50 Forestry", "");
achievements[64] = new Achiev(0, 4, 0, 100, "100 Forestry", "");
achievements[65] = new Achiev(0, 4, 1, 1, "1 Logging Camp", "");
achievements[66] = new Achiev(0, 4, 1, 10, "10 Logging Camp", "");
achievements[67] = new Achiev(0, 4, 1, 25, "25 Logging Camp", "");
achievements[68] = new Achiev(0, 4, 1, 50, "50 Logging Camp", "");
achievements[69] = new Achiev(0, 4, 1, 100, "100 Logging Camp", "");
achievements[70] = new Achiev(0, 4, 2, 1, "1 Expo Hall", "");
achievements[71] = new Achiev(0, 4, 2, 10, "10 Expo Hall", "");
achievements[72] = new Achiev(0, 4, 2, 25, "25 Expo Hall", "");
achievements[73] = new Achiev(0, 4, 2, 50, "50 Expo Hall", "");
achievements[74] = new Achiev(0, 4, 2, 100, "100 Expo Hall", "");
achievements[75] = new Achiev(0, 5, 0, 1, "1 National Park", "");
achievements[76] = new Achiev(0, 5, 0, 10, "10 National Park", "");
achievements[77] = new Achiev(0, 5, 0, 25, "25 National Park", "");
achievements[78] = new Achiev(0, 5, 0, 50, "50 National Park", "");
achievements[79] = new Achiev(0, 5, 0, 100, "100 National Park", "");
achievements[80] = new Achiev(0, 5, 1, 1, "1 Laser Saw", "");
achievements[81] = new Achiev(0, 5, 1, 10, "10 Laser Saw", "");
achievements[82] = new Achiev(0, 5, 1, 25, "25 Laser Saw", "");
achievements[83] = new Achiev(0, 5, 1, 50, "50 Laser Saw", "");
achievements[84] = new Achiev(0, 5, 1, 100, "100 Laser Saw", "");
achievements[85] = new Achiev(0, 5, 2, 1, "1 New King in Town", "");
achievements[86] = new Achiev(0, 5, 2, 10, "10 New King in Town", "");
achievements[87] = new Achiev(0, 5, 2, 25, "25 New King in Town", "");
achievements[88] = new Achiev(0, 5, 2, 50, "50 New King in Town", "");
achievements[89] = new Achiev(0, 5, 2, 100, "100 New King in Town", "");




function buyBuilding(name, number) {
    var m = number;
    if (name === "chopper") {
        if (money >= chopper[m].price) {
            money -= chopper[m].price;

            chopper[m].number++;

        }
    } else if (name === "grower") {
        if (money >= grower[m].price) {
            money -= grower[m].price;

            grower[m].number++;

        }
    } else {
        if (money >= seller[m].price) {
            money -= seller[m].price;

            seller[m].number++;

        }
    }
    updateText();
}
function slainGreat(i){
    if(prestigepoints>=i){
            slaingreatoaks+=i;
            prestigepoints-=i;
            updateText();
        }
}
function showTooltip() {
    var j = 0;

    for (; j < 6; j++) {
        if (this.id === grower[j].name) {
            var text = document.createTextNode("Total income:" + grower[j].income * grower[j].number);
            break;
        }
    }
    j = 0;
    for (; j < 6; j++) {
        if (this.id === chopper[j].name) {
            var text = document.createTextNode("Total income:" + chopper[j].income * chopper[j].number);
            break;
        }
    }
    j = 0;
    for (; j < 6; j++) {
        if (this.id === seller[j].name) {
            var text = document.createTextNode("Total income:" + seller[j].income * seller[j].number);
            break;
        }
    }
    j = 0;
    for (; j < 18; j++) {
        if (this.id === upgrade[j].name) {
            if (upgrade[j].building === 2) {
                var text = document.createTextNode("For:" + grower[upgrade[j].number].name + "  price:" + upgrade[j].price + " multiplier: " + upgrade[j].multiplier);
            } else if (upgrade[j].building === 1) {

                var text = document.createTextNode("For:" + chopper[upgrade[j].number].name + "  price:" + upgrade[j].price + " multiplier: " + upgrade[j].multiplier);
            } else {
                var text = document.createTextNode("For:" + seller[upgrade[j].number].name + "  price:" + upgrade[j].price + " multiplier: " + upgrade[j].multiplier);
            }

            break;
        }



    }
    ;
    var tooltip = document.createElement('span');
    tooltip.appendChild(text);

    tooltip.className = 'too';
    text.className = 'tooltip';

    this.appendChild(tooltip);
    this.onmouseout = function remove() {
        this.removeChild(tooltip);
    };
}
function chooseGoal() {
    if (goal) {
        goal = Math.floor((Math.random() * 3) + 1);
    } else {
        loading();
    }
    if (goal === 1) {

        var element = document.getElementById("goal");
        element.innerHTML = "You have to cut down all trees!";
        trees = 3500000000;
        money = 1000;
        trunks = 0;
        document.getElementsByTagName("body")[0].style = "background-color:#BBD205;color:#231B12;";
    } else if (goal === 2) {
        var element = document.getElementById("goal");
        element.innerHTML = "You have to grow 1 billion trees!";
        trees = 0;
        money = 1000;
        trunks = 20;
        document.getElementsByTagName("body")[0].style = "background-color:#BA5536;color:black;";
    } else if (goal === 3) {
        var element = document.getElementById("goal");
        element.innerHTML = "You have to earn a billion dollars!";
        trees = 20;
        money = 1000;
        trunks = 20;
        document.getElementsByTagName("body")[0].style = "background-color:#1E1F26;color:#D0E1FC";
    } else {
        goal = 1;
        chooseGoal();
    }

}
function loadGame() {

    chooseGoal();
    for (var i = 0; i < grower.length; i++) {
        var para = document.createElement("div");

        var element = document.getElementById("buildings-grow");
        var text = document.createTextNode("Grower" + grower[i].number + " \r\n income:" + grower[i].income + "<br>price:" + grower[i].price);

        para.appendChild(text);

        element.appendChild(para);
        para.id = grower[i].name;
        para.className = "buildingone";
        para.onmouseover = showTooltip;
        para.onclick = function buy1() {
            var j = 0;
            for (; j < 10; j++) {
                if (this.id === grower[j].name) {
                    break;
                }
            }
            buyBuilding("grower", j);
        };
    }
    for (var i = 0; i < chopper.length; i++) {
        var para = document.createElement("div");

        var element = document.getElementById("buildings-chop");
        var text = document.createTextNode("Chopper" + chopper[i].number + "income:" + chopper[i].income + "price:" + chopper[i].price);

        para.appendChild(text);

        element.appendChild(para);

        para.id = chopper[i].name;
        para.className = "buildingone";
        para.onmouseover = showTooltip;
        para.onclick = function buy() {
            var j = 0;
            for (; j < 10; j++) {
                if (this.id === chopper[j].name) {
                    break;
                }
            }
            buyBuilding("chopper", j);
        };
    }

    for (var i = 0; i < seller.length; i++) {
        var para = document.createElement("div");

        var element = document.getElementById("buildings-sell");
        var text = document.createTextNode("Seller" + seller[i].number + " \r\n income:" + seller[i].income + "<br>price:" + seller[i].price);


        para.appendChild(text);

        element.appendChild(para);
        para.id = seller[i].name;
        para.className = "buildingone";
        para.onmouseover = showTooltip;
        para.onclick = function buy2() {
            var j = 0;
            for (; j < 10; j++) {
                if (this.id === seller[j].name) {
                    break;
                }
            }
            buyBuilding("seller", j);

        };
    }

    for (var i = 0; i < 9; i++) {
        var div = document.createElement("div");
        for (var j = 0; j <= 9; j++) {
            var para = document.createElement("li");
            var element = document.getElementById("tab3");
            var text = document.createTextNode(achievements[(i * 10 + j)].name);
            para.appendChild(text);
            div.appendChild(para);
            para.id = achievements[(i * 10 + j)].name;
            para.className = "achievementsone";
        }
        element.appendChild(div);
    }
        for (var i = 0; i < forester.length; i++) {
        var para = document.createElement("div");

        var element = document.getElementById("buildings-forest");
        var text = document.createTextNode(forester[i].name);

        para.appendChild(text);

        element.appendChild(para);

        para.id = forester[i].name;
        para.className = "buildingone";
        para.onmouseover = showTooltip;
        para.onclick = function buy3() {
            var j = 0;
            for (; j < 6; j++) {
                if (this.id === forester[j].name) {
                    break;
                }
            }
            if(prestigepoints>=forester[j].price){
           document.getElementById(forester[j].name).style = " background-color:black;color:white";
           forester[j].active=1;
            prestigepoints-=forester[j].price;
            updateText();
            }
        };
    }
    changeTab(1);
}
//hides the opening slot 
function intro() {
    var element = document.getElementById("introduction");
    element.hidden = true;
    element.visible = false;
    element.style = "display:none";
}
//resets hidden attr of upgrades to show them, restores the basic incomes and prices of building, updates prestige modifier and removes achievements boni, updates goal and win condition
function restart() {

    for (var i = 0; i < upgrade.length; i++) {
        document.getElementById(upgrade[i].name).hidden = 0;
        upgrade[i].active = 0;
    }

grower[0]= new Grow(100,2,0,"Sapling",1);
grower[1]= new Grow(200,4,0,"Sprinkler",0);
grower[2]= new Grow(6500,130,0,"Forester",0);
grower[3]= new Grow(73000,1460,0,"Tractor",0);
grower[4]= new Grow(409700,8194,0,"Forestry",0);
grower[5]= new Grow(1562600,31252,0,"National Park",0);

chopper[0]= new Chop(100,2,1,"Saw",1);
chopper[1]= new Chop(200,4,7.5,"Lumberjack",0);
chopper[2]= new Chop(6500,130,30,"Forwarder",0);
chopper[3]= new Chop(73000,1460,120,"Chainsaw",0);
chopper[4]= new Chop(409700,8194,1000,"Logging camp",0);
chopper[5]= new Chop(1562600,31252,5000,"Laser saw",0);

seller[0]= new Sell(100,2,2,"Gawker",1);
seller[1]= new Sell(200,4,15,"Stand",0);
seller[2]= new Sell(6500,130,60,"Sawmill",0);
seller[3]= new Sell(73000,1460,240,"Furniture factory",0);
seller[4]= new Sell(409700,8194,2000,"Expo Hall",0);
seller[5]= new Sell(1562600,31252,5000,"New King In Town",0);


    treemodifier = prestigepoints * 10;
    var oldwin = document.getElementById('win');
    oldwin.innerHTML = "Not achieved";
    achievsmultiplier = 1;
    chooseGoal();


}
//dynamically creates upgrades, assigns them function buy upgrade
function upgradeMenu() {
    for (var i = 0; i < 18; i++) {
        var para = document.createElement("p");
        para.id = upgrade[i].name;
        para.onmouseover = showTooltip;
        para.className = "upgrades";
        para.onclick = function buyUpgrade23(i) {
            var j = 0;
            for (; j < upgrade.length; j++) {
                if (this.id === upgrade[j].name) {
                    break;
                }
            }
            var m = j;
            if (money >= upgrade[m].price) {
                money -= upgrade[m].price;
                if (upgrade[m].building === 2) {
                    grower[upgrade[m].number].income *= upgrade[m].multiplier;
                } else if (upgrade[m].building === 1)
                {
                    chopper[upgrade[m].number].income *= upgrade[m].multiplier;
                    chopper[upgrade[m].number].expense *= upgrade[m].multiplier;
                } else {
                    seller[upgrade[m].number].income *= upgrade[m].multiplier;
                    seller[upgrade[m].number].expense *= upgrade[m].multiplier;
                }
                this.hidden = 1;
                upgrade[m].active = 1;
                updateText();

            }
        };

        var node = document.createTextNode(upgrade[i].name + "   ");
        para.appendChild(node);
        var element = document.getElementById('upgrades');
        element.appendChild(para);


    }
}
//randomly awards money,trunks,trees to the player
function moreTrees() {
    var m = Math.floor(Math.random() * 3) + 1;
    if(forester[0].active){
        prestigepoints+=0.2;
        updateText();
    }
    
    if (m === 1) {
        trees++;
    } else if (m === 2) {
        money++;
    } else if(m===3){
        trunks++;
    } 
}
//saves the local values to a localStorage
function saving() {
    var Save = {
        grower: grower,
        chopper: chopper,
        seller: seller,
        achievements: achievements,
        upgrade: upgrade,
        trees: trees,
        money: money,
        trunks: trunks,
        goal: goal,
        prestigepoints: prestigepoints,
        treemodifier: treemodifier,
        achievsmultiplier: achievsmultiplier
    };
    localStorage.setItem("save", JSON.stringify(Save));
}
//retrieves and checks the savegame variable from localStorage-assigns values when it's ok
function loading() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame !== "undefined" && savegame !== null) {
        if (typeof savegame.trees !== "undefined")
            trees = savegame.trees;
        if (typeof savegame.money !== "undefined")
            money = savegame.money;
        if (typeof savegame.trunks !== "undefined")
            trunks = savegame.trunks;
        if (typeof savegame.grower !== "undefined")
            grower = savegame.grower;
        if (typeof savegame.chopper !== "undefined")
            chopper = savegame.chopper;
        if (typeof savegame.seller !== "undefined")
            seller = savegame.seller;
        if (typeof savegame.achievements !== "undefined")
            achievements = savegame.achievements;
        if (typeof savegame.upgrade !== "undefined")
            upgrade = savegame.upgrade;
        if (typeof savegame.goal !== "undefined") {
            goal = savegame.goal;
        } else {
            goal = Math.floor((Math.random() * 3) + 1);
        }
        if (typeof savegame.prestigepoints !== "undefined")
            prestigepoints = savegame.prestigepoints;
        if (typeof savegame.treemodifier !== "undefined")
            treemodifier = savegame.treemodifier;
        if (typeof savegame.achievsmultiplier !== "undefined")
            achievsmultiplier = savegame.achievsmultiplier;
    }
}
function checkForForest() {
    if (prestigepoints>=1) {
            document.getElementById("forest").style="";
            document.getElementById("forest").visibility=1;
        if(document.getElementById("forest").hidden){
            document.getElementById("tab5").hidden=0;
            document.getElementById("forest").style="";
            document.getElementById("forest").visibility=1;
        }
    }
}
function purification(){
    prestigepoints=100;
}
//removes save from the system
function removeSave() {
    localStorage.removeItem("save");
}
//updates text on the page-checks achievements and toggles their state, prestige points, divides by the old achiev multi calculates a new value 
//and then multiplies the income level of the buildings by new multi, assigns to innerHTML new text, 
function updateText() {
    checkForForest();
    for (var i = 0; i < achievements.length; i++) {

        if (achievements[i].set === 0) {
            if (achievements[i].threshold <= grower[achievements[i].building].number) {
                achievements[i].active = 1;


            }
        } else if (achievements[i].set === 1) {
            if (achievements[i].threshold <= chopper[achievements[i].building].number) {
                achievements[i].active = 1;

            }
        } else if (achievements[i].set === 2) {
            if (achievements[i].threshold <= seller[achievements[i].building].number) {
                achievements[i].active = 1;


            }
        }
    }
    for (var i = 0; i < upgrade.length; i++) {
        if (upgrade[i].active)
            document.getElementById(upgrade[i].name).hidden = 1;
    }
    document.getElementById("slaingreatoaks").innerHTML = abreviation(slaingreatoaks);
    document.getElementById("prestigePoints").innerHTML = abreviation(prestigepoints);

    for (var i = 0; i < grower.length; i++) {
        grower[i].income /= achievsmultiplier;
        chopper[i].income /= achievsmultiplier;
        seller[i].income /= achievsmultiplier;
        grower[i].expense /= achievsmultiplier / 2;
        chopper[i].expense /= achievsmultiplier / 2;
        seller[i].expense /= achievsmultiplier / 2;
    }
    achievsmultiplier = 1;
    for (var i = 0; i < achievements.length; i++) {
        if (achievements[i].active) {

            document.getElementById(achievements[i].name).style = "padding:5px;background-color:black;color:white;margin-bottom:20px;padding:10px;";
            achievsmultiplier *= 1.1;
        }
    }
    for (var i = 0; i < grower.length; i++) {
        grower[i].income *= achievsmultiplier;
        chopper[i].income *= achievsmultiplier;
        seller[i].income *= achievsmultiplier;
        grower[i].expense *= achievsmultiplier / 2;
        chopper[i].expense *= achievsmultiplier / 2;
        seller[i].expense *= achievsmultiplier / 2;
        document.getElementById(grower[i].name).innerHTML = grower[i].name + ": " + grower[i].number + "<br>income: " + abreviation(grower[i].income * treemodifier) + "<br>price: " + abreviation(grower[i].price);
        document.getElementById(chopper[i].name).innerHTML = chopper[i].name + ": " + chopper[i].number + "<br>income: " + abreviation(chopper[i].income * treemodifier) + "<br>price: " + abreviation(chopper[i].price);
        document.getElementById(seller[i].name).innerHTML = seller[i].name + ": " + seller[i].number + "<br>income: " + abreviation(seller[i].income * treemodifier) + "<br>price: " + abreviation(seller[i].price);

    }



//if goal is achieved awards prestige points,calls restart with basic values, saves to localStorage
}
function prestige() {
    if (goal === 4) {

        prestigepoints++;
        restart();
        document.getElementById("prestigePoints").innerHTML = prestigepoints;
        saving();

    } else {
        console.log(prestigepoints);
    }
    updateText();
}
//calculates new level of income-zeroes all values, add layer by layer new buildings, updates div with income levels and passing of time in stats tab
function updateGame() {
    mana+=Math.log((slaingreatoaks+1000)/1000);
    growerincomepersec = 0;
    chopperincomepersec = 0;
    sellerincomepersec = 0;
    growerexpensepersec = 0;
    chopperexpensepersec = 0;
    sellerexpensepersec = 0;
    for (var i = 0; i < grower.length; i++) {
        growerincome = 0;
        sellerincome = 0;
        chopperincome = 0;
        growerexpense = 0;
        chopperexpense = 0;
        sellerexpense = 0;
        growerincome += grower[i].number * grower[i].income * treemodifier / 10;
        trees += growerincome;
        growerincomepersec += growerincome * 10;
        chopperincome += chopper[i].number * chopper[i].income * treemodifier / 10;
        chopperexpense += chopper[i].number * chopper[i].expense * treemodifier / 10;
        if (trees > chopperexpense) {
            trunks += chopperincome;
            trees -= chopperexpense;
            chopperincomepersec += chopperincome * 10;
            growerexpensepersec -= chopperexpense * 10;
        } else {
            if (trees !== 0 && chopperexpense !== 0) {
                var m = (trees - chopperexpense);

                if (!(isNaN(m) && isNaN(m / chopperexpense))) {
                    chopperincome *= ((chopperexpense + m) / chopperexpense);
                    trunks += chopperincome;
                    chopperexpense += m;
                    trees -= chopperexpense;
                    chopperincomepersec += chopperincome * 10;
                    growerexpensepersec -= chopperexpense * 10;
                }
            }
        }
        sellerincome += seller[i].number * seller[i].income * treemodifier / 10;
        sellerexpense += seller[i].number * seller[i].expense * treemodifier / 10;
        if (trunks > sellerexpense) {
            money += sellerincome;
            trunks -= sellerexpense;
            sellerincomepersec += sellerincome * 10;
            chopperexpensepersec -= sellerexpense * 10;
        } else {
            if (trunks !== 0 && sellerexpense !== 0) {
                var k = (trunks - sellerexpense);
                if (!(isNaN(k) && isNaN(k / sellerexpense))) {
                    sellerincome *= ((sellerexpense + k) / sellerexpense);
                    money += sellerincome;
                    sellerexpense += k;
                    trunks -= sellerexpense;
                    sellerincomepersec += sellerincome * 10;
                    chopperexpensepersec -= sellerexpense * 10;
                }
            }
        }
    }
    document.getElementById('trees').innerHTML = abreviation(trees) + " trees     Net:" + abreviation((growerincomepersec + growerexpensepersec)) + "    <br>" + abreviation(growerincomepersec) + "  trees/s   " + abreviation(growerexpensepersec) + "  trees felled/s";
    document.getElementById('trunks').innerHTML = abreviation(trunks) + " trunks     Net:" + abreviation((chopperincomepersec + chopperexpensepersec)) + "    <br>" + abreviation(chopperincomepersec) + "  trunks/s   " + abreviation(chopperexpensepersec) + "  trunks sold/s";
    document.getElementById('money').innerHTML = abreviation(money) + " money     Net:" + abreviation((sellerincomepersec + sellerexpensepersec)) + "    <br>" + abreviation(sellerincomepersec) + "  money/s   " + abreviation(sellerexpensepersec) + "  money spent/s";

    document.getElementById("date").innerHTML = "Played for:" + (new Date() - date) / 1000 + " seconds";
    document.getElementById("mana").innerHTML = abreviation(mana)+" mana";
}

function changeTab(tab) {
    for (var i = 1; i < 6; i++) {
        document.getElementById("tab" + i).hidden = 1;
    }
    document.getElementById("tab" + tab).hidden = 0;

}
function abreviation(w) {
    var m = 1;

    if (Math.abs(w) >= 0) {
        if (Math.abs(w) > 1000) {

            if (Math.abs(w) >= 1000000) {
                if (Math.abs(w) >= 1000000000) {
                    w = w / 1000000000;
                    w = w.toFixed(m);
                    w += "b";
                    return w;
                }
                w = w / 1000000;
                w = w.toFixed(m);
                w += "m";
                return w;
            }
            w = w / 1000;
            w = w.toFixed(m);
            w += "k";
            return w;
        }
        w = w.toFixed(m);
        return w;
    }
    return w;
}

function checkWin() {
    if ((goal === 1 && trees <= 100) || (goal === 2 && trees >= 1000000000) || (goal === 3 && money >= 1000000000)) {
        var element = document.getElementById("win");
        element.innerHTML = "You have done it!";
        goal = 4;
    }
}


window.setInterval(function () {
    checkWin();
    updateGame();
}, 100);

