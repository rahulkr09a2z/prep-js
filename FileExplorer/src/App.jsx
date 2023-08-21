import { useState } from "react";
import "./App.css";
import Explorer from "./components/Explorer";
import { ExplorerActions } from "./constants/ActionTypes";
import {
  ExplorerList,
  NewFolderObj,
  NewFileObj,
} from "./constants/Explorerdata";

function App() {
  const [listData, setListData] = useState([...ExplorerList]);

  const FolderHandler = (action) => {
    let newData = [...listData];

    return function (path) {
      let current = newData;
      // Traverse the newData using the path to find the item to update
      for (let i = 0; i < path.length - 1; i++)
        current = current[path[i]].subItems;

      let currElCopy = { ...current[path[path.length - 1]] };
      switch (action) {
        case ExplorerActions.TOGGLE_OPEN:
          current[path[path.length - 1]].isOpened = !currElCopy.isOpened;
          break;
        case ExplorerActions.CREATE_FOLDER:
          current[path[path.length - 1]] = {
            ...currElCopy,
            isOpened: true,
            subItems: [...currElCopy.subItems, { ...NewFolderObj }],
          };
          break;
        case ExplorerActions.CREATE_FILE:
          current[path[path.length - 1]] = {
            ...currElCopy,
            isOpened: true,
            subItems: [...currElCopy.subItems, { ...NewFileObj }],
          };
          break;
        default:
          break;
      }
      setListData(newData);
    };
  };
  const FolderToggler = FolderHandler(ExplorerActions.TOGGLE_OPEN);
  const FolderCreator = FolderHandler(ExplorerActions.CREATE_FOLDER);
  const FileCreator = FolderHandler(ExplorerActions.CREATE_FILE);

  return (
    <div className="app">
      <Explorer
        classTitle={"explorer-container"}
        data={listData}
        folderToggler={FolderToggler}
        folderCreator={FolderCreator}
        fileCreator={FileCreator}
        key={"outter-explorer"}
      />
    </div>
  );
}

export default App;
