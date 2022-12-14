const { createApp } = Vue

createApp({
  data(){
    return{
      toDoList: [
        {
          toDo: "lavatrice",
          areDid: false
        },
        {
          toDo: "cucinare",
          areDid: false
        },
        {
          toDo: "pulire",
          areDid: false
        },
        {
          toDo: "studiare",
          areDid: false
        },
      ],
      newToDo : "",

    }
  },
  methods:{
    addToDoItem(newItem){

      let newItemObj = {
        toDo: newItem,
        areDid: false
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
    }
  }
}).mount("#app");