var React = window.React = require('react');
var mountNode = document.getElementById("main");

var SubComp = React.createClass({
    render: function() {
        var radioButtons = this.props.responses.map(function(response) {
            return (
                <input class="response" type = "radio"
                name = { this.props.name }> {response} </input>);
            }.bind(this));

        return (
            <div>
                <br></br>
                <p> {this.props.question} </p>
                {radioButtons}
            </div>
        );
    }
})

var MyComp = React.createClass({
            getInitialState: function() {
                return {
                    data: []
                };
            },

            componentDidMount: function() {
                $.get("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES",                               function(result) {
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

                var myData = this.state.data.map(function(item) {
                        return ( <SubComp

                            name = {
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


                    return (
                        <div>
                        <form>
                        {myData}
                        </form>
                        </div>
                    )
                }
            })



React.render( <MyComp/> , mountNode);
