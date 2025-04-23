/*
const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
 
This variable can be accessed via window.versions or simply versions. 

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()
*/
/*
const viewSelectElement = document.querySelectorAll("[data-view-select]")
console.log(viewSelectElement);
*/

const func = async () => {
  const viewSelectElement = document.querySelectorAll("[data-view-select]")
console.log(viewSelectElement);
}

func()