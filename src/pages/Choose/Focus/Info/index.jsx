import React from 'react'
import {Card,Button} from 'antd-mobile'
import { InfoWrapper } from './style'

export default function Info({tab}) {
    return (
        <InfoWrapper>
            { tab === "1" && <Card 
            title={
                <div style={{fontWeight:'bolder',fontSize:'0.5rem'}}>
                    时空猎人3
                </div>
            }
            extra={
                <Button
                    color='primary'
                    borderRadius="2rem"
                    onClick={() => {}}>
                    下载
                </Button>}
            style={{ borderRadius: '0.5rem' }}
            >
            <div className="content">暂无更新</div>
            <div className="footer" onClick={e => e.stopPropagation()}>
                了解游戏更多详情内容
            </div>
        </Card>}
        { tab === "2" && <Card 
            title={
                <div style={{fontWeight:'bolder',fontSize:'0.5rem'}}>
                    神觉者
                </div>
            }
            extra={
                <Button
                    color='primary'
                    borderRadius="2rem"
                    onClick={() => {}}>
                    已下载
                </Button>}
            style={{ borderRadius: '0.5rem' }}
            >
            <div className="content">暂无更新</div>
            <div className="footer" onClick={e => e.stopPropagation()}>
                了解游戏更多详情内容
            </div>
        </Card>}
        { tab === "3" && <Card 
            title={
                <div style={{fontWeight:'bolder',fontSize:'0.5rem'}}>
                    明日方舟：终末地
                </div>
            }
            extra={
                <Button
                    color='primary'
                    borderRadius="2rem"
                    onClick={() => {}}>
                    预约
                </Button>}
            style={{ borderRadius: '0.5rem' }}
            >
            <div className="content">暂无更新</div>
            <div className="footer" onClick={e => e.stopPropagation()}>
                了解游戏更多详情内容
            </div>
        </Card>}
        { tab === "4" && <Card 
            title={
                <div style={{fontWeight:'bolder',fontSize:'0.5rem'}}>
                    明日方舟
                </div>
            }
            extra={
                <Button
                    color='primary'
                    borderRadius="2rem"
                    onClick={() => {}}>
                    下载
                </Button>}
            style={{ borderRadius: '0.5rem' }}
            >
            <div className="content">暂无更新</div>
            <div className="footer" onClick={e => e.stopPropagation()}>
                了解游戏更多详情内容
            </div>
        </Card>}
        </InfoWrapper>
    )
}
