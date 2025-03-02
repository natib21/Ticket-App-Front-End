const Ticket = require('../model/ticketModel')

exports.getAllTicket = async(req, res) => {
     const ticket = await Ticket.find()
      
     res.status(200).json({
        status: 'success',
        message: ticket.length,
        data: ticket,
      });
  };
exports.createNewTicket = async(req, res) => {
     const newTicket = await Ticket.create(req.body)

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
exports.updateTicket = async(req, res) => {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
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
  