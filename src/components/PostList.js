import React, { Component } from 'react'
import {connect} from 'react-redux'
import {edit_post} from '../AC'

class PostList extends Component {

    render() {
        return (
                <div id="posts" className="well">

                  {this.props.posts
                    .map(posts => 
                        <article key={posts.id}>
                            <header>
                                <h3>{posts.title}</h3>
                            </header>
                            <section>
                                <p>{posts.body}</p>
                            </section>
                            <footer>
                                {posts.tags.map((todo) =>
                                  <button className="btn btn-xs btn-default" key={todo}>{todo}</button>
                                )}
                            </footer>
                            <div className="controls">
                                <button className="btn btn-danger btn-mini" onClick={this.deletePost.bind(this, posts.id)}>удалить</button>
                            </div>
                        </article>
                    )}

                </div>
        )
    }
    
    deletePost = (id) => {  
        var statePost = JSON.parse(localStorage.getItem("posts"));

        for (let i = 0; i < statePost.length; i++) {
            if (statePost[i].id === id) {
                delete statePost[i];    
            }            
        }

        function checkState(state) {
            return state !== undefined;
        }

        localStorage.setItem("posts", JSON.stringify(statePost.filter(checkState)))

        const action = edit_post()
        this.props.dispatch(action)
    }
}

const mapStateToProps = state => ({
    posts: state.EditPost
})

export default connect(mapStateToProps)(PostList)