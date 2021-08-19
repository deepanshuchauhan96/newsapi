import {newsurl} from './api.js';

console.log(newsurl);

// Make a call to news api and get news feed
window.addEventListener('load', ()  => {
    
    getNews();
});

async function getNews()
{
    //Make a call to new feed api
    const newsoutput = await fetch(newsurl);

    // Store it in a Json
    const jsonresponse = await newsoutput.json();

    console.log(jsonresponse);

    // Loop thru json articles and extract title, descrip, url, urltoimage
    jsonresponse.articles.map(article => {

        const title = article.title;
        const desc = article.description;
        const urltoimage = article.urlToImage;
        const url = article.url;
        //console.log(url);

        // Form HTML elements 
        const articleelementcontainner = document.createElement("div");

        const articlelement = `
                        <style>
                        h2 {
                            font-family: Georgia, 'Times New Roman', Times, serif;
                          }
                          
                           a,
                           a:visited {
                            text-decoration: none;
                            color: inherit;
                          }
                          
                           img {
                            width: 100%;
                        </style>
        
                        <a href="${url}">
                            <h1>${title}</h1>
                            <img src="${urltoimage}"></img>
                            <p>${desc}</p>
                        </a>`;

        articleelementcontainner.innerHTML = articlelement;

        // Identify div containner
        const newcontainner = document.querySelector("#main");
        
        // Display the same on news.html
        newcontainner.appendChild(articleelementcontainner);
        
    });


   

}
