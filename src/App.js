import React, { Component } from 'react';
import './App.css';
import './css/posts.css';
import PostList from './components/PostList'
import FormPost from './components/FormPost'

class App extends Component {

    componentDidMount() {
        let objPosts = require('./json/posts.json');

        let serialPosts = JSON.stringify(objPosts);

        try {
            localStorage.setItem("posts", serialPosts);
        } catch (e) {
            alert('Превышен лимит');
        }
    }  

  render() {
    return (
      <div className="App">
        <div className="container">
            <header id="header">
                <div className="page-header">
                    <h1>Тестовое задание</h1>
                </div>
                <h2>Задача:</h2>
                <ol>
                    <li>Используя коллекцию <code>json/posts.json</code> заполнить базовыми значениями <code>localStorage</code> пользователя, вывести записи в <code>#posts</code>, взяв за основу разметку <code>#posts article</code>.</li>
                    <li>Возможность удаления записи из <code>localStorage</code>.</li>
                    <li>Форма добавления записи, валидация данных.</li>
                </ol>
                <p className="alert alert-info">Ограничений по использованию библиотек, кроссбраузерности &mdash; нет.</p>
            </header>

            <section>
                <PostList/>                
                <FormPost/>
            </section>
        </div>

      </div>
    );
  }
}

export default App;