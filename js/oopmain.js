(function(){
  'use strict';
  var Todo = {
    
  }; //Model
  var Todos = function() {
    this.collection = [];
    this.addTodo = function (todo) {
      this.collection.push(todo);
    }
  }; //collection

  var App = function() {
    this.Todos = new Todos();
    this.initEvents();
    return this; //chaining
  };

  App.prototype = {
    addTodo: function() {
      this.Todos.addTodo(object)
    },
    render: function() {
      var tmp = '';
      var mass = '';
      this.Todos.collection.forEach(function(elem, i, arr) {
        mass += '<div data-index=' + i + '>' + elem.title + '</div>';

      })
      tmp = mass;
      mass = '';
      $('#list').html(tmp);
    },
    initEvents: function() {
      // body... 
      var _this = this;
      $(document).on('click', '#btn', function(){return _this.makeTodo()})
      .on('click', '#btn', function(e){return _this.todoText(e)})
    },
    makeTodo: function() {
      this.Todos.addTodo({
        title: $('input').val(),
        resolved:false,
        rend: false
      });
      console.log(this.Todos);
      this.render();
    },
    todoText: function(e) {
      console.log(e.currentTarget);
    }
  }


    window.app = new App();

})()