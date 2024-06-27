const container = document.querySelector(".container");

const files = ["./files/file1.txt", "./files/file2.txt", "./files/file3.txt"];

const readTxt = async () => {
  const pitterman = document.createElement("p");
  let allText = "";
  for (let file of files) {
    const resp = await fetch(file);
    const data = await resp.text();
    allText += data;
  }
  pitterman.innerHTML = allText;
  container.appendChild(pitterman);
};

readTxt()
  .then(() => console.log("Text File read successfully"))
  .catch((error) => console.log("Error reading text file - " + error));
