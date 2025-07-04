export function add(inputString) {
  //handles empty array
  if (inputString == "" || inputString == null) return 0;

  const parts = inputString.split(",");

  //handles single input
  if (parts.length == 1) return Number(parts[0].trim());
  //handles input with 2 numbers
  else if (parts.length == 2) {
    const a = Number(parts[0].trim());
    const b = Number(parts[1].trim());
    return a + b;
  }
  //handles any amount of numbers
  else {
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
      sum += Number(parts[i].trim());
    }
    return sum;
  }
}
