module.exports = {


  friendlyName: 'Add a warehouse',

  description: 'Add a warehouse to user',


  inputs: {

    warehouse: {
      description: 'The Id of the warehouse.',
      type: 'string',
      required: true
    },
    user: {
      description: 'The Id of the user.',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Se ha asignado la bodega correctamente.',
      statusCode: 200
    },
    serverError: {
      description: 'There was an error in the server.',
      statusCode: 500
    }
  },


  fn: async function (inputs, exits) {
    await User.addToCollection(inputs.user, 'warehouses', inputs.warehouse);
    return exits.success();
  }

};
