import { useState } from 'react';
import './CustomSelect.scss'
import { ReactComponent as Arrow } from '../../svg/arrow-select.svg';

const CustomSelect = ({label,options})=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
      setIsOpen(!isOpen);
    };


    return (
        <div className="select-container">
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h4 className='select__label'>{label}</h4>
                <div className="arrow" onClick={toggleList}>
                    {isOpen ? <Arrow className='select__arrow-up'/> : <Arrow className='select__arrow-down'/>}
                </div>
            </div>
            
          {isOpen && (
            <ul className="options">
              {options}
            </ul>
          )}
        </div>
      );
}

export default CustomSelect;