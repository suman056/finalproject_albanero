import React, { useState ,useRef,useEffect} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./style_project3.scss"
function Project3() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(['Option1']);
  const [option,setOption]=useState(['Option1','Option2','Option3','Option4'])
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
        
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [wrapperRef]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption((previous)=>{return previous.indexOf(option)<0?[...previous,option]:[...previous.filter((value)=>value!=option)]});
    
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown"  ref={wrapperRef}>
      <h2>  Custom Dropdown  </h2>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div>
        {selectedOption.length>0&&selectedOption.join(" , ")}
        </div>
        <div>
        <ArrowDropDownIcon/>
        </div>
        
      </div>
      {isOpen && (
        <div className="dropdown-options">{option.map((value)=><div className="dropdown-option" onClick={() => handleOptionClick(value)}>
        {value}
      </div>)}
        </div>
      )}
    </div>
  );
}
export default Project3
