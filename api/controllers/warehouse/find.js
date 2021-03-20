module.exports = {


  friendlyName: 'Find a warehouse.',


  description: 'Find a specific warehouse by its id.',


  inputs: {

    id: {
      description: 'The id of the warehouse.',
      type: 'string',
      required: true
    }
  },


  exits: {
    
    success: {
      description: 'warehouse found.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {

    const foundWarehouse = await Warehouse.findOne({id: inputs.id});
    if (!foundWarehouse) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'La bodega quiza ya fue eliminada, Ya que no fue encontrada'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundWarehouse);
  }


};