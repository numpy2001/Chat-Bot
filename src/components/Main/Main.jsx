import React, { useState } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
const Main = () => {
    const [input, setinput] = useState("");
    const [chat, setchat] = useState([]);
    const handleChange = (e) => {
        setinput(e.target.value);
    }
    const handleClick = (e) => {
        setinput("");
        setchat([...chat, input]);
    }
    return (
        <div className='main'>
            <div className="nav">
                <p>My-Bot</p>
                <img src={assets.user_icon} alt="" />
            </div>
            
                <div className="main-container">
                    {chat.length===0?<>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Suggest beautiful places to see an upcoming road trip</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Suggest beautiful places to see an upcoming road trip</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Suggest beautiful places to see an upcoming road trip</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div></>:<div className='result'>
                    {chat.map((data) => {
                        return (
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{data}</p>
                            </div>
                        )
                    })}
                </div>}
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder='Enter a prompt here' onChange={handleChange} value={input} />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img src={assets.send_icon} alt="" onClick={handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Main
