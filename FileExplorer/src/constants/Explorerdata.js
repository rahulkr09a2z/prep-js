export const NewFolderObj = {
  itemName: "New_Folder",
  isFolder: true,
  isOpened: false,
  subItems: [],
};
export const NewFileObj = {
  itemName: "New_File",
  isFolder: false,
};

export const ExplorerList = [
  {
    ...NewFolderObj,
    itemName: "node_modules",
  },
  {
    ...NewFolderObj,
    itemName: "public",
    subItems: [
      {
        ...NewFileObj,
        ...NewFileObj,
        itemName: "vite.svg",
      },
    ],
  },
  {
    ...NewFolderObj,
    itemName: "src",
    subItems: [
      {
        ...NewFolderObj,
        itemName: "assets",
        subItems: [
          {
            ...NewFileObj,
            itemName: "react.svg",
          },
        ],
      },
      {
        ...NewFolderObj,
        itemName: "components",
        subItems: [
          {
            ...NewFileObj,
            itemName: "react.svg",
          },
        ],
      },
      {
        ...NewFileObj,
        itemName: "App.css",
      },
      {
        ...NewFileObj,
        itemName: "App.jsx",
      },
      {
        ...NewFileObj,
        itemName: "main.jsx",
      },
    ],
  },
  {
    ...NewFileObj,
    itemName: ".eslintrc.cjs",
  },
  {
    ...NewFileObj,
    itemName: ".gitignore",
  },
  {
    ...NewFileObj,
    itemName: "index.html",
  },
  {
    ...NewFileObj,
    itemName: "package.json",
  },
  {
    ...NewFileObj,
    itemName: "README.md",
  },
  {
    ...NewFileObj,
    itemName: "vite.config.js",
  },
  {
    ...NewFileObj,
    itemName: "yarn.lock",
  },
];
