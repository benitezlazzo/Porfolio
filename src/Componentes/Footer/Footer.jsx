import React from 'react';

const Footer = () => {
    return <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a >
                        <img src="https://res.cloudinary.com/dbq0h1f5w/image/upload/v1685396701/Captura_de_pantalla_2023-05-29_184233_xto9f6.png" alt="certificado" class='imgreact' /></a>
                </figure>
            </div>
            <div class="box">
                <h2>CONTACTO</h2>
                <div class="red-social">
                    <a href="https://t.me/juan_ignacio33" class="fa fa-telegram" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://api.whatsapp.com/send/?phone=541132048637&text&type=phone_number&app_absent=0" class="fa fa-whatsapp" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.facebook.com/profile.php?id=100085430536728" class="fa fa-facebook" target="_blank" rel="noopener noreferrer" ></a>
                    <a href="https://www.linkedin.com/in/juan-ignacio-benitez-lazzo-31b0b6245/" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy;2023 <b>Slee Dw</b> - Todos los derechos Reservados. </small>
        </div>
    </footer>;
};

export default Footer; 