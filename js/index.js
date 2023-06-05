const app = Vue.createApp({
  data() {
    return {
      message: 'Todo App',
      task: null,
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
      if(this.task != null){
        let task = {
          task: this.task
        }
        this.todosList.push(task)
        this.task = null
      }
    },
    showEditForm(index){
      this.todosList[index].edit = true
      this.task = this.todosList[index].task
    },

    editTodo(index){
      this.disableFormInput = true
      this.todosList[index].task = this.task
      this.todosList[index].edit = false
      this.task = null
    },
    deleteTodo(index){
      this.todosList.splice(index, 1);
    }
  }
})

app.mount('#app')
