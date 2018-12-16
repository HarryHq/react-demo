import React from 'react';
import { Input,Button,List } from 'antd';
import './App.css';

// export default class AppUI extends Component {
// 	render(){
// 		return(
// 			<div className="App">
// 		        <div>
// 		          <Input 
// 		            value={this.props.inputValue} 
// 		            style={{width:'300px',margin:'15px'}} 
// 		            placeholder="todo info" 
// 		            onChange={this.props.handleInputChange}
// 		          />
// 		          <Button type="primary" onClick={this.props.handleBtnClick}>Add</Button>
// 		        </div>
// 		        <List
// 		          style={{background:'white',width:'360px',margin:'0 auto', opacity: '0.7'}}
// 		          bordered
// 		          dataSource={this.props.list}
// 		          renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleDelItem(index)}} >{item}</List.Item>)}
// 		        />
// 		    </div>
// 		);
// 	}
// }

/**
 * no state component
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const AppUI = (props) => {
	return(
			<div className="App">
		        <div>
		          <Input 
		            value={props.inputValue} 
		            style={{width:'300px',margin:'15px',opacity: '0.6'}} 
		            placeholder="todo info" 
		            onChange={props.handleInputChange}
		          />
		          <Button type="primary" onClick={props.handleBtnClick}>Add</Button>
		        </div>
		        <List
		          style={{background:'white',width:'360px',margin:'0 auto', opacity: '0.6'}}
		          bordered
		          dataSource={props.list}
		          renderItem={(item,index) => (<List.Item onClick={() => {props.handleDelItem(index)}} >{item}</List.Item>)}
		        />
		  </div>
	);
}