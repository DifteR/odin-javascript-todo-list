(()=>{"use strict";function e(e,o="",t="false",i="false",s="low",a="false"){return this.title=e,this.description=o,this.dueDate=t,this.dueTime=i,this.priority=s,this.done=a,{title:e,description:o,dueDate:t,dueTime:i,priority:s,done:a}}todoList=document.getElementById("todoList");let o=new class{constructor(e,o){this.title=e,this.description=o,this.toDoItems=[]}addToDoItem(e){this.toDoItems.push(e)}}("bla","bla");o.addToDoItem(new e("Task 1","Description for Task 1","2023-01-01","12:00 PM","high")),o.addToDoItem(new e("Task 2","Description for Task 2","2023-01-02","3:00 PM","medium")),o.addToDoItem(new e("Task 3","Description for Task 3","2023-01-03","5:00 PM","low")),o.addToDoItem(new e("Task 4","Description for Task 4","2023-01-04","9:00 AM","high")),o.addToDoItem(new e("Task 5","Description for Task 5","2023-01-05","2:00 PM","medium")),o.addToDoItem(new e("Task 6","Description for Task 6","2023-01-06","4:30 PM","low")),o.addToDoItem(new e("Task 7","Description for Task 7","2023-01-07","10:00 AM","high")),o.addToDoItem(new e("Task 8","Description for Task 8","2023-01-08","1:30 PM","medium")),o.addToDoItem(new e("Task 9","Description for Task 9","2023-01-09","6:00 PM","low")),o.addToDoItem(new e("Task 10","Description for Task 10","2023-01-10","8:45 AM","high")),o.toDoItems.forEach((e=>{console.log(e);let o=document.createElement("li");o.innerHTML="<input type='checkbox'></input>",o.innerHTML+=e.title,todoList.appendChild(o)}))})();