import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import {useEffect, useRef, useState} from "react";
const initSound = "";
const samples = [
    {
        file: "resources/a.mp3",
        key: "a", // First sample
         // delay in sec
    },
    {
        file: "resources/s.mp3",
        key: "s", // Second sample

    },
    {
        file: "resources/d.mp3",
        key: "d", // Second sample

    },
    {
        file: "resources/f.mp3",
        key: "f", // Second sample

    }
];
const PianoPage = () => {
    const [playing, setPlaying] = useState(false);
    const [audioSource, setAudioSource] = useState('a.mp3');
    const [text, setText] = useState('');
    const { audioRef } = useRef(null);
    const [ selected, setSelected ] = useState(null);
    const onChange = (input) => {
        console.log("Input changed", input);
    }

    const onKeyPress = (button) => {
        const formattedText = (text + button).replace("{space}", ' ');
        setText(formattedText);
        setSelected({ key: button, file: `resources/${button}.mp3`,  });
        console.log("Button pressed", button);
    }
    return (
        <div>
            {/*<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter anything that you would like</label>*/}
            <textarea id="message" rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      defaultValue={text}
            ></textarea>
            <audio
                id={!selected ? "audio" : selected.key}
                ref={audioRef}
                controls
                onPlay={() => console.log("play")}
                autoPlay={true}
                src={!selected ? "" : selected.file}
                hidden={true}
            >
                <source src={!selected ? initSound : selected} type="audio/mpeg"/>
            </audio>
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