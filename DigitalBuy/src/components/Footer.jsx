import React from "react";
import '../Styles/Footer.css'
export function Footer () {
  return (
    <footer>
    <div className="container-fluid barra">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-end">
            <p>
              <img
                className="redes"
                src={"img/facebook.svg"}
                alt="Facebook"
                width={40}
              />
              <img
                className="redes"
                src={"img/instagram.svg"}
                alt="Instagram"
                width={40}
              />
              <img
                className="redes"
                src={"img/whatsapp.svg"}
                alt="Whatsapp"
                width={40}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

