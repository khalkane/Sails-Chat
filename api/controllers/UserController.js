/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
      test: function (req, res) 
      {
            User.create({
                    Firstname:'Ali',
                    Lastename:'Ahmed',
                    Email:'ali@gmail.com',
                    Password:'101010'
            }).exec(function (err, finn)
            {           
             if (err) 
             { 
                 console.log("Erreur");
             }
             else
             {
                 Groupe.create({
                                     NameGroupe:'Groupe-Maroc'
                               }).exec(function (err, finn)
                             {
                                 if (err) 
                                 { 
                                    console.log("Erreur");
                                 }
                                 else
                                 {
                                     return res.send(finn);
                                 }
                    })
            } 
         })
    } 
}





