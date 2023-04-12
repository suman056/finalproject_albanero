import React, { useState } from 'react';
import { Button } from '@mui/material';
import "./style_project2.scss"
import { v4 as uuidv4 } from 'uuid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


function Project2() {

  const [users, setUsers] = useState([])
  const [currentuser, setCurrentuser] = useState("")
 
  
 
  


  const addRow = () => {
    let id=uuidv4()
    const newUsers = [...users, { name: "", cards: {card1:false,card2:false,card3:false,card4:false},id:id}]
    setUsers(newUsers)
  }

  

  const handleUserChange = (event) => {
    
   event.target.value && event.target.value.trim().length>0? setCurrentuser(event.target.value):setCurrentuser('')
    
  }

  const handleCardChange = (event, card,index) => {
    console.log(event.target.checked)
     
      let usersValue=[...users]
      event.target.checked? usersValue[index]["cards"][card]=true:usersValue[index]["cards"][card]=false
     
      setUsers([...usersValue])
    
  }
  const onChangeUserName=(event,index)=>{
    const newUsers = [...users]
    newUsers[index].name = event.target.value
    setUsers(newUsers)
  }
  return (
    <div className='container_project2'>
      <div className='table-section'>
        <div className='Button_inputs'>
          
          <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-label">Select user</InputLabel>
          <Select
   
    label="Select User"
    value={currentuser} onChange={handleUserChange} sx={{maxWidth:"15vh",minWidth:"15vh"}}
  >
    <MenuItem  >Select user</MenuItem>
     {users.map((user) => (
              <MenuItem key={user.id} value={user.name} className='menu_select'>{user.name}</MenuItem>
            ))}
    
  </Select>
  </FormControl>

         
        </div>
        <div className='table_project2'>
          <table>
            <thead>
              <tr>
                <th>Users</th>
                <th>Card 1</th>
                <th>Card 2</th>
                <th>Card 3</th>
                <th>Card 4</th>
               
              </tr>
            </thead>
            <tbody >
              {users.map((user, index) => (
                <tr key={user.id} >
                  <td>
                    <input className='user' type='text' value={user.name}  onChange={(event) => { onChangeUserName(event,index)} } />
                  </td>
                  
                      <td >
                        <input type='checkbox'className='checkbox' checked={users[index]["cards"]["card1"]} onChange={(event) => handleCardChange(event, "card1",index)}
                        />
                      </td>
                      <td >
                        <input type='checkbox'className='checkbox' checked={users[index]["cards"]["card2"]} onChange={(event) => handleCardChange(event, "card2",index)}
                        />
                      </td>
                      <td >
                        <input type='checkbox'className='checkbox' checked={users[index]["cards"]["card3"]} onChange={(event) => handleCardChange(event, "card3",index)}
                        />
                      </td>
                      <td >
                        <input type='checkbox'className='checkbox' checked={users[index]["cards"]["card4"]} onChange={(event) => handleCardChange(event, "card4",index)}
                        />
                      </td>
                    
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            <br/>
            <Button fontSize='medium' onClick={addRow}  variant="contained" >Add</Button>
          
      </div>
      <br/><br/>
      <div className='showCards'>
          {currentuser.length>0&&users.map((value)=>
            
           value.name==currentuser&& Object.entries(value.cards).map((value)=>
              
                 value[1]&&<div className='cards_data'><div>{value[0]}</div></div>
            )
          
          )}
      </div>
      
    </div>
  );
}
export default Project2;