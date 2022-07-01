import React from 'react'
import { ReserveWrapper } from './style'

export default function Reserve({reserve}) {
    console.log(reserve);
    return (
        <ReserveWrapper>
            <div className="bui-mod-wrap">
                <div className="bui-title">
                    "新游预约"
                    <div className="title-more">
                        "更多"
                        <span className="bui-icon fa fa-angle-right"></span>
                    </div>
                </div>
                <div className="bui-list-game1 swiper-container">
                    <ul className="swiper-wrapper w1">
                        <li className="swiper-slide card-game">
                            <div className="game-img">
                                <img src="" alt="" className="item-pic" />
                            </div>
                            <div className="game-name"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </ReserveWrapper>
    )
}
