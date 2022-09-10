let client = require("../dbConnect");
let projectCollection;
setTimeout(() => {
    projectCollection = client.MongoClient.db().collection("project");
//     projectCollection = client.mongoClient.db().collection("project");
}, 2000)




//insert project......
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}

//get project....
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}


module.exports = {
    insertProjects, getProjects
}