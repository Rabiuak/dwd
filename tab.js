function openCourse(evt,courseName){
//declaration of variables
var i,tabContent,tablinks;
tabContent =document.getElementsByClassName("tabContent");
for (i =0;i < tabContent.length; i++){
    tabContent[i].style.display="none";
}
tablinks =document.getElementsByClassName("tablinks");
for (i=0;i < tablinks.length; i++){
    tablinks[i].className=tablinks[i].className.replace("active"," ");
}
document.getElementById(courseName).style.display="block";
document.getElementById("default").style.display="none";
evt.currentTarget.className +="active";

}