import { useContext } from "react";
import { ThemeContext , ColorContext} from '../../Utils/Context';
import './ThemeSwitch.scss';

function ThemeSwitch(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { toggleColor } = useContext(ColorContext);
    return (
        <div id="theme-switch">
                <div className="cercle" id="theme-swtich-red" onClick={() => toggleColor('red')}></div>
                <div className="cercle" id="theme-swtich-green" onClick={() => toggleColor('green')} ></div>
                <div className="cercle" id="theme-swtich-blue" onClick={() => toggleColor('blue')}></div>
                <div id="moon-start">
                    <i id="bar" className={theme === 'light' ? 'fa-regular fa-moon' :'fa-regular fa-sun' } onClick={() => toggleTheme()}></i>
                </div>
        </div>
    )
}
export default ThemeSwitch;
