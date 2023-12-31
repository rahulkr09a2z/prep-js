import { useState } from "react";
import PropTypes from "prop-types";

import ElementTitle from "./molecules/ElementTitle";
import ElementIconGroup from "./molecules/ElementIconGroup";
import NewItemInputBox from "./molecules/NewItemInputBox";
import Explorer from "./Explorer";

const Folder = (FolderProps) => {
  const {
    item,
    folderCreator,
    fileCreator,
    deleteHandler,
    renameHandler,
    path = [],
  } = FolderProps;
  const { itemName, subItems, isFolder } = item;

  const [isOpened, setIsOpened] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });
  const [renameItem, setRenameItem] = useState({
    isVisible: false,
    newName: "",
  });

  const resetInputState = () =>
    setShowInput({
      isVisible: false,
      isFolder: false,
    });
  const renameVisibleHandler = (val) =>
    setRenameItem((prev) => ({
      ...prev,
      isVisible: val,
    }));

  const creatorHandler = (isFolderVal) => {
    setIsOpened(true);
    setShowInput({
      isVisible: true,
      isFolder: isFolderVal,
    });
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

  const renameItemHandler = (e) => {
    e.stopPropagation();
    const keyCode = e.keyCode;
    const inputValue = e.target.value;
    if (keyCode == 13 && inputValue) {
      renameHandler(path, inputValue);
      deActivateRenameState();
    }
  };

  const togglerRenameState = () => renameVisibleHandler(!renameItem.isVisible);
  const deActivateRenameState = () => renameVisibleHandler(false);
  const deleteItemHandler = () => deleteHandler(path, itemName);
  const toggleFolderOpen = () => setIsOpened(!isOpened);
  const folderCreateHandler = () => creatorHandler(true);
  const fileCreateHandler = () => creatorHandler(false);

  return (
    <div className="map-item-cont">
      <div className="single-item-box map-item-padding">
        <ElementTitle
          title={itemName}
          isFolder={isFolder}
          isOpened={isOpened}
          clickHandler={toggleFolderOpen}
          isEditMode={renameItem.isVisible}
          inputBlurHandler={deActivateRenameState}
          renameHandler={renameItemHandler}
        />
        <ElementIconGroup
          isFolder={isFolder}
          deleteHandler={deleteItemHandler}
          folderCreateHandler={folderCreateHandler}
          fileCreateHandler={fileCreateHandler}
          renameActivator={togglerRenameState}
        />
      </div>
      {isOpened && (
        <Explorer
          classTitle={`subfolder-${itemName}`}
          data={subItems}
          folderCreator={folderCreator}
          fileCreator={fileCreator}
          deleteHandler={deleteItemHandler}
          renameHandler={renameItemHandler}
          path={path}
        />
      )}
      <NewItemInputBox
        isVisible={showInput.isVisible}
        isFolder={showInput.isFolder}
        handleNewItem={handleNewItem}
        resetInputState={resetInputState}
      />
    </div>
  );
};

Folder.propTypes = {
  item: PropTypes.object.isRequired,
  folderCreator: PropTypes.func.isRequired,
  fileCreator: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  renameHandler: PropTypes.func.isRequired,
  path: PropTypes.array,
};

export default Folder;
