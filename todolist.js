var demo = new Vue({
    el: '#demo',
    data: {
      list:localStorage.todoList == undefined || localStorage.todoList == ''?[]:JSON.parse(localStorage.todoList),
      sth:'',
      doneList:localStorage.doneList == undefined || localStorage.doneList == ''?[]:JSON.parse(localStorage.doneList)
    },
    methods:{
      insure:function(ev){  //add sth
        if(ev.keyCode == 13 && demo.sth !=""){                  
          demo.list.push({title:demo.sth});
        }
        localStorage.todoList = JSON.stringify(demo.list);
      },
      cancle:function(ev){  //remove sth
        var item = ev.target.previousSibling.previousSibling.previousSibling.innerText;
        demo.list.splice(item,1);
        localStorage.todoList = JSON.stringify(demo.list);
      },
      done:function(ev){
        if(ev.target.checked){
          var item = ev.target.previousSibling.innerText;
          demo.list.splice(item,1);
          localStorage.todoList = JSON.stringify(demo.list);
          demo.doneList.push({done:ev.target.nextSibling.innerText});
          localStorage.doneList = JSON.stringify(demo.doneList);
        }
      }
    }
})
