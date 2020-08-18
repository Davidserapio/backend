module.exports = {


  friendlyName: 'Finds all users.',


  description: 'Finds all of the users.',


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
    const foundUsers = await User.find()
    if (foundUsers.length == 0) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'No existen usuarios creados'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundUsers);
  }

};