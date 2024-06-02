import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./SignIn.css";

const SignIn = ({ className = "" }) => {
  return (
    <div className={`sign-in1 ${className}`}>
      <div className="sign-up-parent">
        <b className="sign-up2">Sign up</b>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="frame-parent">
        <div className="frame-group">
          <div className="your-name-wrapper">
            <div className="your-name">Your Name</div>
          </div>
          <TextField
            className="frame-child"
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className="frame-container">
          <TextField
            className="frame-item"
            placeholder="Address"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="country-parent">
            <div className="country">Country</div>
            <img className="frame-inner" alt="" src="/frame-153.svg" />
          </div>
        </div>
        <div className="frame-div">
          <div className="username-parent">
            <div className="username">Username</div>
            <img className="frame-icon" alt="" src="/frame-153-1.svg" />
          </div>
          <div className="password-parent">
            <div className="password">Password</div>
            <img className="frame-child1" alt="" src="/frame-153-2.svg" />
          </div>
        </div>
        <Button
          className="button1"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#010007",
            borderRadius: "4px",
            "&:hover": { background: "#010007" },
            height: 38,
          }}
        >
          Sign up
        </Button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="frame-parent1">
        <img
          className="frame-child2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="frame-child3"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  className: PropTypes.string,
};

export default SignIn;
