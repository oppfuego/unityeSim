import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FormHeader.css";

const FormHeader = ({ className = "" }) => {
  return (
    <div className={`form-header ${className}`}>
      <b className="checkout2">Checkout</b>
      <TextField
        className="header3"
        placeholder="Billing Details"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "54px",
            backgroundColor: "#312d2d",
            borderRadius: "5px",
            fontSize: "18px",
          },
          "& .MuiInputBase-input": { color: "#fff" },
        }}
      />
      <div className="form-field-block">
        <div className="row-1">
          <TextField
            className="block-1"
            placeholder="First Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
          <TextField
            className="block-2"
            placeholder="Last Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
        </div>
        <div className="row-2">
          <TextField
            className="block-11"
            placeholder="Company Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
          <TextField
            className="block-21"
            placeholder="Country"
            variant="outlined"
            InputProps={{
              endAdornment: <img width="24px" height="24px" src="/icon.svg" />,
            }}
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                paddingRight: "24px",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
        </div>
        <TextField
          className="row-3"
          placeholder="Street Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#545454" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#010007" },
          }}
        />
        <TextField
          className="block-22"
          placeholder="Apartment / Suite / Unit / etc. (Optional)"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#545454" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#010007" },
          }}
        />
        <TextField
          className="row-4"
          placeholder="Town / City"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#545454" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#010007" },
          }}
        />
        <TextField
          className="block-23"
          placeholder="Email Address"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#545454" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#010007" },
          }}
        />
        <div className="row-5">
          <TextField
            className="block-12"
            placeholder="ZIP"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
          <TextField
            className="block-24"
            placeholder="Phone"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#545454" },
              "& .MuiInputBase-root": {
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#010007" },
            }}
          />
        </div>
      </div>
      <div className="form-divider" />
      <div className="button-parent">
        <div className="button3">
          <img className="tag-icon" alt="" src="/tag-icon.svg" />
          <b className="button4">Go Back</b>
          <img className="tag-icon1" alt="" src="/tag-icon.svg" />
        </div>
        <Button
          className="button5"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#000",
            borderRadius: "4px",
            "&:hover": { background: "#000" },
            width: 133,
            height: 54,
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};


export default FormHeader;
