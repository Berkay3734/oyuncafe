import React from "react";

function PauseIcon({ click }) {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2aS0oDQRCGv5XRhRLB104PI4qg6FLNGUTxFhoXioK49Qhq0NwgiGvNa2XiRtS1GrFkoAQJ80jmkeke/OGHgUyK+uienq7qgX9lV+PAGlAESkAVeAM+1M71g/7m3LMK5DFEOaAAlIEvQPq0859rYFNjDVwjwC7wFCJ5L7eBHWB4UBBLQDNGgG43gMUkAZyhP0oQoNvnOvKxahq4GyCEqG+Bqbgg5nS4JSXXNYdImtRlVFJ2E5gJCzGc0nQSn2kWaok+NSB56fJxmCVWDPVCrxDO8NUMSFg83Oj1pblrQLIS4O1eRqNtQKIS4FbQg18IGdhNcdwrPt7wAylbBFLyqye+LALpAGNuwdYizNk0QARYdgt2YCHIvluwkoUgF27B6haCVN2CvVoI8uwW7MNCkPdMg7xmZWrVLAR5yPTyW7QQZC/TW5S8ZZvGT69No6Mbi0Cu8NGmRSDrWSl1hwjQjgGJSoC3giB+R8WENql4uN5Px3HRgITFxd/APH3qxIDEpcuHhFBOG8diiCu9POBemjDoWGGaiJqLWAZHdQ2YJSZNpTTNKnrYlMhh6PeAIM6SPntfSHiqVcMssWGV09Z+K0aAR31jp/IFRE674iXtxfabfEd3setRlta45dQGK9rGvNR6+uXPRzXO9b2Wp3taFI3GnsW/MEM/qcrBOJITHToAAAAASUVORK5CYII="
      alt="pause butonu"
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: "white",
        borderRadius: "50%",
        marginLeft: "5px",
        rotate: "180deg",
        cursor: "pointer",
      }}
      onClick={click}
    />
  );
}

export default PauseIcon;
