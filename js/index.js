const app = Vue.createApp({
  data() {
    return {
      message: 'Todo App',
      newTodo: '',
      editing: false,
      todosList: [
        { task: 'Have breakfast', edit: false },
        { task: 'Clean my room', edit: false },
        { task: 'Go to the gym', edit: false },
        { task: 'Prepare a meal', edit: false }
      ]
    }
  },
  methods: {
    addTodo(){
      if(this.newTodo){
        let task = {
          task: this.newTodo,
          edit: false
        }
        this.todosList.push(task)
        this.newTodo = ''
      }
    },
    showEditForm(index){
      if(!this.editing){
        this.editing = true
        this.todosList[index].edit = true
      }
    },
    editTodo(index){
      if(this.todosList[index].task.length >= 5){
        this.todosList[index].edit = false
        this.editing = false
      }else{
        alert('Please enter at least 5 characters')
      }
    },
    cancelEditTodo(index){
      this.todosList[index].edit = false
      this.editing = false
    },
    deleteTodo(index){
      this.todosList.splice(index, 1);
    }
  }
})

app.mount('#app')
