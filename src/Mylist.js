import React from 'react';
import './Mylist.css'
import 'antd/dist/antd.css';
import {Button,span} from 'antd'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input className="newInput" id={item.key} type="text" value={item.text} onChange={(e) => {props.updateItem(e.target.value, item.key)}} />

                <span>

                    <Button id="btn1" icon='delete' onClick={() => props.deleteItem(item.key)}/>
                </span>
            </p>

        </div>
    })
    return (
        <div>{listItems}</div>
    )
}



export default ListItems;