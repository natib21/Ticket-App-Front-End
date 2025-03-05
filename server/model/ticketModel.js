const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    title:{
         type:String,
         required:[true,"ticket must have a title"]
    },
    description : {
        type:String,
        required:[true,"ticket must have description"]
         },
    status: {
         type: String, 
         enum: ['open', 'in progress', 'closed'],
         default: 'open' 
        },
    assignedTo: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         default: null 
        },    
    createdBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
         },
    createdAt: {
         type: Date,
         default: Date.now(),
         select: false,
          },     
})


ticketSchema.pre(/^find/, function (next) {
 
     this.populate({
         path: 'assignedTo',
         select: '-__v'  
     }).populate({
          path: 'createdBy',  
      });;
 
     next();
 });
const Ticket = mongoose.model('Ticket',ticketSchema);

module.exports = Ticket;