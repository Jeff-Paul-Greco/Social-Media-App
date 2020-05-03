import React from "react";

function Post() {
    return (
        <div className="card text-center">
            <div className="card-header">Post Title</div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">This is a post blah blah blah placeholder text</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
    );
}

export default Post;