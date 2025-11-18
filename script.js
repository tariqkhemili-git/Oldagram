// /*
// The JavaScript part will be a stretch goal, and is only meant to be completed if they have
// managed to do the CSS first. In the JS part, they will change the layout from being one
// post only into being a bunch of posts, as they get an array with all the data needed to
// render out the posts.

// */

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: "21,492",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: "12,502",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: "15,137",
  },
];

// /* SOLUTION */
// Use the fixed header height CSS var set in `styles.css` rather than computing it in JS.
// This ensures the header-height is consistently 35px as configured in CSS.
if (
  !getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim()
) {
  document.documentElement.style.setProperty("--header-height", "35px");
}

let mainEl = document.getElementById("main");
// If there is no <main id="main">, create one just after the header
if (!mainEl) {
  mainEl = document.createElement("main");
  mainEl.id = "main";
  const header = document.querySelector("header");
  if (header && header.parentNode) {
    header.parentNode.insertBefore(mainEl, header.nextSibling);
  } else {
    document.body.appendChild(mainEl);
  }
}

// Clear existing content (removes any static posts so dynamic posts don't duplicate)
mainEl.innerHTML = "";

let html = "";
for (let i = 0; i < posts.length; i++) {
  html += `
        <article class="post">
                <div class="header">
                    <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name} profile photo">
                    <div>
                        <div>
                            <span class="name">${posts[i].name}</span>
                        </div>
                        <span class="location">${posts[i].location}</span>
                    </div>
                </div>
                <div>
                    <img class="img" src="${posts[i].post}" alt="Post image by ${posts[i].name}">
                </div>
                <div class="interactions">
                    <button class="like" type="button" aria-label="Like"></button>
                    <button class="comment" type="button" aria-label="Comment"></button>
                    <button class="share" type="button" aria-label="Share"></button>
                </div>
                <div class="like-count">${posts[i].likes} likes</div>
                <div class="desc">
                    <span class="name">${posts[i].username}</span> ${posts[i].comment}
                </div>
            </article>
    `;
}

// Give the last post an id="last-post" to match the original structure
// We'll append content and then set the id on the last .post element
mainEl.innerHTML = html;
const postsEls = mainEl.querySelectorAll(".post");
if (postsEls.length > 0) {
  postsEls[postsEls.length - 1].id = "last-post";
}
