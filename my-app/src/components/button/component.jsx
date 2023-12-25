import classNames from 'classnames';
import { useTheme } from '../../contexts/theme/hooks';
import  styles from './styles.module.css';
import { DARK_THEME, DEFAULT_THEME } from '../../contexts/theme/constants';

export const Button =({children, onClick, disabled, className}) =>  {

    const {theme} =useTheme();


    return (
    <button onClick ={onClick} disabled={disabled} className={classNames(className, {
        [styles.light] : theme === DEFAULT_THEME,
        [styles.dark]: theme === DARK_THEME,
    })}>
        {children}
    </button>
    );
}