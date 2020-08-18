module.exports = {


  friendlyName: 'Find a user.',


  description: 'Find specific user by its id.',


  inputs: {

    id: {
      description: 'The id of the user.',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'User found.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {

    const foundUser = await User.findOne({id: inputs.id}).populate('user_warehouses');
    if (!foundUser) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'El usuario no fue encontrado'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundUser);
  }

};