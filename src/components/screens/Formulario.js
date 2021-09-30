import React, { useEffect, useState } from "react";

export const Formulario = (props) => {
  const initialFieldValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    cedula: "",
    state: "",
    info: "",
    message: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInpuntChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <div className="containerfor">
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="well form-horizontal"
        action=" "
        //method="post"
        //id="contact_form"
      >
        <fieldset>
          {/*-- Form Name --*/}
          <legend>Contact Us Today!</legend>

          {/*-- Text input--*/}

          <div className="form-group">
            <label className="col-md-5 control-label">Nombre</label>

            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  value={values.first_name}
                  onChange={handleInpuntChange}
                  required="value1"
                  name="first_name"
                  placeholder="Nombres"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/*-- Text input--*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">Apellidos</label>
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  value={values.last_name}
                  onChange={handleInpuntChange}
                  required="value2"
                  name="last_name"
                  placeholder="Apellidos"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/*-- Text input--*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">E-Mail</label>
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  value={values.email}
                  onChange={handleInpuntChange}
                  required="value3"
                  name="email"
                  placeholder="E-Mail Address"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/*-- Text input--*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">Phone #</label>
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-earphone"></i>
                </span>
                <input
                  value={values.phone}
                  onChange={handleInpuntChange}
                  required="value4"
                  name="phone"
                  placeholder="(300)555-1212"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/*-- Text input--*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">CC</label>

            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-home"></i>
                </span>
                <input
                  value={values.cedula}
                  onChange={handleInpuntChange}
                  required="value5"
                  name="cedula"
                  placeholder="CC"
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/*-- Select Basic --*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">Municipio</label>
            <div className="col-md-12 selectContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-list"></i>
                </span>
                <select
                  value={values.state}
                  onChange={handleInpuntChange}
                  required="value6"
                  name="state"
                  className="form-control selectpicker"
                >
                  <option value=" ">Por favor seleccione municipio</option>
                  <option>Bucaramanga</option>
                  <option>Floridablanca</option>
                  <option>Giron</option>
                  <option>Piedecuesta</option>
                  <option>Rionegro</option>
                  <option>Zapatoca</option>
                  <option>San vicente chucuri</option>
                  <option>Sabana de Torres</option>
                  <option>Barrancabermeja</option>
                  <option>Sangil</option>
                  <option>Curiti</option>
                  <option>Socorro</option>
                  <option>Barichara</option>
                  <option>Betulia</option>
                  <option>Cimitarra</option>
                  <option>Concepcion</option>
                  <option>Cerrito</option>
                  <option>Guadalupe</option>
                  <option>Los Santos</option>
                  <option>Matanza</option>
                  <option>Mogotes</option>
                  <option>Pinchote</option>
                  <option>Puente Nacional</option>
                  <option>Surata</option>
                  <option>Villa Nueva</option>
                  <option>Velez</option>
                </select>
              </div>
            </div>
          </div>

          <br />

          <div className="form-group">
            <label className="col-md-5 control-label">
              Como se entero de nosotros?
            </label>
            <div className="col-md-12 selectContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-list"></i>
                </span>
                <select
                  value={values.name}
                  onChange={handleInpuntChange}
                  required="value6"
                  name="info"
                  className="form-control selectpicker"
                >
                  <option value=" ">Por favor elija una opcion</option>
                  <option>Redes Sociales</option>
                  <option>Pagina Web</option>
                  <option>Radio</option>
                  <option>Publicidad en calle</option>
                  <option>Amigos</option>
                  <option>Familiar</option>
                </select>
              </div>
            </div>
          </div>

          {/*-- Text area --*/}
          <br />
          <div className="form-group">
            <label className="col-md-5 control-label">Comentarios</label>
            <div className="col-md-12 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-pencil"></i>
                </span>
                <textarea
                  value={values.message}
                  onChange={handleInpuntChange}
                  required="value6"
                  className="form-control"
                  name="message"
                  placeholder="Text"
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          {/*-- Success message --*/}
          <div
            className="alert alert-success"
            role="alert"
            id="success_message"
          >
            Gracias <i className="glyphicon glyphicon-thumbs-up"></i>
            Te contactaremos pronto.
          </div>

          {/*-- Button --*/}
          <div className="form-group">
            <div className="col-md-4">
              <input
                type="submit"
                value={props.currentId == "" ? "Enviar" : ""}
                className="btn btn-warning"
              ></input>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
