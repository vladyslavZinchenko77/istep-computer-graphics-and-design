
import './Button.scss'



const Button = ({children,maxWidth, margin, backgroundColor='#4744C9',zIndex})=>{
    return(
        <button style={{maxWidth:`${maxWidth}`,  margin:`${margin}`,backgroundColor:`${backgroundColor}`, zIndex: `${zIndex}`}} className='btn'>{children}</button>
    )
}

export default Button;