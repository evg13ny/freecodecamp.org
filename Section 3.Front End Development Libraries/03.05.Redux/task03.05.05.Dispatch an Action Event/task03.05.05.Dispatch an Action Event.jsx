const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// Dispatch the action here:

console.log(store.dispatch(loginAction()));

console.log(store.dispatch({ type: 'LOGIN' }));