const obj = [
    '{"title":"Testing STUFFFF", "content": "this is web dev"}'
    
];

const data = JSON.parse(obj);


document.getElementById("test").innerHTML = data.title;