import { Action } from '@ngrx/store';

const initalState = {
    Search_Word: ''
};
export function searchProduct(state = initalState, action: Action) {
        // if(action.type == "OPEN_NOTIFICATIONS" ||action.type == "CLOSE_NOTIFICATIONS"){
        //     return;
        // }
     if (action.type.length <= 0 ) {
        return {
            ...state,
            Search_Word: ''
        };
    } else {
        return {
            ...state,
            Search_Word: action.type
        };

    }
}
