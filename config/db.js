
const mongoose= require('mongoose')
MongoURL= "mongodb+srv://udityaprakash01:sAMc1FmiB4wWnxAx@cluster0.za5wk8j.mongodb.net/?retryWrites=true&w=majority";
// process.env.MongoURL

MongoInit=()=>{
    mongoose.connect(MongoURL,{ useNewUrlParser: true,useUnifiedTopology: true  })
    console.log("DB connected")
}

module.exports= MongoInit