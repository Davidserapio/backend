module.exports = {


  friendlyName: 'Update  Post.',


  description: 'Update a specific post by its id.',


  inputs: {

    id: {
      description: 'The id of the post.',
      type: 'string',
      required: true
    },
    post: {
      description: 'The post data.',
      type: 'json',
      required: true
    }
  },


  exits: {
    
    success: {
      description: 'Post updated.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 500
    }
  },



  fn: async function (inputs, exits) {
    const updatedPost = await Post.updateOne({id: inputs.id}) 
    .set(inputs.post);

    if (!updatedPost) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'El Post no pudo ser actualizado!!'
      }
      return exits.notFound(payload);
    }
    return exits.success(updatedPost);
  }

};