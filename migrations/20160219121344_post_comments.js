exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_comments', function(table){
    table.increments();
    table.integer('post_id').unsigned().index().references('posts.id').onDelete('cascade');
    table.integer('comment_id').unsigned().index().references('comments.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('post_comments');
};
