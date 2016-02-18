
exports.up = function(knex, Promise) {
	return knex.schema.createTable('comments', function(table){
 		table.increments();// id serial primary key
 		table.integer('post_id').references('id').inTable('posts');
 		table.string('author');
 		table.string('text');
 	});
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('comments');  
};
