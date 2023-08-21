import PropTypes from "prop-types";
import { AiFillFile, AiFillFolder } from "react-icons/ai";

import { FILE_ICON_SIZE, FOLDER_ICON_SIZE } from "../../constants/IconSizes";

const NewItemInputBox = (InputBoxProps) => {
  const { isVisible, isFolder, handleNewItem, resetInputState } = InputBoxProps;
  if (isVisible)
    return (
      <div className="new-item input-container el-cont">
        {isFolder ? (
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
    );
};

NewItemInputBox.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isFolder: PropTypes.bool.isRequired,
  handleNewItem: PropTypes.func.isRequired,
  resetInputState: PropTypes.func.isRequired,
};

export default NewItemInputBox;
