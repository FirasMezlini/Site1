/*const age=10
alert(age)*/
/*let nom=prompt("donner votre nom")
alert(nom)*/
/*let nom=document.getElementById("nom").style.color="green"*/
/*console.log("bonjour")*/
/*document.write("salut")*/
/*document.getElementById("p1").innerHTML="hello"*/

function col_color(x){
    x.style.background="yellow"
}
function majus(y){
    y.value=y.value.toUpperCase()
}
function color(x,y){
    x.style.color=y
}
function message(){
    alert("vous avez cliqué sur une touche de clavier")
}
function m1(x,y){
    x.innerHTML="vous avez ecrit: " + y.value
}
function age1(){
    let a=document.getElementById("b").value
    if (1<=a && a<=2){
        return("bébé")
    }
    else if (3<=a && a<=11){
        return("enfant")
    }
    else if (12<=a && a<=18){
        return("adolesent")
    }
    else if (19<=a && a<=60){
        return("adulte")
    }
    else{
        return("vieux")
    }
}
function age2(x){
    alert(x)
}
function f11(){
    let a=document.getElementById("p").value
    for (let i = 0; i <= a; i++) {
        alert (i);
      }
    }
function f12(){
    let a=document.getElementById("p").value
    for (let i = 0; i <= a; i++) {
        if (i%2==0){
         alert (i);
      }
    }
}
function f13(){
    let a=prompt("donner un nombre")
    let b=Math.sqrt(a)
    document.getElementById("p2").value=b
}
function f14(){
    let a=prompt("donner un nombre")
    let b=Math.abs(a)
    document.getElementById("p3").value=b
}
function f15(){
    let a=prompt("donner une chaine")
    if (a.length>=8){
        document.getElementById("p4").value=a
    }
}
function f16(){
    let a=prompt("donner un nombre")
    let b=Math.round(a)
    document.getElementById("p5").value=b
    let c=Math.trunc(a)
    document.getElementById("p6").value=c
}
function f17(){
    document.getElementById("p7").value=Math.random()
}

function f18(){
    document.getElementById("p8").value=Math.random() *10
}
let ch1="Systèmes et technologies informatiques"
function f19(){
    let b=ch1.charAt(prompt("donner l'indice"))
    document.getElementById("p9").value=b
}
function f20(){
    let b=ch1.indexOf(prompt("donner une chaine"))
    document.getElementById("p10").value=b
}
function f21(){
    let b=ch1.lastIndexOf(prompt("donner une chaine"))
    document.getElementById("p11").value=b}
function f22(){
    let b=ch1.replace("i","t")
    alert(b)}
function f23(){ 
    let b=ch1.replaceAll("i","t")
    alert(b)}
function f24(){
    let b=ch1.toUpperCase()
    alert(b)
}
function f25(){    
    let ch2=prompt("donner une chaine")
    let b=ch2.toLowerCase()
document.getElementById("p15").value=b}
function f26(){
    let b=ch1.trim()
    alert(b)
}
function f27(){
    let b=ch1.substr(prompt("donner la position"),prompt("donner le longueur"))
    document.getElementById("p17").value=b}
function f28(){
    let b=ch1.charCodeAt(prompt("donner la position"))
    document.getElementById("p18").value=b}
function f29(){
    let text = String.fromCharCode(70, 105, 114, 97, 115);
    document.getElementById("p19").value= text
}
function f30(){
    let a=prompt("donner un nombre")
    if (isNaN(a)){
        alert("n’est pas un nombre")
    }
    else {
        alert(a**2)
    }
}
function f31(){
    let a=prompt("donner une chaine")
    let b=Number(a)
    alert(b/2)
}
function f32(){
    let a=prompt("donner une chaine")
    let b=parseFloat(a)
    alert(b)
}
function f33(){
    let a=prompt("donner une chaine")
    let b=parseInt(a)
    alert(b)
}
function f34(){
    let n=15
    let b=String(n)    
    alert(b)
}
function f35(){
let d=new Date()
alert(d)
}
function f36(){
    let d=new Date()
    let a="La journée "+d.getDate()+" Le mois "+d.getMonth()+" L'année "+d.getFullYear()
    alert(a)
}
function f37(){
    let d=new Date()
    d.setDate(22)
    d.setMonth(5)
    d.setFullYear(2024)
    alert(d)
}
