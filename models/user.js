const con = require('../config/config')



const bcrypt = require('bcryptjs')

const create = {
    create: function(username, email, password) {
    con.query("SELECT COUNT (*) AS cnt FROM user WHERE username = ?" , 
        [username] , function(err , data){
    if(err){
       return
    }   
   else{
       
       if(data[0].cnt > 0){  
          return console.log('hiii')
       }else {
        con.query("SELECT COUNT (*) AS cnt FROM user WHERE email = ?" , 
        [email] , function(err , data){
            if(data[0].cnt > 0){  
                return console.log('hiii')
           }else {
                password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
                // bcrypt.compareSync(password)
                con.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', 
                [username, email, password], (err, data) => {
                    if (err) {
                        throw err
                    }
        
                }) 
           }
        })
                    
       }
   }
})
    }
}

module.exports = create