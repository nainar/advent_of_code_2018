function day3_a(file) {
  let answer = 0;
  let countOfTwos = 0;
  let countOfThrees = 0;
  const reader = new FileReader();
  const result = [];
  reader.onload = (event) => {
      const file = event.target.result;
      const allLines = file.split(/\r\n|\n/);
      allLines.forEach(line => {
      });
  };

  reader.onerror = (event) => {
      alert(event.target.error.name);
  };

  reader.readAsText(file);
}

function outputAnswer(id, answer) {
  const header = document.createElement('h1');
  header.innerText = id;
  const output = document.createElement('div');
  output.id = id;
  output.innerText = answer;
  document.body.appendChild(header);
  document.body.appendChild(output);
}