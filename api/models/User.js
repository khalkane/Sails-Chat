/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = 
{

  attributes: 
  {

    Firstname:
    {
      type:'string'
    },
/*-----------------*/
    Lastname:
    {
      type:'string'
    },
/*-----------------*/
    Email:
    {
      type:'email',
      required: true,
      unique: true
    },
 /*-----------------*/
    password:
    {
      type:'password',
    },
/*-----------------*/
    messages:
    {
      collection:'message',
      via:'MessageSender'
    },
/*-----------------*/
    usersGroupe:
    {
      collection:'usersgroupe',
      via:'user'
    }
  }
};
