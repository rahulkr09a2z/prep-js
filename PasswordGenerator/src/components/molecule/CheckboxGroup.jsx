import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CheckboxGroup = (props) => {
  const { data, clickHandler } = props;

  const [checkboxData, setCheckboxData] = useState([]);

  useEffect(() => {
    setCheckboxData([...data]);
  }, [data]);

  return (
    <div className="checkbox-group">
      {checkboxData &&
        checkboxData.map(({ title }, index) => (
          <div key={title} className="checkbox-item">
            <input
              type="checkbox"
              name={title}
              value={title}
              onChange={() => clickHandler(index)}
            />
            <span>{title}</span>
          </div>
        ))}
    </div>
  );
};

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  data: PropTypes.array.isRequired,
  clickHandler: PropTypes.shape({
    propTypes: {
      arg: PropTypes.string.isRequired,
      return: PropTypes.string.isRequired,
    },
  }),
};
