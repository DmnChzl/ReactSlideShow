import React from 'react';

const HEADERS = [
  {
    source: 'Source',
    link: 'Lien'
  }
];

const ROWS = [
  {
    source: 'React',
    link: 'https://reactjs.org/'
  },
  {
    source: 'React Router',
    link: 'https://reacttraining.com/react-router/'
  },
  {
    source: 'Redux',
    link: 'https://redux.js.org/'
  },
  {
    source: 'Dan Abramov',
    link: 'https://overreacted.io/'
  },
  {
    source: 'Dev Community 👩‍💻👨‍💻',
    link: 'https://dev.to/'
  },
  {
    source: 'HackerRank',
    link: 'https://research.hackerrank.com/developer-skills/2019/'
  },
  {
    source: 'MDN',
    link: 'https://developer.mozilla.org/'
  },
  {
    source: 'RevealJS',
    link: 'https://revealjs.com/'
  }
];

export default function Appendix() {
  return (
    <section id="appendix">
      <h2>Annexes</h2>
      <div className="beautify-table custom">
        <div className="beautify-table-head">
          <table>
            <thead>
              {HEADERS.map(({ source, link }, idx) => (
                <tr key={idx} className="head">
                  <th className="column1">{source}</th>
                  <th className="column2 fill">{link}</th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
        <div className="beautify-table-body">
          <table>
            <tbody>
              {ROWS.map(({ source, link }, idx) => (
                <tr key={idx} className="body">
                  <td className="column1">{source}</td>
                  <td className="column2 fill">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
