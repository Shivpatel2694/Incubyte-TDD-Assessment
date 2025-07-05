export function add(inputString) {
  //handles empty array
  if (inputString == "" || inputString == null) return 0;

  let delimiter = /[\n,]/;
  
  //handleling custom delimiters
  if (inputString.startsWith('//')) {
    let delimiterSectionEnd = inputString.indexOf("\n");
    const delimiterSection = inputString.slice(2, delimiterSectionEnd);
    
    const match = delimiterSection.match(/^\[(.+)\]$/);

    const customDelimiter = match ? match[1] : delimiterSection;
    const escaped = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiter = new RegExp(escaped);
    
     inputString = inputString.slice(delimiterSectionEnd + 1);
  }

  //custom delimitor used to split

   const parts = inputString.split(delimiter);

  //handles any amount of numbers
    let sum = 0;
    let negatives =[];
    for (let i = 0; i < parts.length; i++) {
    
      let num = Number(parts[i].trim());

      if(num < 0)
        negatives.push(num);

      if(num > 1000)
        continue;

      sum+= num;
    }

    if(negatives.length > 0)
        throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);
    return sum;
  }

