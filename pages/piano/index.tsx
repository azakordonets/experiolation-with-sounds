import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import {useEffect, useRef, useState} from "react";
const initSound = "";
import UIfx from 'uifx'

const samples = [
    {
        file: "resources/45.m4a",
        key: "0",

    },

    {
        file: "resources/36.m4a",
        key: "1",

    },

    {
        file: "resources/37.m4a",
        key: "2",

    },

    {
        file: "resources/38.m4a",
        key: "3",

    },

    {
        file: "resources/39.m4a",
        key: "4",

    },

    {
        file: "resources/40.m4a",
        key: "5",

    },

    {
        file: "resources/41.m4a",
        key: "6",

    },

    {
        file: "resources/42.m4a",
        key: "7",

    },

    {
        file: "resources/43.m4a",
        key: "8",

    },

    {
        file: "resources/44.m4a",
        key: "9",

    },

    {
        file: "resources/01.m4a",
        key: "a",

    },

    {
        file: "resources/02.m4a",
        key: "b",

    },

    {
        file: "resources/03.m4a",
        key: "c",

    },

    {
        file: "resources/04.m4a",
        key: "d",

    },

    {
        file: "resources/05.m4a",
        key: "e",

    },

    {
        file: "resources/06.m4a",
        key: "f",

    },

    {
        file: "resources/07.m4a",
        key: "g",

    },

    {
        file: "resources/08.m4a",
        key: "h",

    },

    {
        file: "resources/09.m4a",
        key: "i",

    },

    {
        file: "resources/10.m4a",
        key: "j",

    },

    {
        file: "resources/11.m4a",
        key: "k",

    },

    {
        file: "resources/12.m4a",
        key: "l",

    },

    {
        file: "resources/13.m4a",
        key: "m",

    },

    {
        file: "resources/14.m4a",
        key: "n",

    },

    {
        file: "resources/15.m4a",
        key: "o",

    },

    {
        file: "resources/16.m4a",
        key: "p",

    },

    {
        file: "resources/17.m4a",
        key: "q",

    },

    {
        file: "resources/18.m4a",
        key: "r",

    },

    {
        file: "resources/19.m4a",
        key: "s",

    },

    {
        file: "resources/20.m4a",
        key: "t",

    },

    {
        file: "resources/21.m4a",
        key: "u",

    },

    {
        file: "resources/22.m4a",
        key: "v",

    },

    {
        file: "resources/23.m4a",
        key: "w",

    },

    {
        file: "resources/24.m4a",
        key: "x",

    },

    {
        file: "resources/25.m4a",
        key: "y",

    },

    {
        file: "resources/26.m4a",
        key: "z",

    },

    {
        file: "resources/27.m4a",
        key: "-",

    },

    {
        file: "resources/28.m4a",
        key: "=",

    },

    {
        file: "resources/29.m4a",
        key: ":",

    },

    {
        file: "resources/30.m4a",
        key: "'",

    },

    {
        file: "resources/31.m4a",
        key: "\\",

    },

    {
        file: "resources/32.m4a",
        key: ",",

    },

    {
        file: "resources/33.m4a",
        key: ".",

    },

    {
        file: "resources/34.m4a",
        key: "/",

    },

    {
        file: "resources/35.m4a",
        key: "shift",

    },

    {
        file: "resources/46.m4a",
        key: "enter",

    },
    {
        file: "resources/46.m4a",
        key: "bksp",

    }
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