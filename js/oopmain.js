(function(){
  'use strict';
  var Todo = {}; //Model
  var Todos = function() {
    this.collection = [];
    this.addTodo = function () {
      this.collection.push(newTodo);
    }
  }; //collection

  var App = function () {
    this.Todos = new Todos();

    return this; //chaining
  };

  App.prototype = {
    addTodo: function () {
      this.Todos.addTodo(object)
    },
    render: function () {
      this.Todos.collection.each()
    }
  }

  window.document.addEventListener('domContentLoaded', function  () {
    window.app = new App();
  })
})()
document.getElementById(“addTodo”)..addEventListener("click", function(){
  var todoText = document.getElementById(“todoText").value;
   window.app.addTodo(todoText);
   window.app.render();
});