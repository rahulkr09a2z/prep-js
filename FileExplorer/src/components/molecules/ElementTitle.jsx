import PropTypes from "prop-types";
import { AiFillFile, AiFillFolder, AiFillFolderOpen } from "react-icons/ai";

import { FILE_ICON_SIZE, FOLDER_ICON_SIZE } from "../../constants/IconSizes";

const ElementTitle = (FileProps) => {
  const {
    title,
    isFolder,
    isOpened,
    inputBlurHandler,
    isEditMode,
    renameHandler,
    clickHandler,
  } = FileProps;

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
      {isEditMode ? (
        <input
          type="text"
          onKeyDown={renameHandler}
          autoFocus
          onBlur={inputBlurHandler}
        />
      ) : (
        <div className="el-title-text">
          {isFolder ? <h3>{title}</h3> : <h4>{title}</h4>}
        </div>
      )}
    </div>
  );
};

ElementTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFolder: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  renameHandler: PropTypes.func.isRequired,
  inputBlurHandler: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ElementTitle;
