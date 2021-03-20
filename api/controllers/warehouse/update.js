module.exports = {


  friendlyName: 'Update warehouse',


  description: 'Update a specific warehouse by its id.',


  inputs: {

    id: {
      description: 'The id of the warehouse.',
      type: 'string',
      required: true
    },
    warehouse: {
      description: 'The warehouse data.',
      type: 'json',
      required: true
    }
  },


  exits: {

    success: {
      description: 'Warehouse updated.',
      statusCode: 200
    },
    notFound: {
      description: 'There was an error in the server.',
      statusCode: 500
    }
  },

   
   fn: async function (inputs, exits) {
     const updatedWarehouse = await Warehouse.updateOne({id: inputs.id})
     .set(inputs.warehouse);
     
     if (!updatedWarehouse) {
       let payload = {
         code: 'E_RESOURCE_NOT_FOUND',
         message: 'El usuario no se pudo actualizar, menso!!'
       }
       return exits.notFound(payload);
     }
     return exits.success(updatedWarehouse);
   }

};