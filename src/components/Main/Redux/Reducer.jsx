import React from 'react';

const CODE = `
  import { CREATE_TASK, COMPLETE_TASK, CLEAR_TASKS } from './actions';

  export default function tasks (state = [], action) {
    switch (action.type) {
      case CREATE_TASK:
        return [
          ...state,
          action.payload
        ];

      case COMPLETE_TASK:
        return state.map(task => {
          return task.id === action.payload ? { ...task, completed: !task.completed } : task;
        });

      case CLEAR_TASK:
        return state.filter(task => task.id !== payload);

      default:
        return state;
    }
  }
  `;

export default function Reducer() {
  return (
    <section id="reducer">
      <h2>Reducer</h2>
      <p>
        L'<em>action</em> trace le changement dans le <strong>store</strong>
        <br />
        Le <code>reducer</code> se charge d'effectuer la modification
      </p>
      <div>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE}
          </code>
        </pre>
      </div>
    </section>
  );
}