import PropTypes from "prop-types";

import Folder from "./Folder";
import File from "./File";

const Explorer = ({
  key,
  data,
  classTitle,
  folderCreator,
  fileCreator,
  path = [],
}) => {
  return (
    <div className={classTitle} key={key}>
      {data &&
        data.map((item, index) => {
          return (
            <div className="item-container" key={item.itemName}>
              {item.isFolder ? (
                <Folder
                  item={item}
                  path={[...path, index]}
                  folderCreator={folderCreator}
                  fileCreator={fileCreator}
                />
              ) : (
                <File item={item} />
              )}
            </div>
          );
        })}
    </div>
  );
};

Explorer.propTypes = {
  key: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  folderCreator: PropTypes.func.isRequired,
  fileCreator: PropTypes.func.isRequired,
  classTitle: PropTypes.string,
  path: PropTypes.array,
};
export default Explorer;
