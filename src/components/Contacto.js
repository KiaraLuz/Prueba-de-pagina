import React from 'react'

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <p>Puedes contactarme por: </p>
      <a href="https://www.facebook.com/profile.php?id=100015179730118" target="_blank">
        <i class="ri-facebook-circle-line"> Carmen Perez</i>
      </a>

      <br />

      <a href="https://www.facebook.com/Arte-Diseño-101416782543773/" target="_blank">
        <i class="ri-facebook-circle-line"> Arte & Diseño</i>
      </a>

      <br />

      <a href="https://api.whatsapp.com/send/?phone=%2B51930245373&text&app_absent=0" target="_blank" class="button button__small button__gray">
        <i class="ri-whatsapp-line"> +51 930 245 373</i>
      </a>

      <br />

      <a href="https://www.instagram.com/cape_75/" target="_blank">
        <i class="ri-instagram-line"> Carmen Pérez Quispe</i>
      </a>

      <br />

      <p>O enviame un correo</p>
      <form className="contact" action="https://formsubmit.co/fernandezperezkiara@gmail.com" method="POST">
        <input type="text" placeholder="Nombres" name="Nombres" required/>
        <input type="text" placeholder="Apellidos" name="Apellidos" required/>
        <input type="text" placeholder="Email" name="Email"  required/>
        <textarea placeholder="Motivo de contacto" name="Motivo" required/>
        <input type="Submit" value="Enviar"/>
      </form>
    </div>
  )
}
