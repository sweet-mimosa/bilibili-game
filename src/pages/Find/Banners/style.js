import styled from 'styled-components';

export const BannersWrapper = styled.div`
    .btn_banners{
        width:100%;
        height:100%;
        background:#fff;
        
    }
    .swiper-slide{
        display: flex;
        flex-wrap: wrap;   
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-item{
        display:flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        
    } 
    .swiper-item div{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:3vw;
    }
    .swiper-item div p{
        height:100%;
        width:100%;
        background: whitesmoke;
    }
    .swiper-item div img{
        height:100%;
        width:1rem;
    }
    .swiper-pagination{
        bottom: 0;
        
    }
    .swiper-pagination-bullet{
        border-radius: 50%;
        height: 5px;
    }
`