class projectDeadlines{

    public employeename:string;
    public empid:number;
    public projectsDone:any=[{
        projectName: '',
        remarks:'',
        timetaken:''
    }];
    
    public tasks:any=[
        {
    taskname:"",
    timeallocated:"",
    status:""
    }];
    
    //functions
    
    
     addTasks(tname:string,time:string,stats:string) {
       
       this.tasks.push({taskname:tname,timeallocated:time,status:stats});
        // tasks.timeallocated=time;
        // tasks.status=status;
    
    }
     showTasks(){
        console.log(this.tasks);
    }
    
      completeTask(task:string){
    
    for(var i=0;i<this.tasks.length;i++)
    {
        if(this.tasks[i].taskname==task)
        {
            this.tasks[i].status= "completed";
            //this.tasks[i].t
        }
    }
    }
    
    
    
}
    
    var obj1:projectDeadlines= new projectDeadlines();
    obj1.addTasks("login","2 hrs","not completed");
    obj1.addTasks("signup","3 hrs"," not completed");
    obj1.showTasks();
    console.log("*********************after completing login task**********************");
    obj1.completeTask("login");
    obj1.showTasks();
    