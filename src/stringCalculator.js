export  function add (inputString){
    
    //return 0; just passing the test
    if(inputString == "" || inputString == null)  return 0 ;
    
    if(inputString.length == 1) return Number(inputString);

    const parts = inputString.split(",");
    const a = Number(parts[0]);
    const b = Number(parts[1]);

    return a + b;
    //refactoring
};