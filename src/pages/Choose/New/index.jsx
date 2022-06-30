import React from 'react'
import './style.css'
import newimg from '../../../assets/images/newimg.webp'
import newicon from '../../../assets/images/newicon.webp'

export default function New({source=[]}) {
    const rendernew = () => {
        return(
            source.map((item) => (
                <div className="bui-mod-wrap home-content"  key={item.id}>
                    <div className="bui-mod-content">
                        <div className="bui-list-topic-index">
                        <div className="today-recommend content-item">
                                <p><img src={newimg} className="feed-bg item-pic" /></p>
                                <div className="tag">今日推荐</div>
                                <div className="card-info">
                                    <div className="game-info">
                                        <img src={newicon} alt="" className="game-icon" />
                                        <span className="name-tag">
                                            <div className="game-name">{item.title}</div>
                                            <div className="type-name"></div>
                                            <div className="tags">
                                                <span className="tag-name">{item.tag1}</span>
                                                <span className="tag-name">{item.tag2}</span>
                                                <span className="tag-name">{item.tag3}</span>
                                            </div>
                                        </span>
                                        <div className="cart-grade">
                                            <span className=" icon-start-active fa fa-star"></span>
                                            <div className="num">{item.num}</div>
                                        </div>
                                        <div className="game-desc">{item.desc}</div>
                                        <div className="game-bz">{item.bz}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }
    return (
        <section className='bui-container'>
            <div className="bui-tab home-tab-content">
                <div className="tab-content">
                    <div className="tab-content-item">
                        {rendernew()}
                    </div>
                </div>    
            </div>
        </section>
    )
}
