import React from "react";

function Post() {
    return (
        <div className="card z-depth-5">
            <div className="card-header">Post Author</div>
            <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className="float-right comments-link">Comments</a>
            </div>
            <div className="card-footer text-muted text-right">2 days ago</div>
        </div>
    );
}

export default Post;