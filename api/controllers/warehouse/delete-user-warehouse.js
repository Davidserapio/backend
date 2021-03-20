module.exports = {


  friendlyName: 'Delete a warehouse',


  description: 'Delete a Warehouse of the user',


  inputs: {

    warehouse: {
      description:'The id of the warehouse',
      type: 'string',
      required: true
    },
    user: {
      description: 'The id of the user',
      type: 'string',
      required: true
    },
  },


  exits: {

    success: {
      description: 'Se ha elimido con exito el registro de su bodega bodega',
      statusCode: 200
    },
    serverError: {
      description: 'There was an error in the server.',
      statusCode: 500
    }

  },


  fn: async function (inputs, exits) {
    await User.removeFromCollection(inputs.user, 'warehouses', inputs.warehouse);

    return exits.success();
  }
};
