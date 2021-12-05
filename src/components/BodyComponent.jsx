import React from "react";

const BodyComponent = ({ setBody, body, contentType, setContentType }) => {
    return (
        <>
            <div>
                <input
                    type="radio"
                    value="Application/json"
                    onChange={setContentType}
                    checked={contentType === "Application/json"}
                />
                <label>Application/json</label>
            </div>
            <textarea
                style={{ resize: "none" }}
                onChange={setBody} value={body}
            />
        </>
    )
}

export default BodyComponent