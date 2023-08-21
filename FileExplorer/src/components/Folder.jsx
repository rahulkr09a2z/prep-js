import PropTypes from "prop-types";
import {
  AiFillFile,
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from "react-icons/ai";

import Explorer from "./Explorer";
import { FILE_ICON_SIZE, FOLDER_ICON_SIZE } from "../constants/IconSizes";
import { useState } from "react";

const Folder = (FolderProps) => {
  const { item, folderCreator, fileCreator, path = [] } = FolderProps;
  const { itemName, subItems } = item;

  const [isOpened, setIsOpened] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });

  const resetInputState = () =>
    setShowInput({
      isVisible: false,
      isFolder: false,
    });

  const creatorHandler = (isFolderVal) => {
    setIsOpened(true);
    setShowInput((prev) => ({
      ...prev,
      isVisible: true,
      isFolder: isFolderVal,
    }));
  };

  const handleNewItem = (e) => {
    e.stopPropagation();
    const keyCode = e.keyCode;
    const inputValue = e.target.value;
    if (keyCode == 13 && inputValue) {
      if (showInput.isFolder) folderCreator(path, inputValue);
      else fileCreator(path, inputValue);
      resetInputState();
    }
  };

  const toggleFolderOpen = () => setIsOpened(!isOpened);
  const fileCreateHandler = () => creatorHandler(false);
  const folderCreateHandler = () => creatorHandler(true);

  return (
    <>
      <div className="folder item-padding">
        <div className="folder-left el-cont" onClick={toggleFolderOpen}>
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
            onClick={fileCreateHandler}
          />
        </div>
      </div>
      {isOpened && (
        <Explorer
          key={`subfolder-${itemName}`}
          data={subItems}
          folderCreator={folderCreator}
          fileCreator={fileCreator}
          path={path}
        />
      )}
      {showInput.isVisible && (
        <div className="new-item item-container el-cont">
          {showInput.isFolder ? (
            <AiFillFolder size={FOLDER_ICON_SIZE} />
          ) : (
            <AiFillFile size={FILE_ICON_SIZE} />
          )}
          <input
            type="text"
            onKeyDown={handleNewItem}
            autoFocus
            onBlur={resetInputState}
          />
        </div>
      )}
    </>
  );
};

Folder.propTypes = {
  item: PropTypes.object.isRequired,
  folderCreator: PropTypes.func.isRequired,
  fileCreator: PropTypes.func.isRequired,
  path: PropTypes.array,
};

export default Folder;
