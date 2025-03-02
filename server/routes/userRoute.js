const express = require('express');
const userController = require('../controller/userController')
const authController = require('../controller/authController')

const router = express.Router()



router.post('/signUp',authController.signUp)
router.post('/login',authController.login)

router 
  .route('/')
  .get(userController.getAllUsers)
  .post(
      authController.protect,
      authController.restrictTo('admin'),
      userController.createAgent
  )

  router
   .route('/:id')
   .get(userController.getUser)
   .patch(
      authController.protect,
      authController.restrictTo('admin'),
      userController.updateUser
   )
   .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser
   )


   module.exports = router;