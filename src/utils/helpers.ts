import { lifecycle } from "recompose";

export const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateMessage = msg => String(msg).length > 60;

export const updateMetaTitle = (title: string, component) => {
    return lifecycle({
        componentDidMount() {
            document.title = `Benya Burnett | ${title}`;
        },
    })(component);
};
