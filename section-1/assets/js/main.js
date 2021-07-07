function addPlaylist(){
    var x = document.forms["formList"]["title"].value
    if (x == "" || x == null){
        alert("Form must be filled out");
    }else {
        alert("The form was submitted");
    }
}
