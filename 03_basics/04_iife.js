// Immediately invoked function Expression (IIFE)


(function chai(){  //named iife
    console.log(`DB CONNECTED`);
})();                            // ; should be added to end the scope 

// ()1st wala function ki defination ()2nd wala execution call
// Global scope ke pollution se problem ko rokne ke liye
// ()() 

(   function aurcode() {
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => { //Unnamed IIFE or Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);    
} )('muskan')

