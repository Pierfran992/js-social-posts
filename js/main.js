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
                                <a class="like-button  js-like-button" id="like-${elem.id}" data-postid="${elem.id}" onclick="likePost(${elem.id})">
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


// creo la funzione che mi viene richiamata dal onclick inserita nel tag a
function likePost(postId) {

    // richiamo il counter in cui inserire il nuovo valore dei like 
    let counter = document.getElementById(`like-counter-${postId}`);

    // richiamo il tag a per farlo colorare quando si seleziona il pulsante like
    let like = document.getElementById(`like-${postId}`);

    if (myLikePost.filter(elem => postId == elem).length > 0) {
        myLikePost = myLikePost.filter(elem => postId != elem);
        posts.filter(post => {
            if (post.id == postId) {
                post.likes--;
                console.log(post.likes);
                counter.innerHTML = post.likes;
            }
        });

    } else {
        myLikePost.push(postId);
        posts.filter(post => {
            if (post.id == postId) {
                post.likes++;
                console.log(post.likes);
                counter.innerHTML = post.likes;
            }
        });
    }

    console.log(myLikePost);

    like.classList.toggle("like__selected");
};
