module.exports = {


  friendlyName: 'Find  Post.',


  description: 'Find a specific post by its id.',


  inputs: {

    id: {
      description: 'The id of the post.',
      type: 'string',
      required: true
    }
  },

  exits: {
    
    success: {
      description: 'Posts found.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }

  },


  fn: async function (inputs, exits) {

    const foundPost = await Post.findOne({id: inputs.id})
    if (!foundPost) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'El Post no fue encontrado'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundPost);
  }

};