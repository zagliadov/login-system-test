import { useNavigate } from "react-router-dom";

export const withNavigate = (Component) => {
  return (props) => {
    const navigation = useNavigate();

    return <Component navigation={navigation} {...props} />;
  };
};

export const userChangesTab = () => {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come back :(";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
};
