import React, { useReducer, useContext } from 'react';

const StoreStateContext = React.createContext();
const StoreDispatchContext = React.createContext();

const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET':
			return action.payload;
		default:
			return state;
	}
};

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {});
	return (
		<StoreStateContext.Provider value={state}>
			<StoreDispatchContext.Provider value={dispatch}>
				{children}
			</StoreDispatchContext.Provider>
		</StoreStateContext.Provider>
	);
};

export const useState = () => useContext(StoreStateContext);
export const useDispatch = () => useContext(StoreDispatchContext);
