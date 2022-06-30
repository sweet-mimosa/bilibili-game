import styled from 'styled-components';

export const VideoWrapper = styled.div`
    height: 250px;
    .blg-ai-video-item {
        position: relative;
        max-width: 10.08rem;
        min-height: 8.28rem;
        background-color: #fff;
        -webkit-box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        -webkit-border-radius: 0.3rem;
        border-radius: 0.3rem;
        margin: 0.48rem auto 0;
    }
    .blg-ai-video-item .img-cover {
        position: relative;
        width: 100%;
        height: 5.67rem;
        overflow: hidden;
    }
    .blg-ai-video-item .img-cover .item-pic {
        -webkit-border-radius: 0.3rem 0.3rem 0 0;
        border-radius: 0.3rem 0.3rem 0 0;
        height: auto;
        border: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .blg-ai-video-item .img-cover .bg-shade {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.8rem;
        background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
        background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.6));
        background: -o-linear-gradient(top,transparent 0,rgba(0,0,0,.6) 100%);
        background: linear-gradient(-180deg,transparent,rgba(0,0,0,.6));
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers {
        position: absolute;
        width: 100%;
        height: auto;
        padding: 0 0.45rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        bottom: 0.18rem;
        font-size: 0;
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers .video-time {
        position: relative;
        font-size: .3rem;
        color: #fff;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0.06rem 0.15rem;
        margin-right: 0.36rem;
        background-color: rgba(0,0,0,.36);
        -webkit-border-radius: 0.12rem;
        border-radius: 0.12rem;
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers .barrage-num, .blg-ai-video-item .img-cover .bg-shade .numbers .view-num {
        position: relative;
        font-size: .3rem;
        color: #fff;
        line-height: .45rem;
        margin-right: 0.36rem;
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .game-desc {
        position: relative;
        width: 100%;
        min-height: 2.61rem;
        padding: 0.3rem 0.36rem 0.42rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .blg-ai-video-item .game-desc .title {
        font-size: .48rem;
        color: #333;
        line-height: .72rem;
        overflow: hidden;
        max-height: 1.41rem;
    }
    .blg-ai-video-item .game-desc .user-desc {
        position: relative;
        font-size: 0;
        width: 100%;
        height: auto;
        margin-top: 0.09rem;
        left: -3rem;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face {
        position: relative;
        width: 0.9rem;
        height: 0.9rem;
        border: 1px solid;
        border-color: rgba(0,0,0,.1);
        display: inline-block;
        vertical-align: middle;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        margin-right: 0.18rem;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face .verify-type {
        position: absolute;
        display: none;
        bottom: 0;
        right: 0;
        width: 0.3rem;
        height: 0.3rem;
        line-height: .3rem;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        background-color: #fff;
        text-align: center;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face .item-pic {
        -webkit-border-radius: 100%;
        border-radius: 100%;
        border: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .blg-ai-video-item .game-desc .user-desc .desc {
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .game-desc .user-desc .desc .name, .blg-ai-video-item .game-desc .user-desc .desc .time {
        font-size: .36rem;
        color: #999;
        line-height: .54rem;
        max-width: 3.9rem;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .blg-ai-video-item .game-desc .user-desc .game-tag {
        position: absolute;
        font-size: .36rem;
        color: #20aae2;
        line-height: .36rem;
        background-color: #def2fb;
        -webkit-border-radius: 0.36rem;
        border-radius: 0.36rem;
        padding: 0.09rem 0.27rem;
        max-width: 3.6rem;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        right: -3rem;
        top: 0.1rem;
    }
    .blg-ai-video-item .game-desc .user-desc .game-tag .bui-icon {
        vertical-align: middle;
        font-size: .54rem;
        color: #7bcdef;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        padding-top: 0;
    }
`