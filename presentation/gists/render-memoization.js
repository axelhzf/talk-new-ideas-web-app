render() {
  if (this.state === this.lastState && this.props === this.lastProps) {
    return this.lastDom;
  }

  const result = <h1>.....</h1>;

  this.lastState = this.state;
  this.lastProps = this.props;
  this.lastDom = result;

  return result;
}
