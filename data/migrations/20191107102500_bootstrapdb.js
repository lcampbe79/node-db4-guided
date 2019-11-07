
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
    tbl.increments(); //PK-integer without negative values, also called unsigned (absolute value, no negative #)

    tbl.string('name', 255).notNullable();
  })
  .createTable('animals', tbl => {//creates new table
    tbl.increments(); //PK is intger

    tbl.string('name', 255).notNullable();
    
    //defining FK-adding other tables
    tbl
      .integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT')//what to about deleting the record from the PK table:Restrict, No action, set null
      .onUpdate('CASCADE')//changes value of PK-cascading will update all system tables
  })
  .createTable('zoos', tbl => {
    tbl.increments();
    tbl.string('zoo_name', 255).notNullable()
    tbl.string('address', 255)
  })
  .createTable('animal_zoos', tbl => {
    tbl.increments()

    tbl
      .integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoo')
      .onDelete('RESTRICT')//what to about deleting the record from the PK table:Restrict, No action, set null
      .onUpdate('CASCADE')
    
    tbl
    .integer('animal_id')
    .unsigned()
    .references('id')
    .inTable('animal')
    .onDelete('RESTRICT')//what to about deleting the record from the PK table:Restrict, No action, set null
    .onUpdate('CASCADE')
    tbl.date('from')
    tbl.date('to')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropIfTableExists('animal_zoos')
  .dropIfTableExists('zoos')
  .dropIfTableExists('animals')
  .dropIfTableExists('species')
};
