import "./App.scss";
import Forms from "./Forms";
import TableInfo from "./TableInfo";
import React, { useState } from "react";
function Porject1() {
  const [data, setData] = useState({});
  const [updateData, setUpdateData] = useState({});
  function sendData(value) {
    setData(value);
    setUpdateData({});
  }
  function dataUpdate(value) {
    console.log(value);
    setUpdateData(value);
    setData({});
  }
  return (
    <div className="App">
      <br />
      <br />
      
      <div className="main_div">
        <div>
          <Forms handleCallBack={sendData} value={updateData}></Forms>
        </div>
        <div>
          <TableInfo
            className="table_main"
            value={data}
            updateDatainForm={dataUpdate}
          ></TableInfo>
        </div>
      </div>
    </div>
  );
}

export default Porject1;
