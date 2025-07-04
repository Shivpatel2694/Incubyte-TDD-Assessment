export function add(inputString) {
  //handles empty array
  if (inputString == "" || inputString == null) return 0;

  //handles new line delimiters between numbers
  inputString= inputString.replace(/\n/g,',')
  
  const parts = inputString.split(",");

  //handles single input
  if (parts.length == 1) return Number(parts[0].trim());

  //handles any amount of numbers
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
      sum += Number(parts[i].trim());
    }
    return sum;
  }

