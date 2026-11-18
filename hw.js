
use companyDB;
db.employees.insertMany([
  { name: "Alice", dep: "HR", salary: 50000, age: 28 },
  { name: "Bob", dep: "HR", salary: 70000, age: 35 },
  { name: "Charlie", dep: "HR", salary: 60000, age: 30 },
  { name: "David", dep: "IT", salary: 90000, age: 29 },
  { name: "Eve", dep: "IT", salary: 120000, age: 34 },
  { name: "Frank", dep: "IT", salary: 110000, age: 40 },
  { name: "Grace", dep: "Sales", salary: 45000, age: 26 },
  { name: "Hank", dep: "Sales", salary: 55000, age: 32 },
  { name: "Ivy", dep: "Sales", salary: 65000, age: 29 }
]);

db.employees.aggregate([
  { $group: { _id: "$dep", avgSalary: { $avg: "$salary" } } }
]);

db.employees.aggregate([
  { $sort: { dep: 1, salary: -1 } },
  { $group: { _id: "$dep", salaries: { $push: "$salary" }, employees: { $push: "$name" } } },
  { $project: { department: "$_id", secondHighestSalary: { $arrayElemAt: ["$salaries", 1] }, employeeName: { $arrayElemAt: ["$employees", 1] }, _id: 0 } }
]); 
db.employees.aggregate([
  { $group: { _id: null, overallAvgSalary: { $avg: "$salary" } } }
]);

db.students.aggregate([
  {$match:{age:{$gt:20}}},
  {$count:"studentsAbove20"}])

