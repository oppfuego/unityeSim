import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "", frame1000006755, food }) => {
  return (
    <div className={`frame-parent4 ${className}`}>
      <img
        className="frame-child"
        loading="lazy"
        alt=""
        src={frame1000006755}
      />
      <div className="food-parent">
        <b className="food">{food}</b>
        <div className="discount-20-off">Discount: 20% OFF</div>
      </div>
      <div className="parent1">
        <b className="b">$120.00</b>
        <b className="credits">12 Credits</b>
      </div>
      <div className="frame-parent5">
        <TextField
          className="wrapper"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "8px", marginRight: "28px" }}
              >
                <img width="16px" height="16px" src="/iconplus.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "8px" }}>
                <img width="16px" height="16px" src="/iconminus.svg" />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderColor: "#312d2d",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#312d2d",
            borderRadius: "8px",
            width: "54.63414634146342%",
            height: "40px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              fontFamily: "Almarai",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>3</MenuItem>
        </TextField>
        <div className="hourly-parent">
          <div className="hourly">Hourly</div>
          <div className="frame-wrapper20">
            <img className="frame-item" alt="" src="/frame-1000002972.svg" />
          </div>
        </div>
      </div>
      <b className="b1">$120.00</b>
    </div>
  );
};


export default FrameComponent5;
