import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {edit_post} from '../AC'

class FormPost extends Component {
 
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
        tags: PropTypes.string,
    };


    state = {
      id: JSON.parse(localStorage.getItem("posts")).length + 1,
      title: '',
      body: '',
      tags: ''
    };


    componentWillUpdate() {}  

    render() {
        return (
            <form id="post-add" className="col-lg-4" onSubmit={this.addPost}>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" placeholder="заголовок" value={this.state.title} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="body" placeholder="запись" value={this.state.body} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="tags" placeholder="тег, еще тег" value={this.state.tags} onChange={this.handleInputChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    addPost = (e) => {
        e.preventDefault();

        this.setState({id: this.state.id + 1})

        var data = [
          {
              "id": this.state.id,
              "title": this.state.title,
              "body": this.state.body,
              "tags": this.state.tags.split(",")

          }
        ] 

        localStorage.setItem("posts", JSON.stringify(JSON.parse(localStorage.getItem("posts")).concat(data)));

        const action = edit_post()
        this.props.dispatch(action)

        this.setState({title: '',body: '', tags: ''})
    }
}

const mapStateToProps = state => ({
    posts: state.EditPost,   
})

export default connect(mapStateToProps)(FormPost)