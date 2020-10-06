(async function(){
//var token= 'a4ca36fb44d343bda293a9522ffc3d04;
var url = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a4ca36fb44d343bda293a9522ffc3d04";

var data = await (await fetch(url)).json();
console.log[data.articles[0]]

data.articles.forEach(art => {
    
    var head=document.createElement('div');
    head.style.backgroundImage = `url (${art.urlToImage})`
    head.classList.add("head");
    document.body.appendChild(head)


    var title =document.createElement('div')
    title.classList.add('title')
    title.innerText = art.title;
    head.appendChild(title)


    var desc = document.createElement("div")
    desc.classList.add('desc');
    desc.innerHTML = art.description;
    document.body.appendChild(head);
    document.body.appendChild(desc);



});


})()