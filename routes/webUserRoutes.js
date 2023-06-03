const express = require('express')
const {webUserController} = require('../controllers/webUserController')
const { body,validationResult } = require('express-validator');
const { validate } = require("../middleware/validation")
const router = express.Router()



router.get('/',webUserController.getAll)
router.get('/:id',webUserController.getById)
router.post(
    '/', 
    [body("name").notEmpty().withMessage("The name field is required")],
    [body("surname").notEmpty().withMessage("The surname field is required")],
    [body("email").isEmail().withMessage("@ characater is should be").notEmpty().withMessage("Email is not defined")],
    [body("password").notEmpty().withMessage("The password field is required")],
    validate,
    webUserController.add)
    router.post('/signin',
    [body("email").isEmail().withMessage("@ characater is should be").notEmpty().withMessage("Email is not defined")],
    [body("password").notEmpty().withMessage("The password field is required")],
    webUserController.signin)
router.delete('/:id',webUserController.delete)
router.put('/:id',webUserController.update)

module.exports = router;