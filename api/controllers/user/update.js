module.exports = {


  friendlyName: 'Update a user.',


  description: 'Update a specific user by its id.',


  inputs: {

    id: {
      description: 'The id of the user.',
      type: 'string',
      required: true
    },
    user: {
      description: 'The user data.',
      type: 'json',
      required: true
    }
  },


  exits: {

    success: {
      description: 'User updated.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 500
    }
  },

  fn: async function (inputs, exits) {
    const updatedUser = await User.updateOne({id: inputs.id})
    .set(inputs.user);
    if (!updatedUser) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'El usuario no se pudo actualizar, menso!!'
      }
      return exits.notFound(payload);
    }
    return exits.success(updatedUser);
  }
  // fn: async function (inputs, exits) {
  //   const updatedUser = await User.update({id: inputs.id})
  //   .set(inputs.user)
  //   .fetch();
  //   if (updatedUser.length == 0) {
  //     let payload = {
  //       code: 'E_RESOURCE_NOT_FOUND',
  //       message: 'Los usuarios no pueden ser actualizados, menso!!'
  //     }
  //     return exits.notFound(payload);
  //   }
  //   return exits.success(updatedUser);
  // }

};