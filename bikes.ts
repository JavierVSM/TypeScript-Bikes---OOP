class Bike {
    miles: number;
    constructor(
        public  price: Number,
        public max_speed: string){
      this.price = price;
      this.max_speed= max_speed;
      this.miles=0;
    }
     displayInfo():any {
        console.log("Price: "+ this.price + ", Maximum speed: " + this.max_speed + ", Total miles: " + this.miles);
        return this
     }
     ride(): any {
        this.miles= this.miles+10;
        console.log("Riding");
        return this
     }
     reverse(): any {
        if(this.miles==0){
           console.log("Reversing is not allow");
        }
        else{
           this.miles= this.miles-5;
           console.log("Reversing");
           return this
        }      
     }
  }
  
  let bike1 = new Bike(200, "25mph"); 
  let bike2 = new Bike(150, "20mph"); 
  let bike3 = new Bike(250, "30mph"); 
  
  bike1.ride().ride().ride().reverse().displayInfo();
  
  
  bike2.ride().ride().reverse().reverse().displayInfo();
  
  bike3.reverse().reverse().reverse().displayInfo();