const { createApp } = Vue

createApp({
  data(){
    return{
      toDoList: [
        {
          toDo: "lavatrice",
          done: true
        },
        {
          toDo: "cucinare",
          done: false
        },
        {
          toDo: "pulire",
          done: true
        },
        {
          toDo: "studiare",
          done: false
        },
      ],
      newToDo : "",

    }
  },
  methods:{
    addToDoItem(newItem){
      let newItemObj = {
        toDo: newItem,
        done: false
      }
      
      if(newItem.length > 2){
        if(!this.toDoList.find((element) => element.toDo === newItem.toLowerCase())){
          this.toDoList.push(newItemObj);
        }else{
          alert("Esiste già");
        }
      } else{
        alert("Inserisci più di due caratteri");
      }
      this.newToDo = ""
    },
  }
}).mount("#app");