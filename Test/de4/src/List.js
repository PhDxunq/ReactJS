import React from "react";
import './List.css';

const List = (props) => {
    const list = props.props;
    const handleChange = (event) => {
        let chooseItem = (event.target.parentElement).getAttribute('data-key') ;
        let newList = [...list.listItem];
        newList[chooseItem].check = !newList[chooseItem].check;
        props.props.setListItem(newList);
    }
    return(
        <>
        {list.listItem.map((item,index)=>{
            return(
                <li key={item.id} data-key={index} style={item.check === true ?{width:"300px",height:"30px",border:"1px solid grey",marginTop: "10px",borderRadius:"4px", padding:"5px", display:"flex",textAlign:"left",margin:"15px auto",textDecoration:"line-through",color:"red"}:{width:"300px",height:"30px",border:"1px solid grey",marginTop: "10px",borderRadius:"4px", padding:"5px", display:"flex",textAlign:"left",margin:"15px auto"}}>
                    <label style={{margin:"auto"}}>{item.target}</label>
                    <input type="checkbox" id={item.id} onChange={(event) => handleChange(event)}></input>
                </li>
            )
        })}
        </>
    )
}
export default List;