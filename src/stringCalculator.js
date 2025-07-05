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

  //custom delimitor used to split

   const parts = inputString.split(new RegExp(delimiter));

  //handles any amount of numbers
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
    
      let num = Number(parts[i].trim());

      if(Number(parts[i]) < 0)
        throw new Error(`Negative numbers are not allowed ${num}`);

      sum+= num;
    }
    return sum;
  }

