import { Action } from '@ngrx/store';
import * as actionClass from './action';

const initalState = {
    notifications_number: true,
};
export function openNotificationReducer(state = initalState, action: Action){

    switch(action.type){
        case actionClass.OPEN_NOTIFICATIONS:
            return {
                ...state,
                notifications_number:false
            };
        case actionClass.CLOSE_NOTIFICATIONS:
            return {
                ...state,
                notifications_number:true
            };
        default :
            return state;

    }
}
