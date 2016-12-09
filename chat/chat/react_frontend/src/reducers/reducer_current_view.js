/**
 * Created by Michael on 09/12/16.
 */

export default function (state = 'chat_app', action) {
    switch (action.type) {
        case "VIEW_CHANGE":
            return action.payload;
        default:
            return state;
    }
}