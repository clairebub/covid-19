import React, { Fragment, Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Markdown2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }
  
    componentDidMount() {
      fetch(this.props.mdPath)
        .then(res => res.text())
        .then(text => {this.setState({post: text})})
        .catch((err) => console.error(err));
    }
  
    render() {
      const { post } = this.state;
  
      return (
        <Fragment>
          <section className="section">
            <div className="container">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <ReactMarkdown source={post} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      );
    }
  }
  
  export default Markdown2;