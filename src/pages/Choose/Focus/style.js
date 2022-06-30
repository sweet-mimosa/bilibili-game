import styled from "styled-components";

export const FocusWrapper = styled.div`
    display: block;
    .edit-play-game .swiper-container {
        padding: 0 0.36rem;
        margin: 0.42rem 0;
        position: relative;
        overflow: hidden;
        list-style: none;
        z-index: 1;
    }
    .swiper-wrapper{
        transition-duration: 0ms;
        transform: translate3d(0px, 0px, 0px);
        -webkit-transition-timing-function: ease-out;
        -o-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        transition-property: transform,-webkit-transform;
        box-sizing: content-box;
    }
    .swiper-slide {
        position: relative;
        width: 2.22rem;
        height: 2.79rem;
        margin-right: 0.36rem;
        font-size: 0;
        flex-shrink: 0;
    }
    .swiper-slideactive{
        position: relative;
        width: 2.22rem;
        height: 2.79rem;
        margin-left: 0.36rem;
        font-size: 0;
        flex-shrink: 0;
            &::after{
            position: absolute;
            content: "";
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-top-color: #7bcdef;
            border-width: 0.18rem;
            left: 0;
            bottom: -0.18rem;
            width: 0;
            height: 0;
            border-style: solid;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            }
        }
        
    .swiper-slide .item-pic{
        width: 2.22rem;
        height: 2.22rem;
        border-radius: 0.48rem;
        animation: fade .36s;
        box-sizing: border-box;
        overflow: hidden;
        margin-left: 0.45rem;
    }
    .swiper-slideactive .item-pic{
        border: 2px solid;
        border-color: #4fbdea;
        width: 2.22rem;
        height: 2.22rem;
        border-radius: 0.48rem;
        animation: fade .36s;
        box-sizing: border-box;
        overflow: hidden;

    }
    .edit-play-game .bg-shade {
    position: absolute;
    right: 0;
    width: 1.5rem;
    height: 2.22rem;
    background-color: #f4f4f4;
    top: 0;
    z-index: 11;
        &::before{
            position: absolute;
            content: "";
            width: 1.5rem;
            top: 0;
            right: 0;
            height: 2.22rem;
            background: -webkit-linear-gradient(left,hsla(0,0%,96%,.78),#f4f4f4 53%);
            background: -o-linear-gradient(left,hsla(0,0%,96%,.78) 0,#f4f4f4 53%);
            background: linear-gradient(90deg,hsla(0,0%,96%,.78),#f4f4f4 53%);
        }
    }
    .edit-play-game .btn-more {
        position: absolute;
        width: 1.08rem;
        height: 2.22rem;
        background-color: #fff;
        -webkit-box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        -webkit-border-radius: 0.24rem;
        border-radius: 0.24rem;
        top: 0;
        right: 0.15rem;
        text-align: center;
        line-height: 2.1rem;
        z-index: 99;
    }
    .bui-icon {
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        vertical-align: top;
        color: #20aae2;
        font-size: .6rem;
        padding-top: 0.8rem;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: contain;
        background-size: contain;
    }
`