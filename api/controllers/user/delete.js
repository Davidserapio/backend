module.exports = {


  friendlyName: 'Delete user.',


  description: 'Delete of the specific user by its id.',


  inputs: {

    id: {
      description: 'The id of the user.',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'User Deleted.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {

    const deletedUser = await User.destroyOne({id: inputs.id});
    if (!deletedUser) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'Usuario no eliminado: ya fue eliminado antes o no existe en la base de datos.'
      }
      return exits.notFound(payload);
    }
    return exits.success(deletedUser);
  }

}; 