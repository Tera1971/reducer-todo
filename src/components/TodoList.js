// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';

import Todo from './Todo';



const TodoList = props => {
    return (
        <div className="Todo-List">            
            {props.task.map(Item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />

            ))}
               <button className="clear-btn" onClick={props.clearComplete}/>
                   Clear clearComplete
               </div>
       
    );
            };

export default TodoList; 


