// /*
// The JavaScript part will be a stretch goal, and is only meant to be completed if they have
// managed to do the CSS first. In the JS part, they will change the layout from being one
// post only into being a bunch of posts, as they get an array with all the data needed to
// render out the posts.

// */

// const posts = [
//     {
//         name: "Vincent van Gogh",
//         username: "vincey1853",
//         location: "Zundert, Netherlands",
//         avatar: "images/avatar-vangogh.jpg",
//         post: "images/post-vangogh.jpg",
//         comment: "just took a few mushrooms lol",
//         likes: "21,492"
//     },
//     {
//         name: "Gustave Courbet",
//         username: "gus1819",
//         location: "Ornans, France",
//         avatar: "images/avatar-courbet.jpg",
//         post: "images/post-courbet.jpg",
//         comment: "i'm feelin a bit stressed tbh",
//         likes: "12,502"
//     },
//         {
//         name: "Joseph Ducreux",
//         username: "jd1735",
//         location: "Paris, France",
//         avatar: "images/avatar-ducreux.jpg",
//         post: "images/post-ducreux.jpg",
//         comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
//         likes: "15,137"
//     }
// ]

// /* SOLUTION */
// const mainEl = document.getElementById("main")
// let html = ""
// for (let i = 0; i < posts.length; i++) {
//     html += `
//         <article class="post">
//                 <div class="header container">
//                     <img class="avatar" src="${posts[i].avatar}">
//                     <div>
//                         <div>
//                             <span class="name">${posts[i].name}</span>
//                         </div>
//                         <span class="location">${posts[i].location}</span>
//                     </div>
//                 </div>
//                 <div>
//                     <img class="img" src="${posts[i].post}">
//                 </div>
//                 <div class="control-bar container">
//                     <img src="images/icon-heart.png">
//                     <img src="images/icon-comment.png">
//                     <img src="images/icon-dm.png">
//                 </div>
//                 <div class="container">
//                     <span class="likes">${posts[i].likes} likes</span>
//                 </div>
//                 <div class="container">
//                     <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
//                 </div>
//             </article>
//     `
// }

// mainEl.innerHTML = html;
