import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { useState } from "react";
import UIfx from 'uifx'

const samples = [
    {
        file: "resources/10.m4a",
        key: "0",

    },

    {
        file: "resources/01.m4a",
        key: "1",

    },

    {
        file: "resources/02.m4a",
        key: "2",

    },

    {
        file: "resources/03.m4a",
        key: "3",

    },

    {
        file: "resources/04.m4a",
        key: "4",

    },

    {
        file: "resources/05.m4a",
        key: "5",

    },

    {
        file: "resources/06.m4a",
        key: "6",

    },

    {
        file: "resources/07.m4a",
        key: "7",

    },

    {
        file: "resources/08.m4a",
        key: "8",

    },

    {
        file: "resources/09.m4a",
        key: "9",

    },

    {
        file: "resources/english/11.m4a",
        key: "a",

    },
    {
        file: "resources/english/11.m4a",
        key: "A",

    },

    {
        file: "resources/english/12.m4a",
        key: "b",

    },
    {
        file: "resources/english/12.m4a",
        key: "B",

    },

    {
        file: "resources/english/13.m4a",
        key: "c",

    },
    {
        file: "resources/english/13.m4a",
        key: "C",

    },

    {
        file: "resources/english/14.m4a",
        key: "d",

    },
    {
        file: "resources/english/14.m4a",
        key: "D",

    },

    {
        file: "resources/english/15.m4a",
        key: "e",

    },
    {
        file: "resources/english/15.m4a",
        key: "E",

    },

    {
        file: "resources/english/16.m4a",
        key: "f",

    },
    {
        file: "resources/english/16.m4a",
        key: "F",

    },

    {
        file: "resources/english/17.m4a",
        key: "g",

    },
    {
        file: "resources/english/17.m4a",
        key: "G",

    },

    {
        file: "resources/english/18.m4a",
        key: "h",

    },
    {
        file: "resources/english/18.m4a",
        key: "H",

    },

    {
        file: "resources/english/19.m4a",
        key: "i",

    },
    {
        file: "resources/english/19.m4a",
        key: "I",

    },

    {
        file: "resources/english/20.m4a",
        key: "j",

    },
    {
        file: "resources/english/20.m4a",
        key: "J",

    },

    {
        file: "resources/english/21.m4a",
        key: "k",

    },
    {
        file: "resources/english/21.m4a",
        key: "K",

    },

    {
        file: "resources/english/22.m4a",
        key: "l",

    },
    {
        file: "resources/english/22.m4a",
        key: "L",

    },

    {
        file: "resources/english/23.m4a",
        key: "m",

    },
    {
        file: "resources/english/23.m4a",
        key: "M",

    },

    {
        file: "resources/english/24.m4a",
        key: "n",

    },
    {
        file: "resources/english/24.m4a",
        key: "N",

    },

    {
        file: "resources/english/25.m4a",
        key: "o",

    },
    {
        file: "resources/english/25.m4a",
        key: "O",

    },

    {
        file: "resources/english/26.m4a",
        key: "p",

    },
    {
        file: "resources/english/26.m4a",
        key: "P",

    },

    {
        file: "resources/english/27.m4a",
        key: "q",

    },
    {
        file: "resources/english/27.m4a",
        key: "Q",

    },

    {
        file: "resources/english/28.m4a",
        key: "r",

    },
    {
        file: "resources/english/28.m4a",
        key: "R",

    },

    {
        file: "resources/english/29.m4a",
        key: "s",

    },
    {
        file: "resources/english/29.m4a",
        key: "S",

    },

    {
        file: "resources/english/30.m4a",
        key: "t",

    },
    {
        file: "resources/english/30.m4a",
        key: "T",

    },

    {
        file: "resources/english/31.m4a",
        key: "u",

    },
    {
        file: "resources/english/31.m4a",
        key: "U",

    },

    {
        file: "resources/english/32.m4a",
        key: "v",

    },
    {
        file: "resources/english/32.m4a",
        key: "V",

    },

    {
        file: "resources/english/33.m4a",
        key: "w",

    },
    {
        file: "resources/english/33.m4a",
        key: "W",

    },

    {
        file: "resources/english/34.m4a",
        key: "x",

    },
    {
        file: "resources/english/34.m4a",
        key: "X",

    },

    {
        file: "resources/english/35.m4a",
        key: "y",

    },
    {
        file: "resources/english/35.m4a",
        key: "Y",

    },

    {
        file: "resources/english/36.m4a",
        key: "z",

    },
    {
        file: "resources/english/36.m4a",
        key: "Z",

    },

    {
        file: "resources/ukrainian/12.m4a",
        key: "б",

    },
    {
        file: "resources/ukrainian/12.m4a",
        key: "Б",

    },

    {
        file: "resources/ukrainian/13.m4a",
        key: "в",

    },
    {
        file: "resources/ukrainian/13.m4a",
        key: "В",

    },

    {
        file: "resources/ukrainian/14.m4a",
        key: "г",

    },
    {
        file: "resources/ukrainian/14.m4a",
        key: "Г",

    },

    {
        file: "resources/ukrainian/15.m4a",
        key: "ґ",

    },
    {
        file: "resources/ukrainian/15.m4a",
        key: "Ґ",

    },

    {
        file: "resources/ukrainian/16.m4a",
        key: "д",

    },
    {
        file: "resources/ukrainian/16.m4a",
        key: "Д",

    },

    {
        file: "resources/ukrainian/17.m4a",
        key: "е",

    },
    {
        file: "resources/ukrainian/17.m4a",
        key: "Е",

    },

    {
        file: "resources/ukrainian/18.m4a",
        key: "є",

    },
    {
        file: "resources/ukrainian/18.m4a",
        key: "Є",

    },

    {
        file: "resources/ukrainian/19.m4a",
        key: "ж",

    },
    {
        file: "resources/ukrainian/19.m4a",
        key: "Ж",

    },

    {
        file: "resources/ukrainian/20.m4a",
        key: "з",

    },
    {
        file: "resources/ukrainian/20.m4a",
        key: "З",

    },

    {
        file: "resources/ukrainian/21.m4a",
        key: "и",

    },
    {
        file: "resources/ukrainian/21.m4a",
        key: "И",

    },

    {
        file: "resources/ukrainian/22.m4a",
        key: "і",

    },
    {
        file: "resources/ukrainian/22.m4a",
        key: "І",

    },

    {
        file: "resources/ukrainian/23.m4a",
        key: "ї",

    },
    {
        file: "resources/ukrainian/23.m4a",
        key: "Ї",

    },

    {
        file: "resources/ukrainian/24.m4a",
        key: "й",

    },
    {
        file: "resources/ukrainian/24.m4a",
        key: "Й",

    },

    {
        file: "resources/ukrainian/25.m4a",
        key: "к",

    },
    {
        file: "resources/ukrainian/25.m4a",
        key: "К",

    },

    {
        file: "resources/ukrainian/26.m4a",
        key: "л",

    },
    {
        file: "resources/ukrainian/26.m4a",
        key: "Л",

    },

    {
        file: "resources/ukrainian/27.m4a",
        key: "м",

    },
    {
        file: "resources/ukrainian/27.m4a",
        key: "М",

    },

    {
        file: "resources/ukrainian/28.m4a",
        key: "н",

    },
    {
        file: "resources/ukrainian/28.m4a",
        key: "Н",

    },

    {
        file: "resources/ukrainian/29.m4a",
        key: "о",

    },
    {
        file: "resources/ukrainian/29.m4a",
        key: "О",

    },

    {
        file: "resources/ukrainian/30.m4a",
        key: "п",

    },
    {
        file: "resources/ukrainian/30.m4a",
        key: "П",

    },

    {
        file: "resources/ukrainian/31.m4a",
        key: "р",

    },
    {
        file: "resources/ukrainian/31.m4a",
        key: "Р",

    },

    {
        file: "resources/ukrainian/32.m4a",
        key: "с",

    },
    {
        file: "resources/ukrainian/32.m4a",
        key: "С",

    },

    {
        file: "resources/ukrainian/33.m4a",
        key: "т",

    },
    {
        file: "resources/ukrainian/33.m4a",
        key: "Т",

    },

    {
        file: "resources/ukrainian/34.m4a",
        key: "у",

    },
    {
        file: "resources/ukrainian/34.m4a",
        key: "У",

    },

    {
        file: "resources/ukrainian/35.m4a",
        key: "ф",

    },
    {
        file: "resources/ukrainian/35.m4a",
        key: "Ф",

    },

    {
        file: "resources/ukrainian/36.m4a",
        key: "х",

    },
    {
        file: "resources/ukrainian/36.m4a",
        key: "Х",

    },

    {
        file: "resources/ukrainian/37.m4a",
        key: "ц",

    },
    {
        file: "resources/ukrainian/37.m4a",
        key: "Ц",

    },

    {
        file: "resources/ukrainian/38.m4a",
        key: "ч",

    },
    {
        file: "resources/ukrainian/38.m4a",
        key: "Ч",

    },

    {
        file: "resources/ukrainian/39.m4a",
        key: "ш",

    },
    {
        file: "resources/ukrainian/39.m4a",
        key: "Ш",

    },

    {
        file: "resources/ukrainian/40.m4a",
        key: "щ",

    },
    {
        file: "resources/ukrainian/40.m4a",
        key: "Щ",

    },

    {
        file: "resources/ukrainian/41.m4a",
        key: "ь",

    },
    {
        file: "resources/ukrainian/41.m4a",
        key: "Ь",

    },

    {
        file: "resources/ukrainian/42.m4a",
        key: "ю",

    },
    {
        file: "resources/ukrainian/42.m4a",
        key: "Ю",

    },

    {
        file: "resources/ukrainian/43.m4a",
        key: "я",

    },
    {
        file: "resources/ukrainian/43.m4a",
        key: "Я",

    },
    {
        file: "resources/37.m4a",
        key: "-",

    },
    {
        file: "resources/38.m4a",
        key: "=",

    },
    {
        file: "resources/39.m4a",
        key: ":",

    },
    {
        file: "resources/40.m4a",
        key: "'",

    },

    {
        file: "resources/41.m4a",
        key: "\\",

    },

    {
        file: "resources/42.m4a",
        key: ",",

    },
    {
        file: "resources/43.m4a",
        key: ".",

    },
    {
        file: "resources/44.m4a",
        key: "/",

    },
    {
        file: "resources/45.m4a",
        key: "shift",

    },
    {
        file: "resources/45.m4a",
        key: "SHIFT",

    },
    {
        file: "resources/46.m4a",
        key: "{",

    },
    {
        file: "resources/47.m4a",
        key: "}",

    },
    {
        file: "resources/48.m4a",
        key: "[",

    },
    {
        file: "resources/49.m4a",
        key: "]",

    },

];
const PianoPage = () => {
    const [text, setText] = useState('');
    const onChange = (input) => {
        console.log("Input changed", input);
    }

    const onKeyPress = (button) => {
        const formattedText = (text + button).replace("{space}", ' ');
        setText(formattedText);
        const key = button.replace(/[\{\}]/g, '')
        const audioFile = samples.find((s) => s.key === key) ?? { file: 'resources/01.m4a', key: 'a'}
        const sound = new UIfx(audioFile.file, {})
        sound.play()
        console.log(`Key is ${key} and audio is ${JSON.stringify(audioFile)}`)
        console.log("Button pressed", button);
    }
    return (
        <div >
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Experiolation with sound</label>
            <textarea id="message" rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      defaultValue={text}
            ></textarea>
            <Keyboard
                onChange={onChange}
                onKeyPress={onKeyPress}
                physicalKeyboardHighlightPress={true}
                physicalKeyboardHighlight={true}
            />
        </div>

    )
}

export default PianoPage