export enum ActionTypeEnum {
    /** 设置当前登录的用户名 */
    setUserName = 'login/set-userName',
    /** 清空当前登录的用户名 */
    clearUserName = 'login/clear-userName',
}

export type IAction =
    | { type: ActionTypeEnum.setUserName; payload: string }
    | { type: ActionTypeEnum.clearUserName }

