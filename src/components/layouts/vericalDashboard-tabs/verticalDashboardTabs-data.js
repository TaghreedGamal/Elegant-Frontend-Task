import React from 'react';
import { AiOutlineDollarCircle} from 'react-icons/ai';
import { BiWalletAlt } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { VscDiffAdded,VscAccount } from 'react-icons/vsc';
import { RiDashboardLine, RiMessageLine,RiMoneyEuroCircleLine} from 'react-icons/ri';
import Analysis from '../../../pages/dashboard/analysis/analysis';
import PostNewAuction from '../../../pages/dashboard/post-new-auction/post-new-auction';

export const VerticalDashboardTabsData =[
    {
        title:'Dashboard',
        icon:<RiDashboardLine/>,
        content:<Analysis/>,
    },
    {
        title:'Post New Auction',
        icon:<VscDiffAdded/>,
        content:<PostNewAuction/>,
    },
    {
        title:'Wallet',
        icon:<BiWalletAlt/>,
        content:"Wallet"
    },
    {
        title:'Message',
        icon:<RiMessageLine/>,
        content:"Message"
    },
    {
        title:'Wish List',
        icon:<FaRegHeart/>,
        content:"Wish List"
    },
    {
        title:'Seller',
        icon:<AiOutlineDollarCircle/>,
        content:"Selelr"
    },
    {
        title:'Buyer',
        icon:<RiMoneyEuroCircleLine/>,
        content:"Buyer"
    },
    {
        title:'My Account',
        icon:<VscAccount/>,
        content:"My Account"
    },
]