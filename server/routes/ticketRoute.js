const express = require('express')
const ticketController = require('../controller/ticketController')
const authController = require('../controller/authController')
const router = express.Router();


router.route("/createdby/:id").get(ticketController.getTicketsByUser);

router
   .route('/')
   .get(ticketController.getAllTicket)
   .post(
         authController.protect,
         authController.restrictTo('customer'),
         ticketController.createNewTicket
        )
router
    .route('/:id')
    .get(ticketController.getTicket)
    .patch(
        authController.protect,
        authController.restrictTo('admin','agent'),
        ticketController.updateTicket
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        ticketController.deleteTicket
    )

    module.exports = router;  