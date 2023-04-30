// const info = document.querySelector(".contenedor .info"); // <div class="info"></div>

// const items = document.getElementsByClassName("contenedor.header").innerHTML = ´

/* -----------------------------HEADER-------------------------------- */

const header = document.getElementsByClassName('header')[0].innerHTML = `
<div class="header-logo"><a href="index.html"><img src="imagenes/milogo4_2_x50.png" alt=""></a></div>
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>  


<div><nav class="header-menubar"> 
    <ul>
        <li><a href="index.html">INICIO</a></li>
        <li><a href="Donar.html">DONAR</a></li>
        <li><a href="Contacto.html">CONTACTO</a></li>
        <li><a href="Adoptar.html">ADOPTAR</a></li>
        
    </ul>
</div></nav>
`
/* --------------------------------FOOTER ------------------------------------ */
const footer = document.getElementsByClassName('footer')[0].innerHTML = `
<div> <a href="https://www.instagram.com/sosfelinostucu/" target="_blank"><i class="fa-brands fa-instagram"></i>¡Seguinos en Instagram!</a></div>
<div><a href="https://www.facebook.com/sosfelinos/" target="_blank"><i class="fa-brands fa-facebook"></i> ¡Seguinos en Facebook!</a></div>
<div><a href="https://www.instagram.com/universo.gatto/" target="_blank"><i class="fa-solid fa-cat"></i>¡Mirá nuestra tiendita gatuna solidaria!</a></div>
`