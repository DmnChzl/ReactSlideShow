import React from 'react';

const CODE = `
  import React from 'react';

  const userName = 'Rick';

  class HelloWorld extends React.Component {
    render() {
      return React.createElement(
        'span',
        { style: { color: '#2a2c2e' }},
        \`Hi $\{userName} !\`
      );
    }
  }
  `;

export default function Syntax() {
  return (
    <section id="syntax">
      <h1>Syntaxe</h1>
      <p>
        Ci-dessous un exemple de composant <strong>React</strong> avec le fichier{' '}
        <code>HelloWorld.js</code> :
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}