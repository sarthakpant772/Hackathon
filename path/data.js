const obj = [
    '{"title":"Testing STUFFFF", "content": "this is web dev"}',
    '{"title":"NEWWWW STUFFDDDD", "content": "this is a TESTING DATAS"}'
];

const data = JSON.parse(obj);


document.getElementById("test").innerHTML = data.title;