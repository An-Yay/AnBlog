import clickSound from "../../assets/audio/clickSound.mp3";

const playAudio = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.7;
    audio.play();
}

export default playAudio;