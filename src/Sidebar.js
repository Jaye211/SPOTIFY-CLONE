import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
        <img 
        className="sidebar__logo"
        src="https://www.mindphp.com/images/content/2017-02/Spotify-logo.jpg"
         alt=""/>
         <SidebarOption Icon={HomeIcon} title="Home" />
         <SidebarOption Icon={SearchIcon} title="Search" />
         <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

         <br />
         <strong className="sidebar__title">PLAYLISTS</strong>
         <hr />

         {playlists?.items?.map(playlists => (
            <SidebarOption title={playlists.name} />

         ))}

         
         <SidebarOption title='Rock' />
         <SidebarOption title='Rnb' />
    </div>
  )
}

export default Sidebar