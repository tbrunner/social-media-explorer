import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    var subItems = this.props.items.slice(0,this.props.items.length);
    var noItems = "";
    if (this.props.items.length === 0) {
      noItems = "No social media posts to display";
    }
    return (
      <ul className = {styles.list}>
        <div>{noItems}</div>
        { 
            subItems.map((item) => {
                return (<MenuItem className={styles.item} key={item.id} item={item} />);
            }
          , this)
        }
      </ul>
    );
  }
}
