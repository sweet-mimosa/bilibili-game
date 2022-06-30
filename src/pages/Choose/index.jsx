import React,{useState,useEffect} from "react";
import { ChooseWrapper } from './style'
import { getGameList } from '../../api/request'
import Banners from './Banners'
import New from "./New";
import Focus from './Focus'
import classnames from 'classnames'


const Choose = () => {
    const [gameData,setGameData] = useState([]);
    const [tab,setTab] = useState('新游');
    const changeTab = (target) => {
        setTab(target);
    }
    useEffect(() => {
        (async () => {
            let { data } = await getGameList();
            setGameData(data);
        })();
    },[]);
    return(
        <ChooseWrapper>
            {/* <Banners/> */}
            <ul>
                <li></li>
                <li className={classnames({active:tab==="新游"})} onClick={changeTab.bind(null,'新游')}>新游</li>
                <li className={classnames({active:tab==="关注"})} onClick={changeTab.bind(null,'关注')}>关注</li>
                <li></li>
            </ul>
            {tab === "新游" && <New source={gameData}/>}
            {tab === "关注" && <Focus/>}
        </ChooseWrapper>
    )
}

export default Choose;
