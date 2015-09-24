var React = window.React = require('react'),
    Timer = require("./timer/Timer"),
    mountNode = document.getElementById("main");

var Survey = React.createClass({
   getInitialState: function(){
      return {myQuestions:[]};
   },
   componentDidMount: function(){
      console.log("hello");
      var questions=[{question:"What is your gender"},
      {options:["Male","Female"]}]
      console.log(questions)
      this.setState({myQuestions: questions }, function() {});
   },
   render: function(){
      var myQuestions = this.state.myQuestions.map(function(item){
         console.log(item.question);
         return (<QuestionComponent question1={item.question}/>);
      })
      return  (
            <div>
               <p>
                  {myQuestions}
               </p>
            </div>
            )

       }
   })

var QuestionComponent = React.createClass({
   render: function(){
      return (
            <div>
               <p>{this.props.question1}</p>
            </div>
   )}
})


React.render(<Survey />, mountNode);
