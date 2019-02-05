import axios from "axios";

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

export const createArticle = async (data) => {
    const token = localStorage.getItem("bbToken");
    console.log(token);
    return axios
        .post(`${url}/articles/post`, data, {
            headers: { bbToken: token },
        })
        .catch((e) => localStorage.removeItem("bbToken"));
};

export const deleteArticle = async (articleId: string) => {
    const token = localStorage.getItem("bbToken");

    return axios
        .delete(
            `${process.env.SERVER_ADDRESS}/api/articles/remove/${articleId}`,
            {
                headers: { bbToken: token },
            }
        )
        .catch((e) => localStorage.removeItem("bbToken"));
};

export const updateArticle = async (data) => {
    const token = localStorage.getItem("bbToken");

    return axios
        .put(`${process.env.SERVER_ADDRESS}/api/articles/update`, data, {
            headers: { bbToken: token },
        })
        .then((article: any) => article)
        .catch((e) => localStorage.removeItem("bbToken"));
};
