const gridcontainer = document.querySelector(".gridcontainer");
const setsizebutton = document.querySelector("#setgridsize");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setgridsize() {
    let newsize = prompt("Enter new grid size (amount of squares per row, MAX 100):", "16");
    newsize = Number(newsize);
    if(Number.isInteger(newsize) && newsize < 101 && newsize > 0)
    {
        generateGrid(newsize);
    } else {
        alert("Invalid size (remember, 100 is max)");
    }
  }

//Create 16x16 grid divs
function generateGrid(size) {

    while (gridcontainer.lastElementChild) {
        gridcontainer.removeChild(gridcontainer.lastElementChild);
    }

     
    for (let i = 0; i < size*size; i++) {
        let gridsquare = document.createElement("div");
        gridsquare.classList.add("gridsquare");
        //gridsquare.style.width = `width: calc(100% / ${size})`;
        gridsquare.setAttribute("style", `width: calc(100% / ${size}); border-style: solid; border-width: 1px; box-sizing: border-box; opacity: 0.0`);
        gridcontainer.appendChild(gridsquare);
    }

    const grids = document.querySelectorAll(".gridsquare");

    grids.forEach((square) => {
        // and for each one we add a 'click' listener
        //square.setAttribute("style", `width: calc(100% / ${size})`);
        square.addEventListener("mouseover", function (e) {

            let thissquare = e.target;
            thissquare.style.backgroundColor = `${getRandomColor()}`;
            if(thissquare.style.opacity < 1.0) {
                thissquare.style.opacity = `${(Number(thissquare.style.opacity) + 0.1)}`
            }
        });
    });

    
}

generateGrid(16);

setsizebutton.addEventListener("click", setgridsize);

