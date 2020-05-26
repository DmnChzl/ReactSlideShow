import React from 'react';

const SNIPPET = `
  import React from 'react';
  import ReactDOM from 'react-dom';

  import HelloWorld from './path/to/HelloWorld';

  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root') // Our Mount Point
  );
  `;

export default function Source() {
  return (
    <section id="source">
      <h2>Index.JS</h2>
      <p>
        Au début de l'application, dans le script principal...
        <br />
        On appelle <strong>React</strong> afin de rendre le composant dans le DOM !
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}
