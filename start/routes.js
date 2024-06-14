import router from '@adonisjs/core/services/router';
const EventController = () => import('#controllers/events_controller');
router.on('/').render('pages/home').as('homepage');
router.get('/events', [EventController, 'all']).as('events');
router.get('/event/:id', [EventController, 'show']).as('event');
router.on('/events/create').render('events/create').as('create');
router.post('/event/create', [EventController, 'create']).as('store');
router.on('/contact').render('pages/contact').as('contact');
//# sourceMappingURL=routes.js.map