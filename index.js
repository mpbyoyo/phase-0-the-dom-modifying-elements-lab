// Write your code here!
const main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.setAttribute("id", 'victory')

newHeader.textContent = "name is the champion"

console.log(newHeader.id)
console.log(newHeader.innerHTML)

// I'm not really sure why my tests are failing here. The tests say that I need a newHeader variable with an ID
// of "victory" and "is the champion" inside. Console logging both of the tests from indexTest.js shows the proper result,
// but when the test runs it still says I'm failing. Not sure what to do about that.