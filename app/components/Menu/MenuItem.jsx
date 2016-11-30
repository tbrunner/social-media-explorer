import React from 'react';
import styles from './_Menu.scss';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  onLikeClick = (e) => {
    e.preventDefault();
    var id = "likes"+e.target.id;
    var likes = parseInt(document.getElementById(id).getAttribute("data-likes"),10);
    var shares = document.getElementById(id).getAttribute("data-shares",10);
    if(document.getElementById(e.target.id).innerHTML === "Like") {
      document.getElementById(e.target.id).innerHTML = "Unlike"
      likes++;
    }
    else {
      document.getElementById(e.target.id).innerHTML = "Like"
    }
    document.getElementById(id).innerHTML = likes + " Likes " + shares + " Shares";
  }

  onCommentClick = (e) => {
    var commentsId = "comments" +e.target.id;
    var newCommentId = "commentInput"+e.target.id;
    var current = document.getElementById(commentsId).innerHTML;
    var newComment = document.getElementById(newCommentId).value;
    if(newComment !== "") {
      current += "<div style='border-radius: 8px; border:solid; border-width: thin; border-color: white; padding:5px;'>" +newComment+"</div><br/>";
    }
    console.log("yo", current, newComment, document.getElementById(commentsId), document.getElementById(newCommentId));
    document.getElementById(commentsId).innerHTML = current;
    document.getElementById(newCommentId).value = "";
  }

  render() {
    this.props.item.comments = []
    var src = this.props.item.activity_attachment;
    var message = "";
    if (src === null) {
      message = this.props.item.activity_message;
    }
    return (
      <div className={styles.postDiv}>
        <li className={styles.post} key={'menu-item-' + this.props.item.id}>
          <div className={styles.header}> 
            <div className={styles.name}>
              User: {this.props.item.actor_username}
              <div className={styles.provider}>
                Platform: {this.props.item.provider}
              </div>
            </div>
            <div>
              Date: {this.props.item.activity_date} 
            </div>
          </div>
          <img src={src} className={styles.message}></img>
          <span>{message}</span>
          <div className={styles.footer}>
            <div>
              <button type="button" onClick={this.onLikeClick} id={this.props.item.id}>Like</button>
            </div>
            <br/>
            <div id={"likes"+this.props.item.id} data-likes={this.props.item.activity_likes} data-shares={this.props.item.activity_shares}>
              {this.props.item.activity_likes + " Likes " + this.props.item.activity_shares + " Shares"}
            </div>
            <br/>
            <div id={"comments" + this.props.item.id + "b"}>
            </div>
            <div>
              <form>
                <textarea id={"commentInput" + this.props.item.id + "b"} cols="40" rows="2" style={{display:"block"}}></textarea>
                <br/>
                <button id={this.props.item.id + "b"} type="button" onClick={this.onCommentClick}>Comment</button>
              </form>
            </div>
          </div>
        </li>
        <br/>
      </div>
    );
  }
}
