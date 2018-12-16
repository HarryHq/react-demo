import React, { Component } from 'react';
import {AppUI} from './AppUI';
import store from './store';
import { 
  getChangeInputValue,
  getAddTodoItemAction,
  getDelItemAction,
  getInitList
} from './store/actionCreators';



class App extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelItem=this.handleDelItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <AppUI 
        inputValue = {this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleDelItem = {this.handleDelItem}
        list = {this.state.list}
      />
    );
  }

  componentDidMount(){
    const action = getInitList();
    store.dispatch(action);
  }

  handleInputChange(e){
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleBtnClick(){
    const action = getAddTodoItemAction();
    store.dispatch(action);
  }

  handleDelItem(index){
    const action = getDelItemAction(index);
    store.dispatch(action);
  }
}

export default App;
