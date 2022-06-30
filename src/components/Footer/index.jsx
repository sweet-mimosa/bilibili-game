import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {FooterWrapper} from './style'
import classnames from 'classnames'

export default function Footer() {
    const { pathname } = useLocation();
    return (
        <FooterWrapper>
            <Link to='/' className={classnames({active:pathname == '/'})}>
                <i className="iconfont icon-shouye"></i>
                <span>精选</span>
            </Link>
            <Link to='/find' className={classnames({active:pathname == '/find'})}>
                <i className="iconfont icon-faxian"></i>
                <span>发现</span>
            </Link>
            <Link to='/mine' className={classnames({active:pathname == '/mine'})}>
                <i className="iconfont icon-wode"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
