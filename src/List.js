import React from 'react';
import Task from './Task';
import "./App.css";

class List extends React.Component {

    render () {
        return (
        <div className="sugliste">
            {this.props.todos.map((todo,index)=> {
                return(
                    <Task 
                    key={index} 
                    todo={todo}
                    />
                )
            })}
        </div>
        );
    }
}
export default List;


