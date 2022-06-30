import React from 'react'
import { VideoWrapper } from './style'
import pic from '../../../../assets/images/pic.webp'
import userimg from '../../../../assets/images/usericon.webp'
export default function Video({video=[]}) {

    const rendervideo = () => {
        return (
            video.map((item) =>(
                <div className="blg-ai-video-item" key={item.id}>
                <div className="img-cover">
                    <img src={pic} alt="" className="item-pic" />
                    <div className="bg-shade">
                        <div className="numbers">
                            <div className="video-time">{item.videotime}</div>
                            <div className="view-num">{item.viewnum}</div>
                            <div className="barrage-num">{item.barragenum}</div>
                        </div>
                    </div>
                </div>
                <div className="game-desc">
                    <div className="title">{item.title}</div>
                    <div className="user-desc">
                        <span className="user-face">
                            <img src={userimg} alt="" className="item-pic" />
                            <span className="verify-type">
                                <span className="bui-icon"></span>
                            </span>
                        </span>
                        <span className="desc">
                            <div className="name">{item.name}</div>
                            <div className="time">{item.time}</div>
                        </span>
                        <div className="game-tag">
                            <span className="bui-icon fa fa-chain"></span>
                            {item.tag}
                        </div>
                    </div>
                </div>
            </div>
            ))
        )
    }
    return (
        <VideoWrapper>
            {rendervideo()}    
        </VideoWrapper>
    )
}
