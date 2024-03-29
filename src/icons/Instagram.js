import React from "react";

function Instagram({ onclick }) {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVR4nO2Z327TMBTGMxC8BthMApWNm8HDAA8AiIeYZKsS29RupQOJW3Y3eAAQMMTYA0yiZdO4hcXbRQtLitKFxeg4MhJb/vgkadNJ+SRLTdrY52ef81l1LKtSpUqVzoXsa+ymTXlTEN6xCTsSlMtiG/stKNsRhLVgrMIC79TmLwvK2zZlf4oPmkc2NRZhLTn34lLu4G3K3o0rcHEW5G0uCEHZalnBCw1B2HLW4GfHmTYiFoD7P67Ub2QA4O2kjg/vNKW7+ln6XSGDwbHECp7xu7bq4/B2Iy2VlrIA7MZ1+PPxaxm4Q3TQsTCOJ/uPXiUA8O0sAIO44GUQDuy935O9uy/lwcwTdGrAM717a9L7sBd2dhLEQtiU91HBS2v9Ylza6Jl3ljYKy3On8TFciSMvMp2gFgsBgHzVM583aPf5lqoD99mWutYr4T7dHB2A/1WoQSBt8gIEg3AlA3eornv319Q1FPbIAPSgBzMLxu4U5zYw88FgqO6rmphd+A/oVA2cIAHmL0QFp5XVndLcRqsUgDh3wrhNaQCm7pTmNqUBYNwpyW20Ioo4QALIKQwAxp2S3KY0ABN30i3JbcoDcBEAtxb/OZKYFADwfBC4jWkKHXfMU0hQLi2sUEXc3lT3oUBTi3jjm/qt2/o0OQBgiZASILBKIxuda0wOADTYnGCT0isBqQI1AQ0+65lXG9mD9cg+SgXQEDC7cYLv+g+jgxfjADBxG0gN2KSgSMFe4Rn4DPei0kYYuJOCs+QUCgCsK4/bYFsvwZ0KA8C4DbZ5Ce5UGICp22Cbk+JO2QAI/4VxG2zQGHeyCXcsrARhX7K6DVZBijsJwrpoAJuyRtIMnnYbdNCG7iTC/wNNNMD+dL02KUeL+9P1GhpArQLhK+f2cBcER9twxF1a8JS/yf2OQEEQvjLWFxyE+1CDuYM/UxOELcMrJkGZO4LZ7sMhriB88ftVdr2wwCtVqlTJGqX+AphBBHSWwTz3AAAAAElFTkSuQmCC"
      alt="instagram"
      style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
      }}
      // onClick={onclick}
    />
  );
}

export default Instagram;
