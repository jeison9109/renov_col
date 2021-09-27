import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container-footer">
          <div
            className="row"
            style={{ width: "100%", height: "auto", margin: "0px" }}
          >
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/renovemoscol"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://www.twitter.com/Renovemos_Colom"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instragram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-footer">
              <div className="col-md-12">
                <p className="copyright-text" style={{ fontStyle: "oblique" }}>
                  Derechos Reservados para Renovemos Colombia Copyright &copy;
                  2021
                  <a href="#"></a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
