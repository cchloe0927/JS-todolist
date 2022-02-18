// CSS in javascript part1
// const h1 = document.querySelector("div.hello:first-child h1");
// console.log(h1)

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);


// CSS in javascript part2
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);

//모든 파일을 지고 4강부터는 어플리케이션 만들예정 ~