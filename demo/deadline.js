var projectDeadlines = /** @class */ (function () {
    function projectDeadlines() {
        this.projectsDone = [{
                projectName: '',
                remarks: '',
                timetaken: ''
            }];
        this.tasks = [
            {
                taskname: "",
                timeallocated: "",
                status: ""
            }
        ];
    }
    //functions
    projectDeadlines.prototype.addTasks = function (tname, time, stats) {
        this.tasks.push({ taskname: tname, timeallocated: time, status: stats });
        // tasks.timeallocated=time;
        // tasks.status=status;
    };
    projectDeadlines.prototype.showTasks = function () {
        console.log(this.tasks);
    };
    projectDeadlines.prototype.completeTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].taskname == task) {
                this.tasks[i].status = "completed";
                //this.tasks[i].t
            }
        }
    };
    return projectDeadlines;
}());
var obj1 = new projectDeadlines();
obj1.addTasks("login", "2 hrs", "not completed");
obj1.addTasks("signup", "3 hrs", " not completed");
obj1.showTasks();
console.log("*********************after completing login task**********************");
obj1.completeTask("login");
obj1.showTasks();
