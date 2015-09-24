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
      {options:["Male","Female","Perfer not to respond"]}]
      this.setState({myQuestions: questions }, function() {});
   },
   render: function(){
      var myQuestions = this.state.myQuestions.map(function(item){
         return (<QuestionComponent question1={item.question} options={item.options}/>);
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
      console.log(this.props.options);
      var inputs=[];
         inputs.push(<p>{this.props.question1}</p>);
      for(var i=0; i<3; i++){
         inputs.push(<input type="radio" name="sex">{this.props.options[i]}</input>);

      }
      return (
            <div>
               {inputs}
            </div>
   )}
})


React.render(<Survey />, mountNode);
