const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    port: 3306,
    user: 'e26r4fdvyjgq8e2q',
    password: 'cno40blvzjmydf3p',
    database: 'wpjxt12pj50m2ggf'
})

con.connect(err => {
    if (err) {
        throw err
    }
    console.log('connected!')
})

module.exports = con