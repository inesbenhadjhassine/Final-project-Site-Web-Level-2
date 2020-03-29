import React from 'react';

class Task extends React.Component {
    render () {
        return (
        <div className="Task">
           <span>{this.props.todo.value}</span> 
          

        </div>
        );
    }

}

export default Task;