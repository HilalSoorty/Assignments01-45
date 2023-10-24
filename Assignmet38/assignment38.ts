function make_album(artistname:string,trackname:string,albumname:number){

    let album={
               artistname,
               trackname,
               albumname
    };
   
return album;

}

let album1=make_album("Atif Aslam","Aadat",2);

let album2=make_album("ALi Zafar","Chaldil mery",4);

let album3=make_album("Ali Azmat","Jazba junnon",24);
console.log(album1);
console.log(album2);
console.log(album3);