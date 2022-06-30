import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 1000;
    a{
        flex: 1;
        display: flex;
        flex-direction: column; /* 图片在上文字在下 */
        align-items: center;
        justify-content: space-around;
        &.active{ /* & */
            color: #20aae2;
        }
        i{
            font-size: 2em;
        }
    }
`