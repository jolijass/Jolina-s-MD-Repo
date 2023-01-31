let sayings=[
    "I love coding *cries* -- Jolina Jassal",
    "What's UnionWest? -- Alan Giraldo",
    "Just dance, gonna be okay, da da doop just dance -- Lady Gaga"
];

function quoteTime() {
let info=Math.floor(Math.random()*sayings.length);

    let divs=document.querySelector('#quote');
    let quote=`<div class="card">
    <p>${sayings[info]}</p>
   </div>`;
    divs.innerHTML=quote;
}
