const app = Vue.createApp({
  data() {
    return {
      message: 'Todo App',
      newTodo: '',
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
      this.todosList[index].edit = true
    },
    editTodo(index){
      this.todosList[index].edit = false
      this.toEditTodo = ''
    },
    deleteTodo(index){
      this.todosList.splice(index, 1);
    }
  }
})

app.mount('#app')
