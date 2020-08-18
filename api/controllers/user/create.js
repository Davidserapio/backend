module.exports = {


  friendlyName: 'Create user.',


  description: 'Creates a user.',


  inputs: {

    name: {
      description: 'The user name.',
      type: 'string',
      required: true
    },
    username: {
      description: 'The user name.',
      type: 'string',
      required: true
    },
    fatherName: {
      description: 'The last name.',
      type: 'string',
      required: true
    },
    motherName: {
      description: 'The second name.',
      type: 'string',
      required: true
    },
    cellphone: {
      description: 'The cellphone of the user.',
      type: 'string',
      required: true
    },
    fb: {
      description: 'The face of thr user.',
      type: 'string',
      required: true
    },
    location: {
      description: 'The location of the user.',
      type: 'string',
      required: true
    },
    email: {
      description: 'The email of the user.',
      type: 'string',
      isEmail: true,
      required: true
    },
    gender: {
      description: 'The gender of the user.',
      type: 'string',
      required: true
    },
    thumbnail: {
      description: 'The picture of the user.',
      type: 'string',
      required: true
    },
    isAdmin: {
      description: 'The admin or user.',
      type: 'boolean',
      required: true
    },
    password: {
      description: 'Password of the user.',
      type: 'string',
      required: true
    },    
  },


  exits: {

    success: {
      description: 'User created.',
      statusCode: 200
    },
    uniqueError: {
      description: 'The user email is already in the data base.',
      statusCode: 509
    },
    serverError: {
      description: 'There was an error in the server.',
      statusCode: 500
    },
    badRequest: {
      description: 'There was an error in the registering process.',
      badRequest: true
    }

  },


  fn: async function (inputs, exits) {

    await User.create({
        name: inputs.name,
        username: inputs.username,
        fatherName: inputs.fatherName,
        motherName: inputs.motherName,
        cellphone: inputs.cellphone,
        fb: inputs.fb,
        location: inputs.location,
        email: inputs.email,
        gender: inputs.gender,
        thumbnail: inputs.thumbnail,
        isAdmin: inputs.isAdmin,
        password: inputs.password
      })
  
      .fetch()
      .then(userCreated => {
        delete userCreated.password;
        return exits.success(userCreated);
      })
      .catch({ code: 'E_UNIQUE' }, error => {
        let errorPayload = {
          code: 'E_UNIQUE',
          problems: [
            error.message
          ],
          message: 'The email exits already.'
        }
        return exits.uniqueError(errorPayload);
      })
      .catch({ name: 'UsageError' }, error => {
        let errorPayload = {
          code: 'USAGE_ERROR',
          problems: [
            error.message
          ],
          message: 'Usage error.'
        }
        return exits.serverError(errorPayload);
      })
      .catch(error => {
        let errorPayload = {
          code: 'UNEXPECTED_ERROR',
          problems: [
            error.message
          ],
          message: 'Unexpected error.'
        }
        return exits.badRequest(errorPayload);
      });

  }


};