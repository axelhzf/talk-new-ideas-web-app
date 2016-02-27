shouldComponentUpdate(newState, newProps) {
  return newState !== this.state || newProps !== this.props;
}

render() {
  return <h1>...</h1>
}