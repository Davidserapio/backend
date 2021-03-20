module.exports = {


  friendlyName: 'Finds all warehouse.',


  description: 'Fine all of the warehouse.',


  inputs: {

  },


  exits: {
    
    success: {
      description: 'Users found.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {

    const foundWarehouse = await Warehouse.find()
    if(foundWarehouse.length == 0) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'No existe la bodega con ese ID'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundWarehouse);
  }
};