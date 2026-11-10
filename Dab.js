
const mongoose = require('mongoose')
const DBURL = 'mongodb+srv://abrahaleytewele_db_user:Z2HWc1BcGxoVFqKi@cluster0.6ouxkd1.mongodb.net/TDB?retryWrites=true&w=majority'
mongoose.connect(DBURL)

.then(() => {console.log('Database Connected')})
.catch((err) => {console.log('DB Error:', err)})

