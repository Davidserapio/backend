module.exports = {


  friendlyName: 'Delete warehouse.',


  description: 'Delete a specific warehouse by its id.',


  inputs: {

    id: {
      description: 'The id of the warehouse.',
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Warehouse Delete.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {
    await UserWarehouse.destroy({ warehouser: inputs.warehouse});

    const deletedWarehouse = await Warehouse.destroyOne({id: inputs.id});
    if (!deletedWarehouse) {
      let payload = {
        code: 'E_RESOURCE_NOT_FOUND',
        message: 'Se ha eliminado, No existe la bodega!'
      }
      return exits.notFound(payload);
    }
    return exits.success(deletedWarehouse);
  }
};