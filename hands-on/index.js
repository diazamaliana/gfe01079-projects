document.getElementsByTagName("h1")[0].style.fontSize = "5vw";
//Define the array
const heroes = [
	{ name: "Tony", age: 55 },
	{ name: "Thor", age: 45 },
	{ name: "Peter", age: 24 },
];
  

function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  for (let key of data) {
    var th = document.createElement("th");
    var text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    var row = table.insertRow();
    for (key in element) {
      var cell = row.insertCell();
      var text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}


var table = document.querySelector("table");
var data = Object.keys(heroes[0]);

generateTableHead(table, data);
generateTable(table, heroes);

  
  // a function to calculate avg age
  const calAvgAge = (heroes) => {
    const total = heroes.reduce((acc, heroe) => acc + heroe.age, 0);
    return total / heroes.length;
  };
  
  // callback function when button clicked
  const handleClick = () => {
    const avg = calAvgAge(heroes);
    document.getElementById("avg").innerHTML = avg;
  };
  
  // add onclick listener
document.getElementById("calAvgBtn").addEventListener("click", handleClick);
  
 
  



