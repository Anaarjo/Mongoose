const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    // putting parameters for the age
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate:{
            // function to check if this value is valid 
            validator: v => v % 2 == 0,
            message: props => `${props.value} is not a even number`
        }
    },
    email: {
        type: String,
        required: true,
        // it will show the email in lowercase automatically
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: function () {
          return Date.now();
        },
      },
updateddAt: {
    type: Date,
    imutable : true,
    // funcion to show the current date
    default: function () {
      return Date.now();
    },
  },
//creating a nested obj / it's like o foreign key of the bf
bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "SchemaUser"
},
     // hobbies will be an array
    hobbies: [String],
})



// creating a brand new model and when you do that you want that it exports
module.exports = mongoose.model("SchemaUser", userSchema)

