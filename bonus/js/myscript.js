const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2021"
    }
];
console.log(posts);

// array vuoto in cui inserirò i post che mi piacciono
let myLikePost = [];

// richiamo il contenitore in cui inserire i post generati
const ctnPost = document.getElementById("container");

// creo il  ciclo forEach per stampare gli oggetti dell'array nel DOM
posts.forEach(elem => {

    let post = `<div class="post">
                    <div class="post__header">
                        <div class="post-meta">                    
                            <div class="post-meta__icon">
                                <img class="profile-pic" src=${elem.author.image} alt=${elem.author.name}>                    
                            </div>
                            <div class="post-meta__data">
                                <div class="post-meta__author">${elem.author.name}</div>
                                <div class="post-meta__time">${elem.created}</div>
                            </div>                    
                        </div>
                    </div>
                    <div class="post__text">${elem.content}</div>
                    <div class="post__image">
                        <img src=${elem.media} alt="Image not found...">
                    </div>
                    <div class="post__footer">
                        <div class="likes js-likes">
                            <div class="likes__cta">
                                <a class="like-button  js-like-button" id="like-${elem.id}" data-postid="${elem.id}">
                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                    <span class="like-button__label">Mi Piace</span>
                                </a>
                            </div>
                            <div class="likes__counter">
                                Piace a <b id="like-counter-${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
                            </div>
                        </div> 
                    </div>            
                </div>`

    ctnPost.innerHTML += post; 
});

// richiamo i tag a class js-like-button per poi potergli assegnare una funzione
let buttonLike = document.querySelectorAll(".js-like-button");
console.log(buttonLike);

// creo una variabile per l'incremento e il decremento del like
let myLike = 0;

// creo il ciclo forEach con cui assegnare la funzione al tag a class js-like-button
buttonLike.forEach((element, i) => {
    
    // creo l'evento al click sul bottone del like
    element.addEventListener('click', function() {

        // uso toggle per inserire o disinserire la classe like__slelected
        element.classList.toggle("like__selected");

        // creo una variabile per richiamare il valore iniziale dei like contenuto nell'array posts
        let totalLike = posts[i].likes;
        console.log(totalLike);

        // creo una variabile id così da poter richiamare il valore dell'id del post e stampare il nuovo valore dei like nel counter corretto
        let id = i + 1;
        let counter = document.getElementById(`like-counter-${id}`);
        console.log(counter);

        // stampo gli id dei post che mi piacciono in un nuovo array
        myLikePost.indexOf(id) === -1 ? myLikePost.push(id) : myLikePost.splice(myLikePost.indexOf(id), 1);

        // creo le condizioni per stampare i vari valori del like o dislike
        if (myLike === 0 ) {
            myLike++;
            counter.innerHTML = totalLike + myLike;
            console.log(counter.innerHTML);
            console.log(myLikePost);

        } else {
            myLike--;
            counter.innerHTML = totalLike;
            console.log(counter.innerHTML);
            console.log(myLikePost);
        }

    });
});
    