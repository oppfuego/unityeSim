import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import "./Coverage.css";
import Header from '../components/header/Header';

const Coverage = () => {
  return (
      <>
      <Header />
        <div className="coverage">
        <p className="some-regional-or">
          *Some regional or promo packages can provide coverage only in specific
          regions. Please always refer to the package description for the details.
        </p>
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="list-parent">
          <div className="list2">
            <b className="afghanistan">Afghanistan</b>
            <a className="algeria">Algeria</a>
            <a className="andorra">Andorra</a>
            <a className="argentina">Argentina</a>
            <b className="armenia">Armenia</b>
            <a className="australia">Australia</a>
            <a className="austria">Austria</a>
            <b className="azerbaijan">Azerbaijan</b>
            <b className="bahamas-the">Bahamas (the)</b>
            <b className="bahrain">Bahrain</b>
            <a className="belarus">Belarus</a>
            <b className="belgium">Belgium</b>
            <b className="benin">Benin</b>
            <a
                className="bosnia-and-herzegovina"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-8444"
                target="_blank"
            >
              Bosnia and Herzegovina
            </a>
            <b className="brunei-darussalam">Brunei Darussalam</b>
            <b className="bulgaria">Bulgaria</b>
            <b className="burkina-faso">Burkina Faso</b>
            <b className="cabo-verde">Cabo Verde</b>
            <b className="cambodia">Cambodia</b>
            <b className="cameroon">Cameroon</b>
            <b className="canada">Canada</b>
            <b className="chile">Chile</b>
            <b className="china">China</b>
            <b className="costa-rica">Costa Rica</b>
            <b className="croatia">Croatia</b>
            <b className="curaao">Curaçao</b>
            <b className="cyprus">Cyprus</b>
            <b className="czechia">Czechia</b>
            <b className="denmark">Denmark</b>
            <a
                className="dominican-republic-the"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-8444"
                target="_blank"
            >
              Dominican Republic (the)
            </a>
            <b className="egypt">Egypt</b>
            <b className="estonia">Estonia</b>
            <a
                className="faroe-islands-the"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-8444"
                target="_blank"
            >
              Faroe Islands (the)
            </a>
            <b className="finland">Finland</b>
            <b className="france">France</b>
            <b className="french-guiana">French Guiana</b>
            <b className="gambia-the">Gambia (the)</b>
            <b className="georgia">Georgia</b>
            <b className="germany">Germany</b>
          </div>
          <div className="frame-container">
            <FrameComponent1 />
          </div>
        </div>
      </div>
      </>
  );
};

export default Coverage;
