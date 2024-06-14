import Event from '#models/event';
import User from '#models/user';
export default class EventsController {
    async all({ view }) {
        const events = await Event.all();
        return view.render('events/all', {
            "events": events
        });
    }
    async show({ request, view }) {
        const event = await Event.find(request.param('id'));
        const organizer = await User.findBy('id', event?.user_id);
        return view.render('events/show', { "event": event, "organizer": organizer });
    }
    async create({ request }) {
        const data = request.toJSON().body;
        return data;
    }
}
//# sourceMappingURL=events_controller.js.map