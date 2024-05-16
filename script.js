document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
    this.style.display = 'none'; // Dölj play-knappen när videon startar
});

let button = document.querySelector('.hamburger');
    // Add onclick event to the button
    button.onclick = function () {
        toggleMenu();
    };

    function toggleMenu() {
        var menu = document.querySelector(".menu2");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }

    function changeReadMore() {
        const mycontent = document.getElementById('mybox1id');
        const mybutton = document.getElementById('mybuttonid');
    
        if (mycontent.style.display === 'none' || mycontent.style.display === '') {
            mycontent.style.display = 'block'; // Ändra till block istället för inline
            mybutton.textContent = 'Läs mindre';
        } else {
            mycontent.style.display = 'none';
            mybutton.textContent = 'Läs mer';
        }
    }

    function showSizeDialog(productName) {
        const dialog = document.getElementById('sizeDialog');
        dialog.showModal();
        // Javascript för att kunna välja storlekarna 
    }
    
    function addToCartAndClose() {
        const dialog = document.getElementById('sizeDialog');
        dialog.close();
        alert("Produkten har lagts till i kundvagnen.");
    } // Få upp en ruta att produkten ät lagd i varukorgen