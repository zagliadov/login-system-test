import { Component } from "react";
import { connect } from "react-redux";
import { withNavigate } from "../../helper/helper";
import { verifyToken } from "../../features/counter/authSlice";

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: null,
    };
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.verifyToken(localStorage.getItem("token"));
    };
  };

  componentWillUnmount() {
    if (localStorage.getItem("token")) {
      this.props.verifyToken(localStorage.getItem("token"));
    } else {
      this.props.navigation("/");
    };
  }

  render() {
    return (
      <div className="flex flex-col border items-center pt-5 text-xl">
        <h3>Private route</h3>
        <div className="pt-8">
          <p>Hello {this.props?.user?.email}</p>
        </div>
      </div>
    )
  }

};
function mapStateToProps(state) {
  return {
    token: state.counter.token,
    message: state.counter.message,
    user: state.counter.user,
  };
};
export default withNavigate(connect(mapStateToProps, { verifyToken })(Private));
