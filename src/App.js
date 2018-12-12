import React from 'react';
import ReactDOM from 'react-dom';
import { FullPageIntroWithFixedNavbar } from './NavBar';
import { FormPage } from './Form';
import { TodoApp } from './ToDo';
import './App.css';
import './index.css';

export class App extends React.Component {
  render() {
    return (
        <div>
          <div>{<FullPageIntroWithFixedNavbar/>}</div>
          <div>{<FormPage/>}</div>
          <div>{<TodoApp/>}</div>
        </div>
    )}}

    ReactDOM.render(<App />, document.getElementById('root'))
    export default App;