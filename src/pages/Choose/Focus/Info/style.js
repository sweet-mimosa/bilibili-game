import styled from "styled-components";

export const InfoWrapper = styled.div`
    justify-content: center;
    width: 90%;
    border-radius: 0.5rem;
    border: 1px solid gray;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    .content {
        height: 2rem;
        font-size: 0.8rem;
    }

    .footer {
        padding-top: 0.5rem;
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: center;
        font-size: 0.5rem;
        color: #20aae2;
    }

    .customBody {
    color: var(--adm-color-success);
    }
`