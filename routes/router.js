const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.home);
router.post('/submit', controller.submitForm);

router.get('/about', controller.about);
router.get('/blog', controller.blog);
router.get('/contact', controller.contact);
router.get('/Pricing', controller.pricing);
router.get('/Services', controller.services);
router.get('/messages', controller.showMessages);
router.get('/counselor', controller.counselor);
router.get('/edit/:id', controller.editMessage);
router.post('/update/:id', controller.updateMessage);
router.get('/delete/:id', controller.deleteMessage);

module.exports = router;