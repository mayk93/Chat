/**
 * Created by Michael on 09/12/16.
 */

export default function (state = null, action) {
    switch (action.type) {
        case "TEXT_PROCESS":
            console.log("TEXT_PROCESS: ", action.payload);
            return action.payload;
        default:
            return state;
    }
}