exports.up = function(knex) {
    
        return knex.schema.createTable('cars', table=>{
            table.increments()
            table.text('VIN').unique().notNullable()
            table.text('make').notNullable()
            table.text('model').notNullable()
            table.integer('mileage').notNullable()
            table.text('transmission')
            table.text('status')
    
        })
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('cars') 
    };