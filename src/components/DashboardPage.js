import React from 'react';

export default (props) => {
  const user = props.data.user;

  if (!user) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Loading</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Users</h1>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
