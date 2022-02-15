import React from 'react';

const Results = (props) => {
  return (
  <section>
    <pre data-testid="data">{props.data ? JSON.stringify(props.data, undefined, 2) : <p>Loading...</p>}</pre>
    </section>
  );
}

export default Results;
