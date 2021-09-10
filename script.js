

function share_function(){
    if(this.document.getElementById("btn").className =="bloc-prim__description__share--active"){
        this.document.getElementById("btn").className ="bloc-prim__description__share--disable";
        this.document.getElementById("social").style.display = "none";
    }
    else{
        this.document.getElementById("btn").className ="bloc-prim__description__share--active";
        this.document.getElementById("social").style.display = "inline-flex";
    }
}