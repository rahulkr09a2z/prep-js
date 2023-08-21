import PropTypes from "prop-types";
import { AiFillFile, AiFillFolder, AiFillFolderOpen } from "react-icons/ai";

import { FILE_ICON_SIZE, FOLDER_ICON_SIZE } from "../../constants/IconSizes";

const ElementTitle = (FileProps) => {
  const { title, isFolder, isOpened, clickHandler } = FileProps;
  return (
    <div className="el-title el-cont item-padding" onClick={clickHandler}>
      {isFolder ? (
        <>
          {isOpened ? (
            <AiFillFolderOpen size={FOLDER_ICON_SIZE} />
          ) : (
            <AiFillFolder size={FOLDER_ICON_SIZE} />
          )}
        </>
      ) : (
        <AiFillFile size={FILE_ICON_SIZE} />
      )}
      <div className="el-title-text">
        {isFolder ? <h3>{title}</h3> : <h4>{title}</h4>}
      </div>
    </div>
  );
};

ElementTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFolder: PropTypes.bool.isRequired,
  isOpened: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ElementTitle;
