const differman = document.querySelector(".container");

const readCsv = async () => {
  const resp = await fetch("./files/customers.csv");
  const data = await resp.text();
  const rows = data.split("\n").slice(1);
  for (let row of rows) {
    let dataItem = row.split(",");
    let htmlText = "";
    let arr = [];
    for (let value of dataItem) {
      arr.push(value);
    }
    htmlText = `Customer with name of ${arr[0]} has a customer number of ${arr[1]} and lives in ${arr[2]}`;
    const pipper = document.createElement("p");
    pipper.innerHTML = htmlText;
    differman.appendChild(pipper);
  }
};

readCsv()
  .then(() => console.log("CSV File read successfully"))
  .catch((error) => console.log("Error reading CSV file - " + error));
