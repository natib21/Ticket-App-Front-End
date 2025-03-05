const Ticket = require('../model/ticketModel')
const AppError = require('../utils/AppError')
exports.getAllTicket = async(req, res) => {
     const ticket = await Ticket.find().populate('createdBy')
      
     res.status(200).json({
        status: 'success',
        message: ticket.length,
        data: ticket,
      });
  };
exports.createNewTicket = async(req, res) => {
  console.log(req.body)
  const { title, description } = req.body;
     const newTicket = await Ticket.create({
      title,
      description,
      createdBy:req.user.id
     })
     res.status(201).json({
        status: 'success',
        menu: newTicket,
      });
  };
exports.getTicket = async(req, res) => {

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
        return next(new AppError('No Ticket item Found with that ID', 404));
      }

    res.status(200).json({
      status: 'Success',
      ticket
    });
  };
exports.updateTicket = async(req, res,next) => {
  console.log(req.params.id,req.body)
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
   
      if (!ticket) {
        return next(new AppError('No Ticket item Found with that ID', 404));
      }
      res.status(200).json({
        status: 'success',
        ticket,
      });
  };
exports.deleteTicket = async(req, res) => {
    const ticket = await Ticket.findOneAndDelete(req.params.id);
    if (!ticket) {
      return next(new AppError('No ticket item Found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      ticket: null,
    });
  };
  
  exports.getTicketsByUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const tickets = await Ticket.find({createdBy: userId})
        .populate("createdBy", "name email");

      if (tickets.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "No tickets created by this user.",
        });
      }
  
     
      res.status(200).json({
        status: "success",
        data: tickets,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
  

  