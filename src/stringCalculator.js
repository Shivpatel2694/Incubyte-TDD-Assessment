export function add(inputString) {
  //handles empty array
  if (inputString == "" || inputString == null) return 0;

  let delimiter = /[\n,]/;
  
  //handleling custom delimiters
  if (inputString.startsWith('//')) {
    const customDelimiter = inputString[2]; 
    const escaped = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiter = new RegExp(escaped);
    inputString = inputString.slice(4);
  }

   const parts = inputString.split(new RegExp(delimiter));

  //handles any amount of numbers
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
      sum += Number(parts[i].trim());
    }
    return sum;
  }

