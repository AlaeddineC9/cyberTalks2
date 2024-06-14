import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'events';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title');
            table.string('description');
            table.dateTime('start_at');
            table.dateTime('end_at');
            table.string('address');
            table.string('city');
            table.string('country');
            table.boolean('online');
            table.timestamp('created_at').defaultTo(this.now());
            table.timestamp('updated_at');
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1718095515520_create_events_table.js.map