import PropTypes from "prop-types";

import Folder from "./Folder";

const Explorer = ({
  data,
  classTitle,
  folderCreator,
  fileCreator,
  deleteHandler,
  path = [],
}) => {
  return (
    <div className={classTitle} key={classTitle}>
      {data &&
        data.map((item, index) => {
          if (item)
            return (
              <div className="item-container" key={item?.itemName}>
                <Folder
                  item={item}
                  path={[...path, index]}
                  folderCreator={folderCreator}
                  fileCreator={fileCreator}
                  deleteHandler={deleteHandler}
                />
              </div>
            );
        })}
    </div>
  );
};

Explorer.propTypes = {
  data: PropTypes.array.isRequired,
  folderCreator: PropTypes.func.isRequired,
  fileCreator: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  classTitle: PropTypes.string,
  path: PropTypes.array,
};
export default Explorer;
