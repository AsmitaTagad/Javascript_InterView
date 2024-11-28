function Greet(callback) {
  console.log(callback(), "Asmita");
  
}

function GreetingTo() {
  return "Hello!"
}

Greet(GreetingTo);
