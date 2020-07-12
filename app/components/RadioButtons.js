import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";

// firstRadio
const FirstRadio = withStyles({
  root: {
    color: "#00E4FF",
    "&$checked": {
      color: "#00E4FF"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

//secondRadio
const SecondRadio = withStyles({
  root: {
    color: "#00FFA6",
    "&$checked": {
      color: "#00FFA6"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);
//third Radio
const ThirdRadio = withStyles({
  root: {
    color: '#3EFF00',
    "&$checked": {
      color: '#3EFF00'
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const FourthRadio = withStyles({
  root: {
    color: '#FFFB00',
    "&$checked": {
      color: '#FFFB00',
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const FifthRadio = withStyles({
  root: {
    color: '#FFAE00',
    "&$checked": {
      color: '#FFAE00'
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const SixthRadio = withStyles({
  root: {
    color: '#FF6100',
    "&$checked": {
      color: '#FF6100'
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);


export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
        <FirstRadio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          inputProps={{ "aria-label": "A" }}
          size="small"
        />
        <SecondRadio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          inputProps={{ "aria-label": "B" }}
          size="small"
        />
        <ThirdRadio
          checked={selectedValue === "c"}
          onChange={handleChange}
          value="c"
          inputProps={{ "aria-label": "C" }}
          size="small"
        />
        <FourthRadio
          checked={selectedValue === "d"}
          onChange={handleChange}
          value="d"
          inputProps={{ "aria-label": "D" }}
          size="small"
        />
        <FifthRadio
          checked={selectedValue === "e"}
          onChange={handleChange}
          value="e"
          inputProps={{ "aria-label": "E" }}
          size="small"
        />
        <SixthRadio
          checked={selectedValue === "f"}
          onChange={handleChange}
          value="f"
          inputProps={{ "aria-label": "F" }}
          size="small"
        />
        
    </div>
  );
}
