import React from "react";

function Twitter({ onclick }) {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2YzWsTQRjGQ0YQQRQEEQQRPAp6ET158uClLV4ERfGmoHjx4ElBhFIQRfwHRBQP2a22asVaommiYFra0mKDtIJai2CbtrY2O7ud/Zh9ZDcmUpq6u/mYTWEfeE8JzPOb93l3ZycWixQpUqSmFkmoJ+ISzRBZoUSmEFMKjcs0TSS1rTbzknJLnGlauSSlo+qdD928/LcStDUwQDE2TWBepojLtD94BySqhG2clGNEC8EBwjYtr64IgEQdoBs3Qps7Ka6O6ZgocBgcmGM2un+YOPJGc3/f+pTidJbhZk4XA3Ajp5cX96pNMnXNVpLOgdSsBc0Ccr85dj1XxQB8UTgWdBsH+7whzg8xeOntrIULQwxXRgV1oGDa7sJ5ZuNYeuW/AIMLHH40rdrY2yOoA9l5q7ywZQPXPupuVCr9l1ZOzypxG9j3cn3zdQc4+WFtLN7NWTicXBspP7JsiH8KPZyqvLWZvIVLIwwHXmvY1uUPIM9ssQDpvIWLwwx9M/+iVIvGl7hYgP58fYyX9Pi7KRbAeQc4ua2Xzg4w8TPQ8n4F86x2CtUCdj5TxQNseUKxv1fDq5+1xenupOFpviEA0rSPB7yHlg0bu1+o4QBs71Lx4JuJWkJ0Kuud/YYBlOpQUsOdSQNjixxLhn+ce5/9RYc0GqBUzour1+c8tH8y1j16EBEAzvndOXgdz6zg+rju+8DmfAecG/QfG9IIgKMpDckZK1D2nQPd7QkDO7r9DSwREaE9PSouj+h4NGVidJG75xnGix8pzk4P/+K4/9XEmQHmDny1xomoGWh0xSIAeaN1QGqiq0WZLgcGcO/nwzcOp+ISTVXRAbUtbOOkVJ20JTBAEULpCN28rLRXZb4MkaCtzv280JmQqOLEpuqdjxQpUqSYKP0BoMaOdbh640oAAAAASUVORK5CYII="
      alt="Twitter"
      style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
      }}
      // onClick={onclick}
    />
  );
}

export default Twitter;
