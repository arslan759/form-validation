function formValidation(){
    let name = document.getElementById('name');
    let cardNumber = document.getElementById('cardNumber');
    let cvv = document.getElementById('cvv');
    let expiryDate = document.getElementById('expiryDate');
    let validate = false

    let xname = name.value.split(" ");
    // let xcard = cardNumber.value.split('');

        if (name.value =='' || name.value=='null' || xname[1]=="")
        {
            document.getElementById('nameError').innerHTML = 'Enter a Valid Name'
            validate = false
        }
        else if (xname.length==2){
            document.getElementById('nameError').innerHTML = ''
            validate = true
        }
        else{
            document.getElementById('nameError').innerHTML = 'Enter a Valid Name'
            validate = false
        }
        
        // for(let i=0 ; i<xcard.length ; i++)
        // {
        //     if(xcard[i] == 'a' || xcard[i] == 'A-Z'){
        //         document.getElementById('cardError').innerHTML = 'Enter a Valid Card Number'
        //         validate = false
        //         return validate
        //     }
        // }
        
        if (cardNumber.value < 1000000000000000 || cardNumber.value > 9999999999999999 || isNaN(cardNumber.value)){
            document.getElementById('cardError').innerHTML = 'Enter a Valid Card Number'
            validate = false
        }
        else {
            document.getElementById('cardError').innerHTML = ''
            validate = true
        } 
        
        if (cvv.value < 100 || cvv.value > 999 || cvv.value=='' || isNaN(cvv.value)) {
            document.getElementById('cvvError').innerHTML = 'Enter a Valid CVV'
            validate = false
        }
        else {
            document.getElementById('cvvError').innerHTML = ''
            validate = true
        }
        
        if(expiryDate.value==''){
            document.getElementById('expiryError').innerHTML = 'Enter a Valid Expiration Date'
            validate = false
        }
        else {
            document.getElementById('expiryError').innerHTML = ''
            validate = true
        }

        return validate;
}