function reducer(state, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      var newState = _.clone(state);
      newState.filter = action.filter;
      return newState;

    case 'SET_COMPLETE_TODO':
      var newState = _.clone(state);
      newState.todos[action.index].completed = true;
      return newState;

    default:
      return state
  }
}