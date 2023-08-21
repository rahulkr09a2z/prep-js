import PropTypes from "prop-types";

import Folder from "./Folder";

const Explorer = ({
  data,
  classTitle,
  folderCreator,
  fileCreator,
  path = [],
}) => {
  return (
    <div className={classTitle} key={classTitle}>
      {data &&
        data.map((item, index) => {
          return (
            <div className="item-container" key={item.itemName}>
              <Folder
                item={item}
                path={[...path, index]}
                folderCreator={folderCreator}
                fileCreator={fileCreator}
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
  classTitle: PropTypes.string,
  path: PropTypes.array,
};
export default Explorer;
