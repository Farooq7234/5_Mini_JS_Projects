let  arr = [{
  dp:"https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",story:"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
},
{
  dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",story:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
},{
  dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",story:"https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
},{
  dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",story:"https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
}]



let storiyan = document.querySelector("#storiyan")
let clutter = ""

arr.forEach(function (elem,idx) {
  console.log(elem,idx)
  clutter +=`<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="Image not found">
</div>`
})

document.querySelector("#storiyan").innerHTML= clutter

storiyan.addEventListener("click",function (dets) {
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none"
  },3000)
})


function startProgress() {
  // Reset progress bar
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.animation = 'none';
  progressBar.offsetHeight; /* Trigger a reflow, flushing the CSS changes */
  progressBar.style.animation = null; /* Reset animation */

  // Start progress animation
  progressBar.style.animation = 'fillProgress 3s forwards';
}
