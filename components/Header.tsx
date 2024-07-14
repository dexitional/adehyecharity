import Image from 'next/image'
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './ui/menubar';
import LogoMain from './LogoMain';
import MainNav from './MainNav';
import MobileNav from './MobileNav';


function Header() {

  const navigations = [
     { label: 'Who We Are', 
       link: '', 
       subMenu : [
          { label: 'Our Mission, Vision and Values', link: '' },
          { label: 'Our Team', link: '' },
          { label: 'Meet our Fundraisers', link: '' },
          { label: 'Contact Us', link: '' },
          
       ] 
     },
     { label: 'What We Do', 
        link: '', 
        subMenu : [
           { label: 'Our Projects', link: '/projects' },
           { label: 'Our Approach', link: '/approach' },
           { label: 'Stories of Change', link: '/change-stories' },
        ] 
     },

     { label: 'Take Action', 
        link: '', 
        subMenu : [
           { label: 'Become A Volunteer', link: '/volunteer' },
           { label: 'Fundraise for ACO', link: 'fundraiser' },
           { label: 'Become a Monthly Donor', link: 'month-donor' },
           { label: 'Become a Corporate Partner', link: 'partner' },
        ] 
     },
     { label: 'News & Stories', 
        link: '', 
        subMenu : [
            { label: 'Newsroom', link: '/newsroom' },
           { label: 'Adehye Stories', link: 'stories' },
           { label: 'Newsletters', link: 'newsletters' },
        ] 
     }
  ];

  return (
    <header className="z-20 sm:sticky sm:top-0 bg-white w-full shadow-[0px_10px_10px_rgba(0,0,0,0.1)]">
        {/* Top Nav Bar */}
        <div className="hidden sm:block w-full bg-gray-800">
          <div className="mx-auto w-full h-7 max-w-7xl text-gray-300 text-xs flex items-center">the Art of Caring</div>
        </div>
        {/* Menu Bar */}
        <div className="w-full  ">
          <div className="hidden mx-auto w-full sm:h-[7rem] sm:max-w-7xl sm:flex items-center justify-between ">
            <LogoMain />
            <MainNav data={navigations} />
          </div>
        </div>
        <MobileNav data={navigations} />
    </header>
  )
}

export default Header