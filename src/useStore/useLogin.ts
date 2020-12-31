import { useReduxDispatch, useReduxSelector } from '../store/hook';
import {
    createClearUserNameAction,
    createSetUserNameAction
} from '../store/login/actionCreators';

export default function useLogin() {
    const dispatch = useReduxDispatch();
    const { name } = useReduxSelector((state) => state.login);

    function setUserName(userName: string) {
        dispatch(createSetUserNameAction(userName));
    }

    function clearUserName() {
        dispatch(createClearUserNameAction());
    }

    return { name, setUserName, clearUserName };
}
