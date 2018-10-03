import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "bbToken"
);

const url = `${process.env.SERVER_ADDRESS}/api`;

interface IArticle {
    title: string;
    text: string;
    url: string;
    date: string;
    imgUrl: string;
    type: string;
    _id: string;
}

export const createArticle = data => {
    return axios
        .post(`${url}/articles/post`, data)
        .catch(e => localStorage.removeItem("Authorization"));
};

export const deleteArticle = (articleId: string) => {
    return axios
        .delete(
            `${process.env.SERVER_ADDRESS}/api/articles/remove/${articleId}`
        )
        .catch(e => localStorage.removeItem("Authorization"));
};

export const updateArticle = data => {
    return axios
        .put(`${process.env.SERVER_ADDRESS}/api/articles/update`, data)
        .then((article: any) => article);
};
