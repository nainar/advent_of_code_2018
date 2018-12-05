function day1_a(file) {
  let answer = 0;
  const reader = new FileReader();
  const result = [];
  reader.onload = (event) => {
      const file = event.target.result;
      const allLines = file.split(/\r\n|\n/);
      allLines.forEach(line => {
        answer += parseInt(line);
      });
      console.log(answer)
      outputAnswer('day1_a', answer);
      return answer;
  };

  reader.onerror = (event) => {
      alert(event.target.error.name);
  };

  reader.readAsText(file);
}

function day1_b(file) {
  let answer = 0;
  let deltas = [];
  let prevFreqs = [answer];
  const reader = new FileReader();
  const result = [];
  reader.onload = (event) => {
    const file = event.target.result;
    const allLines = file.split(/\r\n|\n/);
    allLines.forEach(line => {
      deltas.push(parseInt(line));
    });
    let currentPos = 0;
    while (1) {
      if (currentPos === deltas.length) {
        currentPos = 0;
      }
      answer += deltas[currentPos];
      if (prevFreqs.includes(answer)) {
        console.log(answer);
        outputAnswer('day1_b', answer);
        return answer;
      } else {
        prevFreqs.push(answer);
      }
      currentPos++;
    }
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