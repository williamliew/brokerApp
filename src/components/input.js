
var InputField = React.createClass({
  getInitialState: function() {
      return {
        data: []
      };
  },

  handleChange: function(e) {
    this.setState({value: e.target.value.substr(0, 10)});
    TestOutput.props.value = e.target.value;
  },

  render: function() {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <div className="test">
          {value}
        </div>
      </div>
    );
  }
});

var TestOutput = React.createClass({
  render: function() {
    var value = this.props.value;
    return (
      <div className="test">
        {value}
      </div>
    );
  }
});
