import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: sticky;
    border-top-color: #fff;
    border-top-width: 0;
    border-top-style: solid;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    max-width: 10.8rem;
    height: auto;
    line-height: 1.47rem;
    box-shadow: 0 1px 0.12rem -2px rgb(0 0 0 / 15%);
    .top{
        position: relative;
        width: 100%;
        height: 1.44rem;
    }
    .t-left{
        left: 0;
        top: 0;
        height: 100%;
        width: 1.44rem;
        z-index: 10;
        position: absolute;
    }
    .t-back{
        height: 100%;
        display: block;
        position: relative;
    }
    .back-icon{
        z-index: 2;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        font-size: 0.57rem;;
        font-weight: 1;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: top;
        color: #20aae2;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: contain;
        background-size: contain;
    }
    .t-center{
        position: relative;
        z-index: 5;
        text-align: center;
        font-size: .5rem;
        color: #fff;
        margin: 0;
        padding: 0 1.44rem;
        height: 1.44rem;
        line-height: 1.47rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .t-txt{
        display: block;
        color: #333;
        font-size: .48rem;
        padding: 0 0.12rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .t-notice{
        right: 1.44rem;
        width: 1rem;
        position: absolute;
        top: 0;
        height: 100%;
        width: 1.44rem;
        z-index: 10;
    }
    .bell-icon{
        z-index: 2;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        font-size: 0.6rem;;
        font-weight: 1;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: top;
        color: #20aae2;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: contain;
        background-size: contain;
    }
    .t-right{
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1.44rem;
        z-index: 10;
    }
    .t-search{
        height: 100%;
        position: relative;
        padding: 0.4rem 1rem 0.4rem 0.3rem;
        display: block;
        box-sizing: border-box;
    }
    .search-icon{
        z-index: 2;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        font-size: 0.6rem;;
        font-weight: 1;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: top;
        color: #20aae2;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: contain;
        background-size: contain;
    }
`