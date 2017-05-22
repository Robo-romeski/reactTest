function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

class howdyDo extends React.Component {
	render() {
		return <div> Howdy {this.props.name}</div>;
	}
}

ReactDOM.render(<howdyDo name="Romeski" />, document.getElementById('root'));