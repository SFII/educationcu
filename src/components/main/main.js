var React = window.React = require('react');
var mountNode = document.getElementById("main");

var SubComp = React.createClass({
   render: function() {
      return(<div>
               <h1>Survey Selection</h1>
               <p>It is important that your responses are acurate. If you don't feel like you can answer a question accuratly, skip it rather than give false information. </p>
               <input type="radio" value="short" name="selection"  class="response">
                  Short Survey (less than a minute)
               </input>
               <br></br>
               <input type="radio" value="medium" name="selection"  class="response">
                  Medium Survey (a couple of minutes)
               </input>
               <br></br>
               <input type="radio" value="long" name="selection"  class="response">
                  Thorough Survey (5-10 minutes)
               </input>
               <br></br>
               <br></br>
               <input type="submit" value="Submit"></input>
            </div>);
   }
})

var QuestionComp = React.createClass({
    render: function() {
        return ( <div>
              <br></br>
              <p> {
                this.props.question
            } </p> {
                this.props.responses.map(function(response) {
                   console.log(name);
                    return ( <div class="question">
                        <input class="response" type = "radio"
                        name = {name}> {
                            response
                        } </input> <br> </br> </div>
                    );
                })
            } </div>
        )

    }
})

function render_survey(size){
   var SurveyComp = React.createClass({
               getInitialState: function() {
                   return {
                       data: []
                   };
               },
               componentDidMount: function() {
                   $.get("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES", function(result) {
                       result = {
                           "survey": [{
                               "question": "What is your sex?",
                               "responses": ["M", "F"],
                               "name": "one"
                           }, {
                               "question": "What is your current status?",
                               "responses": ["Freshaman", "Sophmore", "Junior", "Senior"],
                               "name": "two"
                           }, {
                               "question": "Would you reccommend the course to a friend",
                               "responses": ["Yes", "No"],
                               "name": "three"
                           }, {
                               "question": "Would you reccommend the professor to a friend",
                               "responses": ["Yes", "No"],
                               "name": "four"
                           }, {
                              "question": "Did you enjoy this course?",
                              "responses": ["Yes", "No"],
                              "name": "five"
                           }]
                       };
                       this.setState({
                           data: result.survey
                       }, null);
                   }.bind(this));


               },
               render: function() {

                   var questionData = this.state.data.map(function(item) {
                           return ( <QuestionComp name = {
                                   item.name
                               }
                               question = {
                                   item.question
                               }
                               responses = {
                                   item.responses
                               }
                               />);
                           })


                       return ( <div class="survey">
                           <form>
                           {questionData}
                           </form>
                           </div>
                       )
                   }
               })
}


React.render( <SurveyComp/> , mountNode);
//React.render( <SubComp/> , mountNode);
