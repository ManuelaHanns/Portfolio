import fetch from "node-fetch";

// Plain text or HTML
const response = await fetch("https://github.com/");
const body = await response.text();
console.log(body);

// JSON
const resPonse = await fetch("https://api.github.com/users/github");
const data = await resPonse.json();
console.log(data);

// simple Post
const reSponse = await fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'});
const data2 = await reSponse.json();

console.log(data2);

// Post with JSON
const body1 = {a: 1};

const response1 = await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify(body1),
	headers: {'Content-Type': 'application/json'}
});
const data1 = await response1.json();

console.log(data1);