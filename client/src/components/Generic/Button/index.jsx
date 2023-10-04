import { Container } from "./style"

// eslint-disable-next-line react/prop-types
const Button = ({onClick,children,wd,hd,FS,br,type}) => {
    return (
        <div>
        
    <Container className="container" br={br} onClick={onClick} FS={FS}   wd={wd} hd={hd} type={type} >{children||'Generic Button'}</Container>
        </div>
    )
}

export default Button