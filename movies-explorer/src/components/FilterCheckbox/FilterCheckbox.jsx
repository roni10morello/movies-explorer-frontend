import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function CheckToggle() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="checkbox">
        <button
          className={`checkbox__button checkbox__button_type_${
            isChecked ? "active" : "no-active"
          }`}
          type="checkbox"
          onClick={CheckToggle}
          name="checkbox"
        />
      <p className="checkbox__filter">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;


