let tab1 = ["Amir","Aziz","12","Rayen","15"];
function afficher1(){
    document.getElementById("p1").value=tab1[0]
    document.getElementById("p2").value=tab1[1]
    document.getElementById("p3").value=tab1[2]
    document.getElementById("p4").value=tab1[3]
    document.getElementById("p5").value=tab1[4]
}
function afficher2(){
alert(tab1.length)
}
function afficher3(){
    for(let i=0;i<tab1.length;i++){
        alert("hello "+tab1[i])
    }
}
function afficher4(){
    for(let i=0;i<tab1.length;i++){
        if(isNaN(tab1[i])){
        alert("hello "+tab1[i])}
    }
}
function mf1() {
    let n = prompt("taille de tab");
    let tab2 = new Array(n);
    for (let i = 0; i < n; i++) {
      tab2[i] = prompt("donner l'element " + String(i));
    }
    for (let i = 0; i < n; i++) {
      alert(tab2[i]);
    }
  }