import {Counter} from "../counter/component";
export const Dish = ({dish}) => {
     return (
      <div>
         <div>{dish}</div>
        <div><Counter /></div>
      </div>
      

    );
}