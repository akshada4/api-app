import React from "react";

function BodyComponent({ setBody, body, contentType, setContentType }) {
    return (
        <>
            <div>
                <input
                    type="radio"
                    value="Application/json"
                    onChange={setContentType}
                    checked={contentType === "Application/json"}
                    id="contentType"
                />
                <label htmlFor="contentType">Application/json</label>
            </div>
            <textarea
                style={{ resize: "none" }}
                onChange={setBody} value={body}
            />
        </>
    )
}

export default BodyComponent