export function add(inputString) {
  //handles empty array
  if (inputString == "" || inputString == null) return 0;

  let delimiter = /[\n,]/;

  //handleling custom delimiters
  if (inputString.startsWith("//")) {
    let delimiterSectionEnd = inputString.indexOf("\n");
    const delimiterSection = inputString.slice(2, delimiterSectionEnd);

    const matches = delimiterSection.match(/\[([^\]]+)\]/g);

    if (matches) {
      const escaped = matches
        .map((d) => d[1])
        .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
      delimiter = new RegExp(escaped);
    } else {
      const escaped = delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      delimiter = new RegExp(escaped);
    }

    inputString = inputString.slice(delimiterSectionEnd + 1);
  }

  //custom delimitor used to split
  const parts = inputString.split(delimiter);

  //handles any amount of numbers
  let sum = 0;
  let negatives = parts.filter(n=> n< 0);

  if(negatives.length)
    throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);

  for (let i = 0; i < parts.length; i++) {
    let num = Number(parts[i].trim());
    if (num > 1000) continue;
    sum += num;
  }
    
  return sum;
}
