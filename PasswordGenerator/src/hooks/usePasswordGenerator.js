import { useState } from "react";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, pswdLength) => {
    let charSet = "",
      generatedPassword = "";

    setErrorMessage("");

    const selectedOption = checkboxData.filter((el) => el.isSelected);
    if (selectedOption.length === 0) {
      setErrorMessage("Select at least 1 box");
      setPassword("");
      return;
    }
    selectedOption &&
      selectedOption.forEach(({ title }) => {
        switch (title) {
          case "Include Uppercase Letters":
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "Include Lowercase Letters":
            charSet += "abcdefghijklmnopqrstuvwxyz";
            break;
          case "Include Numbers":
            charSet += "1234567890";
            break;
          case "Include Symbols":
            charSet += "!@#$%^&*()-_=+{}[]|:;<,>.?/~";
            break;
          default:
            break;
        }
      });
    for (let i = 0; i < pswdLength; i++)
      generatedPassword += charSet[Math.floor(Math.random() * charSet.length)];
    setPassword(generatedPassword);
  };
  return { password, errorMessage, generatePassword };
};
