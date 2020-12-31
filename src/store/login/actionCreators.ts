import { ActionTypeEnum, IAction } from './action';

export function createClearUserNameAction(): IAction {
    return { type: ActionTypeEnum.clearUserName };
}

export function createSetUserNameAction(userName: string): IAction {
    return { type: ActionTypeEnum.setUserName, payload: userName };
}
