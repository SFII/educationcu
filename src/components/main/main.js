var React = window.React = require('react');
var mountNode = document.getElementById("main");

var SubComp = React.createClass({
  render: function () {
    return (
        <p>{this.props.question}</p>
        {this.props.responses.map(function(response) {
           return <input type="radio" name="sex">{response}</input>;
         })}
        )

     }
  })

var MyComp = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.get("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES", function(result) {
	    result = {"survey":[
			{"question":"What is your sex?", "responses":["M","F"]},
			{"question":"What is your current status?", "responses":["Freshaman","Sophmore","Junior","Senior"]},
			]};
      this.setState({data: result.survey}, null );
    }.bind(this));


  },
  render: function () {

    var myDataShit = this.state.data.map(function(item){
       console.log(item);
      return (<SubComp key={item.id} question={item.question} responses={item.responses}/>);
    })


    return (
      <div>
         <form>
           <p id='hello'>
             {myDataShit}
           </p>
           </form>
      </div>
    )
  }
})



React.render(<MyComp />, mountNode);
