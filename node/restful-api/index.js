import fetch from "node-fetch";
import got from "got";

(async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1");
        const json = await response.json();

        console.log(json);
        
    } catch (error) {
        console.log(error);
    }
})();

const getData = async () => {
    try {
        const res = await got
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .json();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
getData();

    

