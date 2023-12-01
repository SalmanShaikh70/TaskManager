let taskModel = require("../model/task")

async function create(request,response){
    let data = await taskModel.create(request.body,request.userData).catch((err)=>{
        return {error : err}
    })
    console.log("7",data);
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : data.data})
}

async function view(request,response){
    let data = await taskModel.view(request.params.id).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : data.data})
}

async function viewAll(request,response){
    let data = await taskModel.viewAll().catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : data.data})

}

async function update(request,response){
    let data = await taskModel.update(request.params.id,request.body,request.userData).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : data.data})
}

async function tdelete(request,response){
    let data = await taskModel.tdelete(request.params.id,true).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : "deleted succcessfully"})
}

async function trestore(request,response){
    let data = await taskModel.tdelete(request.params.id,false).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : "restored succcessfully"})
}

async function taskAssign(request,response){
    let data = await taskModel.taskAssign(request.params.id,request.body,request.userData).catch((err)=>{
        return {error : err}
    })
    console.log("69",data);
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : "updated succcessfully"})
}

async function tStatus(request,response){
    let data = await taskModel.tStatus(request.params.id,request.body,request.userData).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : "status updated"})
    
}

async function revokeTask(request,response){
    let data = await taskModel.revokeTask(request.params.id,request.userData).catch((err)=>{
        return {error : err}
    })
    if(!data || (data && data.error)){
        let error = (data && data.error)? data.error : "Internal Server Error";
        let status = (data && data.status) ? data.status : 500;
        return response.status(status).send({error})
    }
    return response.send({data : "task revoked successfully"})
}

module.exports = {
    create,
    view,
    viewAll,
    update,
    tdelete,
    taskAssign,
    tStatus,
    trestore,
    revokeTask
}
