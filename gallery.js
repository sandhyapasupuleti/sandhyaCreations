function colOfImg(){

    var allImgTag=document.images;
    for(i=0;i<allImgTag.length;i++)
    {

        allImgTag[i].src=`${i}.jpg`
    }
}

colOfImg();

function bigWindow(imgUrl){
    document.getElementById("imgContainer").style.backgroundImage=`url(${imgUrl})`
}
