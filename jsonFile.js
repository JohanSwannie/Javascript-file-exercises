const container = document.querySelector(".container");

const fetchJson = async () => {
  await fetch("./files/file1.json")
    .then((response) => response.json())
    .then((personel) =>
      personel.map((person) => {
        let htmlText = "";
        htmlText = `${person.fullName} with id ${person.id} is a ${person.position} and get a yearly salary of ${person.salary} dollars`;
        const pipperpoep = document.createElement("p");
        pipperpoep.innerHTML = htmlText;
        container.appendChild(pipperpoep);
      })
    );
};

fetchJson()
  .then(() => console.log("JSON file successfully fetched"))
  .catch((error) => console.log("Error fetching JSON file - " + error));
