import PropTypes from "prop-types";
import { AiFillFile } from "react-icons/ai";

import { FILE_ICON_SIZE } from "../constants/IconSizes";

const File = (FileProps) => {
  const { item } = FileProps;
  const { itemName } = item;
  return (
    <div className="file el-cont item-padding">
      <AiFillFile size={FILE_ICON_SIZE} />
      <h4>{itemName}</h4>
    </div>
  );
};

File.propTypes = {
  item: PropTypes.object.isRequired,
};

export default File;
