import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SetActiveTab } from '../../../redux/features/navigateSlice'
import { House, Search, Plus, MessageCircle, User, Settings } from 'lucide-react'

const center = () => {

    const tabs = [
        { tabName: 'Dashboard', icon: House },
        { tabName: 'Browse', icon: Search },
        { tabName: 'Sell', icon: Plus },
        { tabName: 'MyItems', icon: Plus },
        { tabName: 'Messages', icon: MessageCircle },
        { tabName: 'Profile', icon: User },
        { tabName: 'Settings', icon: Settings },
    ]


    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.navigator.activeTab)
    return (
        <div className='flex gap-1'>
            {tabs.map((elem, idx) => {
                return (
                    <NavLink
                        to={`/${elem.tabName}`}
                        key={idx}
                        onClick={() => {
                            dispatch(SetActiveTab(elem.tabName))
                        }}
                    >
                        <button  className={`${(activeTab == elem.tabName?'b_gradient text-white':'')}  font-semibold flex items-center px-3 py-2 hover:bg-[#e9ebef] rounded-xl`}>
                            <elem.icon className='mr-4' strokeWidth={2} size={18} />
                            {elem.tabName}
                        </button>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default center
