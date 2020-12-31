import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, ActionFromReducer, AnyAction, Dispatch } from 'redux';

import reducer from './reducer';

interface TypedUseDispatchHook<A extends Action = AnyAction> {
    (): Dispatch<A>;
}

/** the type of redux root-store */
type RootState = ReturnType<typeof reducer>;
/** the type of redux dispatch-action */
type RootAction = ActionFromReducer<typeof reducer>;

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch: TypedUseDispatchHook<RootAction> = useDispatch;
