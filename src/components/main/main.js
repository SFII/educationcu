var React = window.React = require('react');
//     Timer = require("./timer/Timer"),
var mountNode = document.getElementById("main");
//
// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(itemText) {
//       return <li>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });
// var TodoApp = React.createClass({
//   getInitialState: function() {
//     return {items: [], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render: function() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//         <Timer />
//       </div>
//     );
//   }
// });
//
//
// React.render(<TodoApp />, mountNode);

var MyComp = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    // logic, go pull data from database.
    //$.get("http://myapi.com/")

    // var x = [{name: "Peyman", age: "99"},
    //             {name: "Slaten", age: "69"}]

    //var x = $.get()
    $.get("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES", function(result) {
	    result = {"survey":[
			{"question":"What is your sex?", "responses":["M","F"]},
			]};
      this.setState({data: result.survey}, null );
    }.bind(this));


  },
  render: function () {

    var myDataShit = this.state.data.map(function(item){
      return (<SubComp prop1={item.question} prop2={item.responses} />);
    })

    console.log(myDataShit);

    return (
      <div>
        Yo, my data:
        <p id='hello'>
          {myDataShit}
        </p>
      </div>
    )
  }
})

var SubComp = React.createClass({
  render: function () {
    return (
      <div>
        <b>{this.props.prop1}</b>
        <b>{this.props.prop2}</b>
      </div>
    )
  }
})


React.render(<MyComp />, mountNode);
