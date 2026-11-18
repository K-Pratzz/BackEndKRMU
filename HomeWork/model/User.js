// name:string
// ag:number
// roll:number
// type: string


// title : string , destination : string, description: string, price: number, duration:number, available seats: number, startDate:Date, image: array of SVGStringList, rating:number, isActive:boolean
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,   
    required: [true,"field is required"]

  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min:[18,"the minimum age should be 18"],
    max:[60,"the maximum age should be 60"]
  },
  roll:{  
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);



