module.exports = {


  friendlyName: 'Create a warehouse',


  description: 'Create warehouse.',


  inputs: {

    name: {
      description: 'The name of the warehouse.',
      type: 'string',
      required: true
    },
    area: {
      description: 'The area of the warehouse.',
      type: 'string', 
      required: true
    },
    number: {
      description: 'The name of the warehouse.',
      type: 'string',
      required: true
    },
    telephone: {
      description: 'The telephone of the warehouse',
      type: 'string',
      required: true
    },
    information: {
      description: 'The information of the warehouse',
      type: 'string',
      required: true
    },
    thumbnail: {
      description: 'The picture of the warehouse.',
      type: 'string',
      required: true
    },
    user: {
      description: 'The Id of the user.',
      type: 'string',
      required: true
    },
  },

  exits: {

    success: {
      description: 'Warehouse created.',
      statusCode: 200
    },
    serverError: {
      description: 'There was an error in the server.',
      statusCode: 500
    }

  },


  fn: async function (inputs, exits) {

      let warehouse = {
        name: inputs.name,
        area: inputs.area,
        number: inputs.number,
        telephone: inputs.telephone,
        information: inputs.information,
        thumbnail: inputs.thumbnail,
    
      };
      const createdWarehouse = await Warehouse.create(warehouse).fetch();

      if(!createdWarehouse) {
        let payload = {
          code: 'E_RESOURCE_NOT_FOUND',
          message: 'No se pudo crear el registro de su bodega'
        }
        return exits.serverError(payload);
      }
      
      await User.addToCollection(inputs.user, 'warehouses', createdWarehouse.id);
    
      return exits.success(createdWarehouse);
  }

};
