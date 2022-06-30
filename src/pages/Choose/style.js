import styled from "styled-components";

export const ChooseWrapper = styled.div`
    overflow-y: scroll;
    z-index: 5000;
    ul{
        background-color:#ffffff;
        width:100%;
        display:flex;
        overflow-x: auto;
        li{
            height:1rem;
            line-height:1rem;
            /* margin:0 39.5px; */
            justify-content: center;
            align-items: center;
            display: flex;
            flex: 1;
            font-size:0.5rem;
            float:left;
            flex-shrink:0;
            margin-bottom:15px;
            /* margin-top:25px; */
            position:relative;
            &.active{
                color: #20aae2;
                font-weight:bold;
            }
            &.active::after{
                content:"";
                display:block;
                width:30%;
                height:3px;
                background-color: #20aae2;
                position:absolute;
                top:100%;
            }
        }
    }
`