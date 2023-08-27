<template>
  <div class="container">
    <h1 class="mt-4">Günlük Çalışacağımız Dersleri Ekleyelim</h1>
    <h1 class="mt-4">{{ title }}</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Yeni görev ekle..."
        v-model="newTodoText"
        @keyup.enter="addTodo"
      />
      <button class="btn btn-primary" type="button" @click="addTodo">Ekle</button>
    </div>
    <ul class="list-group">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="['list-group-item', { 'list-group-item-success': todo.completed }]"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div class="todo-text">{{ todo.text }}</div>
          <div>
            <button
              class="btn btn-sm btn-outline-success me-1"
              @click="completeTodo(index)"
            >
              <span v-if="!todo.completed">Tamamlandı</span>
              <span v-else>İptal Et</span>
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="deleteTodo(index)"
            >
              Sil
            </button>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="completedTodos.length > 0" class="mt-4">
      <h2>Tamamlanan Dersler</h2>
      <ul class="list-group">
        <li
          v-for="(todo, index) in completedTodos"
          :key="index"
          class="list-group-item list-group-item-success"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    newTodoText: "",
    todos: [
      { text: "Örnek ", completed: true }
    ]
  };
},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
  methods: {
    addTodo() {
      const text = this.newTodoText.trim();
      if (text !== "") {
        this.todos.push({ text: text, completed: false });
        this.newTodoText = "";
      }
    },
    completeTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  background-image: linear-gradient(to right, #4ecdc4, #556270);
}

.container {
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.todo-text {
  flex: 1;
}

.list-group {
  margin-top: 1rem;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-left: 7cm;
}

h2 {
  margin-left: 12cm;
}

.list-group-item-success {
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
}
</style>
