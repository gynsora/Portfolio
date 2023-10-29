import { useContext, useState } from "react";
import { ThemeContext , ColorContext} from '../../Utils/Context';
import './ThemeSwitch.scss';

function ThemeSwitch(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { toggleColor } = useContext(ColorContext);

    const [stateThemeWindow, setStateThemeWindow] = useState('close');
    const toggleStateThemeWindow = () => {
           if (stateThemeWindow === 'close'){setStateThemeWindow('open')}
           else {setStateThemeWindow('close')}     
    };

    return (
        <div id="theme-switch-container" className={stateThemeWindow === 'close' ? 'close' :'open' }>
            <div id="show-theme-switch" onClick={() => toggleStateThemeWindow()}>
                <i class="fa-solid fa-gear"></i>
            </div>
            <div id="theme-switch">
                    <div className="cercle" id="theme-swtich-red" onClick={() => toggleColor('red')}></div>
                    <div className="cercle" id="theme-swtich-green" onClick={() => toggleColor('green')} ></div>
                    <div className="cercle" id="theme-swtich-blue" onClick={() => toggleColor('blue')}></div>
                    <div id="moon-start">
                        <i id="bar" className={theme === 'light' ? 'fa-regular fa-moon' :'fa-regular fa-sun' } onClick={() => toggleTheme()}></i>
                    </div>
            </div>
        </div>
    )
}
export default ThemeSwitch;
