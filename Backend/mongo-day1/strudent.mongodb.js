use("users")
// db.studend.find()

// create
// db.student.insertOne({
//     "name" : "yashika",
//     "rollNo" :12343,
//     "section" : "fsd",
//     "email" : "yashika@gmai.com"
// })

//
// db.student.insertMany([
//     {
//     "name" : "yas",
//     "rollNo" :12343233,
//     "section" : "fsd",
//     "email" : "yashika@gmai.com"
//     },
//      {
//     "name" : "bhavya",
//     "rollNo" :12343223,
//     "section" : "sd",
//     "email" : "yashika@gmai.com"
//     },
//      {
//     "name" : "kamal",
//     "rollNo" :12343223,
//     "section" : "fs",
//     "email" : "yashika@gmai.com"
//     },
// ]) 

// read
db.student.find()

// greater then
// db.student.find({"rollNo" : {$gt: 1000000000}})

// greater then equal
// db.student.find({"rollNo" : {$gte: 1000000000}})

// less then equal
// db.student.find({"rollNo" : {$lte: 1000000000}})

// db.student.find({},{name:1, section:1})
// db.student.find().skip(2)
// db.student.find().skip(2).limit(2)
// db.student.find().limit(2).skip(2)
// db.student.find({"section" : "fsd"})

// Data,store, files, db , relational, non relational , 
// mongodb 27017 , db create manully , file js 

// db.student.find({},{name:1, section:1, rollNo:0})

// update
// db.student.updateOne({"rollno" : 723232}, {$set:{"section":"ds"}})
// db.student.updateOne({"rollno" : 12343}, {$inc:{"roll":2}})

// delete
// db.student.deleteOne({"rollno":12343})
// db.student.deleteMany({"section":"fsd"})

// tasks