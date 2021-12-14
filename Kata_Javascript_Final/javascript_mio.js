const usuario1 =
    {   
        name: "Fátima",
        user: "usuario1",
        pass: "12345",
        amount: 300,
    }
    
function validacion() {
    var usuario = document.getElementById("exampleInputUser").value
    var contraseña = document.getElementById("exampleInputPassword").value
    
    if (usuario == usuario1.user && contraseña == usuario1.pass){
        window.alert ("Inicio exitoso");
        window.location = "usuario1.html";
        } 
        else {
          alert ("Ingrese usuario y contraseña válidos")
        }
      }

 document.getElementById("name").innerHTML = usuario1.name;
 document.getElementById("saldo-actual").innerHTML = usuario1.amount;
    
    //Boton Depósito event handler
    const deposito_btn = document.getElementById('depositar');
    var saldo = document.getElementById("saldo-actual");
    deposito_btn.addEventListener('click', function(){
    
        const depositStringToInt = getInputNumb("monto-deposito");
        if (usuario1.amount + depositStringToInt <= 990) {
        updateSpanTest("saldo-actual", depositStringToInt);
        usuario1.amount += depositStringToInt;
      } else {
        alert("El saldo total no puede ser mayor a US$990.");
      }
      //setting up the input field blank when clicked
      document.getElementById('monto-deposito').value = "";
      
    }) 
    
    
    //Boton Retiro event handler
    const retiro_btn = document.getElementById('retirar');
    retiro_btn.addEventListener('click', function(){
    
        const retiroNumb = getInputNumb("monto-retiro");
    
        if (usuario1.amount - retiroNumb >= 10) {
      updateSpanTest("saldo-actual", -1 * retiroNumb);
      usuario1.amount -= retiroNumb;
    } else {
      alert("El saldo total no puede ser inferior a US$10.");
    }
    
        //setting up the input field blank when clicked
        document.getElementById('monto-retiro').value = "";
    
    })
    
      //function to parse string input to int
    function getInputNumb(idName){
      const amount = document.getElementById(idName).value;
      const amountNumber = parseFloat(amount);
      return amountNumber;
    }
    
    function updateSpanTest(idName, addedNumber){
      //x1.1 updating balance the same way
      const current = document.getElementById(idName).innerText;
      const currentStringToInt = parseFloat(current);
    
      const total = currentStringToInt + addedNumber;
    
      //x1.2 setting this value in balance
      document.getElementById(idName).innerText = total;
    }
    