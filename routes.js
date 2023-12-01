let express = require("express")
let routes = express.Router()
let authCon = require("./controller/authController")
let task = require("./controller/taskController")
let {auth} = require("./middleware/authMiddleware")

routes.post("/register",authCon.register)
routes.post("/login",authCon.login)


routes.post("/taskcreate",auth("task_create"),task.create)
routes.get("/viewone/:id",auth("task_view"),task.view)
routes.get("/viewall",auth("task_view"),task.viewAll)
routes.put("/update/:id",auth("task_update"),task.update)
routes.delete("/delete/:id",auth("task_delete"),task.tdelete)
routes.put("/task/restore/:id",auth("task_restore"),task.trestore)
routes.put("/taskassign/:id",auth("task_update"),task.taskAssign)
routes.put("/task/status/:id",auth("task_update"),task.tStatus)
routes.put("/task/revoke/:id",auth("task_revoke"),task.revokeTask)

module.exports = {routes}