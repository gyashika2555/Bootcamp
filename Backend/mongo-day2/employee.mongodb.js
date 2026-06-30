use("users")

// create
// db.employee.insert([
//     {
//     "name" : "yashika",
//     "empId":101,
//     "department" :"HR",
//     "salary" : 10000,
//     "bonus" : 2000
//     },
//     {
//     "name" : "bhavya",
//     "empId":102,
//     "department" :"Sales",
//     "salary" : 1000000,
//     "bonus" : 100
//     },
//     {
//     "name" : "shekhar",
//     "empId":103,
//     "department" :"Marketing",
//     "salary" : 1000,
//     "bonus" : 3000
//     },
//     {
//     "name" : "yash",
//     "empId":104,
//     "department" :"tech",
//     "salary" : 100,
//     "bonus" : 200
//     },
//     {
//     "name" : "fdf",
//     "empId":105,
//     "department" :"HRedw",
//     "salary" : 100,
//     "bonus" : 300000
//     }
// ])

// db.employee.insert([
//     {
//     "name" : "hanuman",
//     "empId":106,
//     "department" :"HR",
//     "salary" :5453,
//     "bonus" : 43443
//     }
// ])   
// db.employee.find().sort()
// db.employee.find("salary" ,{$gte:300})

// update
// db.employee.updateOne({"empId" :{$gte:}})

// db.employee.aggregate([
//     {
//        $match:{"department":"tech"}  
//     },
//     {
//         $sort:{"salary":-1} 
//     },
//     {
//        $project:{"name":1, "salary" :1, "department":1, "empId":0,
//         "totalSalary":{add:["salary","bonus"]}
//        }
//     }
// ])

// db.employee.aggregate([
//     {
//         $group:{
//             "_id":"$department",
//             "totalSalary":{$sum:{$add:["$salary","$bonus"]}}
//         }
//     }
// ])

db.employee.getIndexes()

// db.employee.createIndex("empId":1)