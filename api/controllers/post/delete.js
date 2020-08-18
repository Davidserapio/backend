module.exports = {


  friendlyName: 'Delete post.',


  description: 'Delete a specific post by its id.',


  inputs: {

    id: {
      description: 'The id of the post.',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Post Deleted.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {

    const deletedPost = await Post.destroyOne({id: inputs.id});
    if (!deletedPost) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'Ya ha sido eliminado, No existe el usuario!'
      }
      return exits.notFound(payload);
    }
    return exits.success(deletedPost);
  }
};