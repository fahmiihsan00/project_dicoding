// Manipulasi warna tema halaman dan tulisan pada tag body.
// menggunakan toggle
function myFunction() {
   
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    //Manipulasi tulisan pada teks button
    const mode = document.getElementById('btn');
    if(mode.innerHTML == 'Dark Mode'){
        mode.innerHTML = 'Light Mode';      
    }
    else{
        mode.innerHTML = 'Dark Mode';
    }
    
}

