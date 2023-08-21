import PropTypes from "prop-types";
import {
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
  AiOutlineDelete,
} from "react-icons/ai";

import { FOLDER_ICON_SIZE } from "../../constants/IconSizes";

const ElementIconGroup = (ElIconGroupProps) => {
  const { isFolder, folderCreateHandler, fileCreateHandler, deleteHandler } =
    ElIconGroupProps;
  return (
    <div className="folder-right el-cont">
      <AiOutlineDelete
        className="side-icon"
        size={FOLDER_ICON_SIZE}
        onClick={deleteHandler}
      />
      {isFolder && (
        <>
          <AiOutlineFolderAdd
            className="side-icon"
            size={FOLDER_ICON_SIZE}
            onClick={folderCreateHandler}
          />
          <AiOutlineFileAdd
            className="side-icon"
            size={FOLDER_ICON_SIZE}
            onClick={fileCreateHandler}
          />
        </>
      )}
    </div>
  );
};

ElementIconGroup.propTypes = {
  isFolder: PropTypes.bool.isRequired,
  folderCreateHandler: PropTypes.func.isRequired,
  fileCreateHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default ElementIconGroup;
