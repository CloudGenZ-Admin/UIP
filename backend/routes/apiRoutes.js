const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const authCtrl = require('../controllers/authController');
const storyCtrl = require('../controllers/storyController');
const peerCtrl = require('../controllers/peerController');
const wellnessCtrl = require('../controllers/wellnessController');
const culturalCtrl = require('../controllers/culturalController');
const eventController = require('../controllers/eventController');

const volunteerController = require('../controllers/volunteerController');
const supportController = require('../controllers/supportRequestController');
const partnershipController = require('../controllers/partnershipController');
const contactController = require('../controllers/contactController');
const carePackController = require('../controllers/carePackController');
const contactPartnershipController = require('../controllers/contactpartnershipController');
const youthCtrl = require('../controllers/youthController');
const newsController = require('../controllers/newsController');

router.post('/volunteers', volunteerController.create);
router.get('/volunteers', authMiddleware, volunteerController.getAll); 
router.delete('/volunteers/:id', authMiddleware, volunteerController.delete); 

router.post('/partnerships', partnershipController.create); // Public
router.get('/partnerships', authMiddleware, partnershipController.getAll); 
router.delete('/partnerships/:id', authMiddleware, partnershipController.delete);

router.post('/support-requests', supportController.create); // Public
router.get('/support-requests', authMiddleware, supportController.getAll); 
router.delete('/support-requests/:id', authMiddleware, supportController.delete); 

// ==========================================
// 4. CONTACT ROUTES (/api/contact)
// ==========================================
router.post('/contact', contactController.create); // Public
router.get('/contact', authMiddleware, contactController.getAll); // Admin Only
router.delete('/contact/:id', authMiddleware, contactController.delete); // Admin Only

// ==========================================
// 5. CARE PACKS ROUTES (/api/care-packs)
// =========================================
router.post('/care-packs', carePackController.create); // Public
router.get('/care-packs', authMiddleware, carePackController.getAll); // Admin Only
router.delete('/care-packs/:id', authMiddleware, carePackController.delete); // Admin Only



// Auth Route
router.post('/auth/login', authCtrl.login);

// Public Routes (For website forms)
router.post('/stories', storyCtrl.create);
router.post('/peer-support', peerCtrl.create);
router.post('/wellness', wellnessCtrl.create);
router.post('/cultural', culturalCtrl.create);

// Protected Routes (For Admin Panel only)
router.get('/stories',  storyCtrl.getAll);
router.delete('/stories/:id', authMiddleware, storyCtrl.delete);
router.put('/stories/:id', authMiddleware, storyCtrl.update); // NEW EDIT ROUTE


router.get('/peer-support', authMiddleware, peerCtrl.getAll);
router.delete('/peer-support/:id', authMiddleware, peerCtrl.delete);

router.get('/wellness', authMiddleware, wellnessCtrl.getAll);
router.delete('/wellness/:id', authMiddleware, wellnessCtrl.delete);

router.get('/cultural', authMiddleware, culturalCtrl.getAll);
router.delete('/cultural/:id', authMiddleware, culturalCtrl.delete);

// router.get('/getEvent', eventController.getEvents);
// router.post('/createEvent', eventController.createEvent); 

router.get('/getEvent', eventController.getEvents);

// Admin routes to create and delete events (authMiddleware ke sath)
router.post('/createEvent', authMiddleware, eventController.createEvent); 
router.delete('/events/:id', authMiddleware, eventController.deleteEvent); 

router.post('/contactpartnerships', contactPartnershipController.create); 

// Protected routes - Admin panel fetches and deletes from here
router.get('/contactpartnerships', authMiddleware, contactPartnershipController.getAll); 
router.delete('/contactpartnerships/:id', authMiddleware, contactPartnershipController.delete);

// Public Routes (For website forms)
router.post('/youth-programs', youthCtrl.create);

// Protected Routes (For Admin Panel only)
router.get('/youth-programs', authMiddleware, youthCtrl.getAll);
router.delete('/youth-programs/:id', authMiddleware, youthCtrl.delete);

// Public route to fetch news for the frontend
router.get('/news', newsController.getNews);

// Admin routes (Protected by authMiddleware)
router.post('/news', authMiddleware, newsController.createNews); 
router.delete('/news/:id', authMiddleware, newsController.deleteNews);

module.exports = router;