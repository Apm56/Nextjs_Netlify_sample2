// const MongoClient = require( 'mongodb' ).MongoClient;
// //  const url = "mongodb+srv://chathuresha:chathuresha26@nodetuts.99g4f.mongodb.net?retryWrites=true&w=majority";
// // const url = "mongodb+srv://admin:handoffadmin@cluster0.aseqh.mongodb.net/project-handoff?retryWrites=true&w=majority";
// const url = "mongodb+srv://admin:mongocloud123@cluster0.aseqh.mongodb.net/project-handoff?retryWrites=true&w=majority";

// var _db;

// module.exports = {

//     connectToServer: function( callback ) {
//         MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
//             _db  = client.db('project-handoff');
//             return callback( err );
//         });
//     },

//     getDb: function() {
//         return _db;
//     }
// };


import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;