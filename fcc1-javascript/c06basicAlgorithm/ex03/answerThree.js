function factorialize(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++ ) {
        resultado *= i;
    };
    
    return resultado;
  }
  
  console.log(factorialize(10));