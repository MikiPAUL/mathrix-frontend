import { useRouteError,isRouteErrorResponse } from "react-router-dom";
import React from 'react'

export default function ErrorScreen() {
    const error = useRouteError();
    let errorMessage;
    console.error(error);
    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else {
        console.error(error);
        errorMessage = 'Unknown error';
      }
    return (
            <div className="container animate__animated animate__pulse" style={{ marginTop: 70, backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))', backdropFilter: "blur(10px)", boxShadow: "0 0 50px 15px #7E30E1", borderRadius: 15, padding: 70 }}>
                <div style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <div id="error-page">
                        <div style={{ color:"white",fontWeight:"900"}}>
                        <h1>Oops!</h1>
                        <p>Sorry, an unexpected error has occurred.</p>
                        <p>{errorMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}