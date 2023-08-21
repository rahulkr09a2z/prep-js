import PropTypes from "prop-types";
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from "react-icons/ai";

import Explorer from "./Explorer";
import { FOLDER_ICON_SIZE } from "../constants/IconSizes";


const Folder = (FolderProps) => {
  const {
    item,
    folderToggler,
    folderCreator,
    fileCreator,
    path = [],
  } = FolderProps;
  const { itemName, isOpened, subItems } = item;

  const openHandler = () => folderToggler(path);
  const folderCreateHandler = () => folderCreator(path);
  const fileCreatorHandler = () => fileCreator(path);

  return (
    <>
      <div className="folder item-padding">
        <div className="folder-left el-cont" onClick={openHandler}>
          {isOpened ? (
            <AiFillFolderOpen size={FOLDER_ICON_SIZE} />
          ) : (
            <AiFillFolder size={FOLDER_ICON_SIZE} />
          )}
          <h3>{itemName}</h3>
        </div>
        <div className="folder-right el-cont">
          <AiOutlineFolderAdd
            className="create-icon"
            size={FOLDER_ICON_SIZE}
            onClick={folderCreateHandler}
          />
          <AiOutlineFileAdd
            className="create-icon"
            size={FOLDER_ICON_SIZE}
            onClick={fileCreatorHandler}
          />
        </div>
      </div>
      {isOpened && (
        <Explorer
          key={`subfolder-${itemName}`}
          data={subItems}
          folderToggler={folderToggler}
          folderCreator={folderCreator}
          fileCreator={fileCreator}
          path={path}
        />
      )}
    </>
  );
};

Folder.propTypes = {
  item: PropTypes.object.isRequired,
  folderToggler: PropTypes.func.isRequired,
  folderCreator: PropTypes.func.isRequired,
  fileCreator: PropTypes.func.isRequired,
  path: PropTypes.array,
};

export default Folder;
