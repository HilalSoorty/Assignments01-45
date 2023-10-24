// Assignment 43 according to github
// function make_great(magician){
//     for(let i = 0; i < magician.length; i++){
//     console.log("The Great",magician[i]);
    
// } 
//     }
//     function show_magicians(magicians){
//         for(let i = 1; i < magicians.length; i++ ){
//             console.log(magicians[i]);
            
//         }
//     }
    
    
//     let magicians_Name = ["Harry", "Ricky", "Doug", "David", "Lance", "David"]
//     make_great(magicians_Name)
//     show_magicians(magicians_Name)



function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

function show_magicians(magicians) {
    for (let i = 1; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let magicians_Name = ["Harry", "Ricky", "Doug", "David", "Lance", "David"];


make_great(magicians_Name);
show_magicians(magicians_Name);
