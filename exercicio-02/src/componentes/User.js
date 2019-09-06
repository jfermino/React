import React from "react";

function User({ match }) {
    return (
      <div>
        <h3>Bem vindo: {match.params.name}</h3>
      </div>
    );
  }

  export default User;
  