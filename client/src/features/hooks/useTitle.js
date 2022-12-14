import React from "react";

export const useTitle = (newTitle) => {
  const [title] = React.useState(document.title);

  React.useEffect(() => {
    return () => {
      window.addEventListener("blur", () => {
        document.title = newTitle;
      });
      window.addEventListener("focus", () => {
        document.title = title;
      });
    };
  }, [newTitle, title]);
};
