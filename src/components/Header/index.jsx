import React,{ useState, }  from 'react'
import {HeaderWrapper} from './style'
import { pageTitle } from '../../config'
import { useLocation } from 'react-router'
import { useEffect } from 'react';

export default function Header() {
    const [title,setTitle] = useState();
    const {pathname='/'} = useLocation();
    useEffect(() => {
        let _title = pageTitle[pathname] || '';
        setTitle(_title);
    });
    return (
        <HeaderWrapper>
            <div className="top">
                <div className="t-left">
                    <div className="t-back">
                        <span className="fa fa-arrow-left back-icon"></span>
                    </div>
                </div>
                <div className="t-center">
                    <span className='t-txt'>{title}</span>
                </div>
                <div className="t-notice">
                    <span className="fa fa-bell-o bell-icon"></span>
                </div>
                <div className="t-right">
                    <div className="t-search">
                        <span className="fa fa-search search-icon"></span>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}
