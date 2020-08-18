module.exports = {


  friendlyName: 'Find Posts.',


  description: 'Finds all of the posts.',


  inputs: {

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
    const foundPosts = await Post.find()
    if (foundPosts.length == 0) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'No existen Posts creados'
      }
      return exits.notFound(payload);
    }
    return exits.success(foundPosts);
  }

};