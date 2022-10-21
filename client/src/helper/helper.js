import { useNavigate } from "react-router-dom";

export const withNavigate = (Component) => {
  return (props) => {
      const navigation = useNavigate();

      return <Component navigation={navigation} {...props} />
  }
}