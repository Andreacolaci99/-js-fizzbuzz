  // creo il ciclo for
for (i = 1; i <= 100; i++){
   // assegno i valori alle variabili
    const multiplotre = i % 3;
    const multiplocinque = i % 5;
    // inserisco prima la doppia condizione if poiché se dovessi inserirla dopo il codice non ci arriverebbe mai perché soddisferebbe sempre prima le altre due condizioni 
    if (multiplotre == 0 && multiplocinque == 0){

        console.log(`${i} è FizzBuzz`)

    }else if (multiplotre == 0){ 

        console.log(`${i} è Fizz`)

   }else if(multiplocinque == 0){

        console.log(`${i} è Buzz`)

    }else {

    console.log(`${i}`)

   }
}