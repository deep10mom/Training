function meeting(){
    this.projectname=[];
    this.time=[];
    this.venue=[];
    this.add=function(name,t,v){
        this.projectname.push(name);
        this.time.push(t);
        this.venue.push(v);
    }
    
}
var obj=new meeting();
obj.add("poject 1","23-09-19 9:30 am","oakwood");
obj.add("project 2","1-06-19 10:00 am","hyatt");
console.log("name of project: " +obj.projectname);
console.log("time:  "+obj.time);
console.log("Venue: "+obj.venue);