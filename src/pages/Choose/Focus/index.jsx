import React,{ useState,useEffect } from 'react'
import {FocusWrapper} from './style'
import classnames from 'classnames'
import Info from './Info'
import Video from './Video'
import { getVideoList } from '../../../api/request'
import icon from '../../../assets/images/icon.webp'
import icon1 from '../../../assets/images/icon1.webp'
import icon2 from '../../../assets/images/icon2.webp'
import icon3 from '../../../assets/images/icon3.webp'

export default function Focus() {
    const [tab,setTab] = useState('1');
    const [videoData,setVideoData] = useState([]);
    const changeTab = (target) => {
        setTab(target);
    }
    useEffect(() => {
        (async () => {
            let { data } = await getVideoList();
            setVideoData(data);
        })();
    },[]);
    return (
        <FocusWrapper>
            <div className="edit-play-game swiper-container">
                <div className="swiper-wrapper">
                    <div className={"swiper-slide" + classnames({active:tab === '1'})} onClick={changeTab.bind(null,'1')}>
                        <img src={icon} alt="" className='item-pic' />
                    </div>
                    <div className={"swiper-slide" + classnames({active:tab === '2'})} onClick={changeTab.bind(null,'2')}>
                        <img src={icon1} alt="" className='item-pic' />
                    </div>
                    <div className={"swiper-slide" + classnames({active:tab === '3'})} onClick={changeTab.bind(null,'3')}>
                        <img src={icon2} alt="" className='item-pic' />
                    </div>
                    <div className={"swiper-slide" + classnames({active:tab === '4'})} onClick={changeTab.bind(null,'4')}>
                        <img src={icon3} alt="" className='item-pic' />
                    </div>
                </div>
                <div className="bg-shade"></div>
                <a href="#" className="btn-more">
                    <span className="fa fa-plus bui-icon"></span>
                </a>
            </div>
            <Info tab={tab}/>
            <Video video={videoData}/>
        </FocusWrapper>
    )
}
