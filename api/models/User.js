/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name:	{	type: 'string', required: true, unique: true },
    username:	{	type: 'string', required: true, unique: true },
    fatherName:	{	type: 'string', required: true },
    motherName:	{	type: 'string', required: true },
    cellphone:	{	type: 'string', required: true },
    fb:	{	type: 'string', required: true },
    location:	{	type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    gender: { type: 'string', isIn: ['M', 'F'], required: true },
    thumbnail: { type: 'string', required: true},
    isAdmin: { type: 'boolean', defaultsTo: false },
    password: { type: 'string', required: true, encrypt: true /* Use .decrypt() to decrypt it */	},


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    posts: { collection: 'post', via: 'user' },//lado uno users y post
    warehouses: {  collection: 'warehouse', via: 'users' }, //lado uno entre userWarehouse y user
  },

};

