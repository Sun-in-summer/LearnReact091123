import { Button } from "../button/component";


export const Tab = ({ children, onClick, isActive, className }) => {

  return <Button onClick={onClick} isActive ={isActive} className={ className}> {children}</Button>;
};
