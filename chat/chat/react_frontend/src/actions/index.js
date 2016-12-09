import request from 'superagent';

export function change_current_view(target) {
    return {
        type: "VIEW_CHANGE",
        payload: target
    };
}


export function process_text_laison(value) {
    return {
        type: "TEXT_PROCESS",
        payload: value
    };
}



export function process_text(text, endpoint) {
    console.log("Now processing text. Sending to: ", endpoint);
    return function(dispatch) {
        var process_request = request.post(endpoint);
        process_request.send({ text: text });
        process_request.end((error, response) => {
            if (error == null) {
                console.log("Success processing text! Response: ", response);
                dispatch(process_text_laison(response.body.response));
            } else {
                console.log("Exception processing text!");
                dispatch(process_text_laison(null));
            }
        });
    }
}
