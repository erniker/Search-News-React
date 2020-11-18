import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sport", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  // using custom hook
  const [category, SelectNews] = useSelect("general", OPTIONS);

  //submit al Form, pass category to a app.js
  const searchNews = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}> Encuentra Noticias por Categoría </h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Form;
