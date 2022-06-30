import React,{useEffect} from 'react'
import {BannersWrapper} from './style'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import banner1 from '../../../assets/images/aobidao.jpg'
import banner2 from '../../../assets/images/diwurenge.jpg'
import banner3 from '../../../assets/images/mnxshx.jpg'

export default function Banners() {
    useEffect(() => {
        new Swiper('.btn-banners',{
          loop: true,
          autoplay: {
            delay: 3000
          },
          pagination: {
            el: '.swiper-pagination'
          }
        });
    },[]);
    return (
        <BannersWrapper>
            <div className="btn-banners swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={banner1} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={banner2} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={banner3} alt="" />
                </div>
            </div>
            <div className="swiper-pagination"></div>
            </div>
        </BannersWrapper>
    )
}