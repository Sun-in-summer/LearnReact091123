import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/features/enitites/user/selector'
import { User } from './component'


export const UserContainer= ({userId})=> {



    const user = useSelector((state) => selectUserById(state, userId) );

     return <User user={user} />
}