import React from 'react';

function Headers({incomplete}) {
  return (
    <>
      <header>
        <h1>To Do Lisst: {incomplete} items pending</h1>
      </header>
    </>
  );
}

export default Headers;
