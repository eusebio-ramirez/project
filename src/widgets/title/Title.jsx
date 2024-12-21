import React from "react";

const Title = ({ string }) => {
    return (
        <div className="col-12">
            <h1 className="title">{string}</h1>
            <hr className="hr-gob" />
        </div>
    )
}

export default Title