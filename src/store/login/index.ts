import { ActionTypeEnum, IAction } from "./action"


export type LoginState = {
    name: string;
}
const defaultState: LoginState = {
    name: ''
}

function reducer(state = defaultState, action: IAction) {
    switch (action.type) {
        case ActionTypeEnum.setUserName:
            return Object.assign({}, state, { name: action.payload });
        case ActionTypeEnum.clearUserName:
            return { ...state, name: '' }
        default:
            return state
    }
}

export default reducer