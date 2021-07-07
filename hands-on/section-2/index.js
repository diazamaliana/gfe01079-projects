document.getElementsByTagName("h1")[0].style.fontSize = "5vw";
//Define the array
const heroes = [
	{ name: "Tony", age: 20 },
	{ name: "Thor", age: 21 },
	{ name: "Peter", age: 20 },
];
  
//Create the table
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

const wait = time => new Promise(resolve => setTimeout(resolve, time));

//Calculate Average
function calculateHeroes(){
  console.log("Calculation Start");
  document.getElementById("avg").innerHTML = "calculation start...";
  averageAge(heroes)
    .then(res => console.log("age is", res))
    .catch(console.log)
    console.log("Second Call Started");
  wait(2000)
    .then(() => {
      console.log("Second Call Finished");
      console.log("Third Call Started");
      return wait(5000);
  })
  .then(() => console.log("Third Call Finished"));
  
}

const averageAge = async heroes => {
  await wait(5000);
  const totalAge = heroes.reduce((acc, hero) => acc + hero.age, 0);
  let avg = totalAge / heroes.length;
  return document.getElementById("avg").innerHTML = avg;
};


  
 


  
 
  



