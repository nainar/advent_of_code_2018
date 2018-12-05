function day2_a(file) {
  let answer = 0;
  let countOfTwos = 0;
  let countOfThrees = 0;
  const reader = new FileReader();
  const result = [];
  reader.onload = (event) => {
      const file = event.target.result;
      const allLines = file.split(/\r\n|\n/);
      allLines.forEach(line => {
        const freqMatrix = generateMatrix(line);
        if (freqMatrix.includes(2)) {
          countOfTwos++;
        }
        if (freqMatrix.includes(3)) {
          countOfThrees++;
        }
      });
      answer = countOfThrees * countOfTwos;
      outputAnswer('day2_a', answer);
      return answer;
  };

  reader.onerror = (event) => {
      alert(event.target.error.name);
  };

  reader.readAsText(file);
}

function day2_b(file) {
  let answer = '';
  const reader = new FileReader();
  reader.onload = (event) => {
      const file = event.target.result;
      const allLines = file.split(/\r\n|\n/);
      const length = allLines[0].length;
      for (let i = 0; i < allLines.length; i++) {
        for (let j = 1; j < allLines.length; j++) {
          let mismatch = 0;
          let mismatchPos = 0;
          for (let pos = 0; pos < length; pos++) {
            if (allLines[i][pos] !== allLines[j][pos]) {
              mismatch++;
              mismatchPos = pos;
              if (mismatch > 1) {
                break;
              }
            }
          }
          if (mismatch === 1) {
            console.log(allLines[i], allLines[j], mismatchPos)
            answer = allLines[j].replace(allLines[j][mismatchPos], ''); 
            console.log(answer)
            outputAnswer('day2_a', answer);
            return answer;
          }
        }
      }
  };

  reader.onerror = (event) => {
      alert(event.target.error.name);
  };

  reader.readAsText(file);
}

function generateMatrix(input) {
  let matrix = new Array(26).fill(0, 0);
  for (let i = 0; i < input.length; i++) {
    matrix[input[i].charCodeAt(0) - 97]++;
  }
  return matrix;
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