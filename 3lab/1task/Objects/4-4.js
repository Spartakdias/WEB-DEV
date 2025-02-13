function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
  That’s because rules that set this do not look at object definition. Only the moment of call matters.
  
  Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.
  
  The value of this is one for the whole function, code blocks and object literals do not affect it.
  
  So ref: this actually takes current this of the function.
  
  We can rewrite the function and return the same this with undefined value:
  
  function makeUser(){
    return this; // this time there's no object literal
  }
  
  alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
  As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example.
  
  Here’s the opposite case:
  
  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); // John




  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );





  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
  We also can write a single call per line. For long chains it’s more readable:
  
  ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0