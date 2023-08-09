import { Container } from "./style"

const Button = ({onClick,children,wd,hd,FS}) => {
    return (
        <div>
        
    <Container className="container" onClick={onClick} FS={FS}   wd={wd} hd={hd} >{children||'Generic Button'}</Container>
        </div>
    )
}

export default Button