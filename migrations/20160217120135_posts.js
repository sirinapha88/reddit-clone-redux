
exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', function(table){
 		table.increments();// id serial primary key
 		table.string('title');
 		table.string('author');
 		table.string('imageURL');
 		table.string('desc');
 	});
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('posts');  
};
