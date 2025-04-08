import React from 'react';
import { useState } from 'react';
import users from '../data/users.json';
import Ingredient from '../components/Ingredient';
import Recipes from "../data/recipes.json"

function Recipes() {
  const currentUser = users[0];

  const favRecipes  = Object.keys(currentUser.favorite_recipes);
  const recentRecipes = Object.keys(currentUser.recently_recipes);


  return <div data-layer="Recipes Search Tab" style={{width: 800, height: 1280, position: 'relative', background: '#FFFFF9', overflow: 'hidden'}}>
  <div data-layer="nav bar" style={{width: 799, height: 131, paddingLeft: 106, paddingRight: 106, paddingTop: 11, paddingBottom: 11, left: 0, top: 1149, position: 'absolute', background: 'rgba(168, 202, 186, 0)', borderTop: '3px var(--Aqua, #A8CABA) solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div data-layer="nav tab" data-type="pantry" style={{width: 91, height: 91, position: 'relative'}}>
      <div data-layer="Ellipse 2" style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: 'rgba(236, 227, 170, 0)', borderRadius: 9999}} />
      <div data-svg-wrapper data-layer="Fridge icon" style={{left: 22, top: 16, position: 'absolute'}}>
      <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 0H6C2.691 0 0 2.691 0 6V21H12V12H18V21H48V6C48 2.691 45.309 0 42 0ZM18 39H12V24H0V54C0 57.309 2.691 60 6 60H42C45.309 60 48 57.309 48 54V24H18V39Z" fill="#C96448"/>
      </svg>
      </div>
    </div>
    <div data-layer="nav tab" data-type="list" style={{width: 91, height: 91, position: 'relative'}}>
      <div data-layer="Ellipse 2" style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: 'rgba(236, 227, 170, 0)', borderRadius: 9999}} />
      <div data-svg-wrapper data-layer="List icon" style={{left: 18, top: 18, position: 'absolute'}}>
      <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6668 55H49.6043C51.1238 55 52.581 54.3964 53.6555 53.322C54.7299 52.2475 55.3335 50.7903 55.3335 49.2708V44.6875C55.3335 43.168 54.7299 41.7108 53.6555 40.6364C52.581 39.5619 51.1238 38.9583 49.6043 38.9583H18.6668V55ZM18.6668 34.375H49.6043C51.1238 34.375 52.581 33.7714 53.6555 32.697C54.7299 31.6225 55.3335 30.1653 55.3335 28.6458V26.3542C55.3335 24.8347 54.7299 23.3775 53.6555 22.303C52.581 21.2286 51.1238 20.625 49.6043 20.625H18.6668V34.375ZM14.0835 20.625V34.375H6.06266C4.54319 34.375 3.08596 33.7714 2.01153 32.697C0.937103 31.6225 0.333496 30.1653 0.333496 28.6458V26.3542C0.333496 24.8347 0.937103 23.3775 2.01153 22.303C3.08596 21.2286 4.54319 20.625 6.06266 20.625H14.0835ZM18.6668 16.0417H49.6043C51.1238 16.0417 52.581 15.4381 53.6555 14.3636C54.7299 13.2892 55.3335 11.832 55.3335 10.3125V5.72917C55.3335 4.2097 54.7299 2.75246 53.6555 1.67803C52.581 0.603607 51.1238 0 49.6043 0H18.6668V16.0417ZM14.0835 0V16.0417H6.06266C4.54319 16.0417 3.08596 15.4381 2.01153 14.3636C0.937103 13.2892 0.333496 11.832 0.333496 10.3125V5.72917C0.333496 4.2097 0.937103 2.75246 2.01153 1.67803C3.08596 0.603607 4.54319 0 6.06266 0H14.0835ZM14.0835 38.9583V55H6.06266C4.54319 55 3.08596 54.3964 2.01153 53.322C0.937103 52.2475 0.333496 50.7903 0.333496 49.2708V44.6875C0.333496 43.168 0.937103 41.7108 2.01153 40.6364C3.08596 39.5619 4.54319 38.9583 6.06266 38.9583H14.0835Z" fill="#C96448"/>
      </svg>
      </div>
    </div>
    <div data-layer="nav tab" data-type="kitchen" style={{width: 91, height: 91, position: 'relative'}}>
      <div data-layer="Ellipse 2" style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: 'rgba(236, 227, 170, 0)', borderRadius: 9999}} />
      <div data-svg-wrapper data-layer="chef hat icon" style={{left: 18, top: 16, position: 'absolute'}}>
      <svg width="57" height="61" viewBox="0 0 57 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.6665 0C23.4497 0 18.8518 3.44842 17.3781 8.45895C15.816 7.75158 14.1655 7.36842 12.456 7.36842C9.32921 7.36842 6.33052 8.61052 4.11956 10.8215C1.90861 13.0324 0.666504 16.0311 0.666504 19.1579C0.673487 21.7688 1.5448 24.3039 3.14441 26.3674C4.74402 28.4309 6.98189 29.9066 9.50861 30.5642L9.50861 51.5789H47.8244V30.5642C53.0118 29.2084 56.6665 24.5221 56.6665 19.1579C56.6665 16.0311 55.4244 13.0324 53.2134 10.8215C51.0025 8.61052 48.0038 7.36842 44.877 7.36842C43.1676 7.36842 41.517 7.75158 39.9549 8.45895C38.4812 3.44842 33.8833 0 28.6665 0ZM27.1928 26.5263L30.1402 26.5263L30.1402 47.1579H27.1928L27.1928 26.5263ZM18.3507 32.4211H21.2981V47.1579H18.3507V32.4211ZM36.0349 32.4211H38.9823V47.1579H36.0349V32.4211ZM9.50861 54.5263V57.4737C9.50861 58.2554 9.81913 59.0051 10.3719 59.5578C10.9246 60.1105 11.6743 60.4211 12.456 60.4211H44.877C45.6587 60.4211 46.4084 60.1105 46.9611 59.5578C47.5139 59.0051 47.8244 58.2554 47.8244 57.4737V54.5263H9.50861Z" fill="#C96448"/>
      </svg>
      </div>
    </div>
    <div data-layer="nav tab" data-type="profile" style={{width: 91, height: 91, position: 'relative'}}>
      <div data-layer="Ellipse 2" style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: 'rgba(236, 227, 170, 0)', borderRadius: 9999}} />
      <div data-svg-wrapper data-layer="Profile icon" style={{left: 15, top: 16, position: 'absolute'}}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 3.2962e-10C33.9396 -1.84668e-05 37.8407 0.775939 41.4804 2.28357C45.1202 3.7912 48.4274 6.00097 51.2132 8.78673C53.9989 11.5725 56.2087 14.8797 57.7164 18.5194C59.224 22.1592 60 26.0603 60 29.9999C60 46.5685 46.5685 60 29.9999 60C13.4315 60 0 46.5685 0 29.9999C0 13.4315 13.4315 3.2962e-10 29.9999 3.2962e-10ZM33 33H27C19.5729 33 13.1965 37.4982 10.4463 43.9193C14.7978 50.0211 21.9342 54 29.9999 54C38.0656 54 45.202 50.0211 49.5537 43.9188C46.8035 37.4982 40.4271 33 33 33ZM29.9999 8.99999C25.0294 8.99999 20.9999 13.0295 20.9999 18C20.9999 22.9705 25.0294 27 29.9999 27C34.9705 27 38.9999 22.9705 38.9999 18C38.9999 13.0295 34.9706 8.99999 29.9999 8.99999Z" fill="#C96448"/>
      </svg>
      </div>
    </div>
  </div>
  <div data-layer="K" style={{width: 75, height: 73, left: 60, top: 60, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#B55136', fontSize: 96, fontFamily: 'Plaster', fontWeight: '400', wordWrap: 'break-word'}}>K</div>
  <div data-layer="My Recipes" style={{width: 305, left: 276, top: 74, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#C96448', fontSize: 36, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>My Recipes</div>
  <div data-layer="Rectangle 23" style={{width: 670, height: 973, left: 65, top: 175, position: 'absolute', background: '#E4E8E4', boxShadow: '0px 3px 2px rgba(79, 98, 89, 0.10) inset', borderTopLeftRadius: 50, borderTopRightRadius: 50}} />
 

 
  <div data-layer="Search Bar" style={{width: 630, left: 76, top: 262, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'inline-flex'}}>
    <div data-layer="Search Bar Object" data-version="Default" style={{alignSelf: 'stretch', boxShadow: '0px 3px 2px rgba(79, 98, 89, 0.10)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>

      
      <div data-layer="Frame 1" style={{flex: '1 1 0', height: 58, paddingLeft: 15, paddingRight: 15, background: '#FFFFF9', borderRadius: 100, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
        <div data-svg-wrapper data-layer="material-symbols:search-rounded" style={{position: 'relative'}}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 21.3333C10.2444 21.3333 8.19467 20.4942 6.51733 18.816C4.84 17.1378 4.00089 15.088 4 12.6667C3.99911 10.2453 4.83822 8.19556 6.51733 6.51733C8.19645 4.83911 10.2462 4 12.6667 4C15.0871 4 17.1373 4.83911 18.8173 6.51733C20.4973 8.19556 21.336 10.2453 21.3333 12.6667C21.3333 13.6444 21.1778 14.5667 20.8667 15.4333C20.5556 16.3 20.1333 17.0667 19.6 17.7333L27.0667 25.2C27.3111 25.4444 27.4333 25.7556 27.4333 26.1333C27.4333 26.5111 27.3111 26.8222 27.0667 27.0667C26.8222 27.3111 26.5111 27.4333 26.1333 27.4333C25.7556 27.4333 25.4444 27.3111 25.2 27.0667L17.7333 19.6C17.0667 20.1333 16.3 20.5556 15.4333 20.8667C14.5667 21.1778 13.6444 21.3333 12.6667 21.3333ZM12.6667 18.6667C14.3333 18.6667 15.7502 18.0836 16.9173 16.9173C18.0844 15.7511 18.6676 14.3342 18.6667 12.6667C18.6658 10.9991 18.0827 9.58267 16.9173 8.41733C15.752 7.252 14.3351 6.66844 12.6667 6.66667C10.9982 6.66489 9.58178 7.24844 8.41733 8.41733C7.25289 9.58622 6.66933 11.0027 6.66667 12.6667C6.664 14.3307 7.24756 15.7476 8.41733 16.9173C9.58711 18.0871 11.0036 18.6702 12.6667 18.6667Z" fill="#9AAAA2"/>
        </svg>
        </div>
        <div data-layer="Search your Kitchen" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#3E4843', fontSize: 20, fontFamily: 'Lexend', fontWeight: '300', wordWrap: 'break-word'}}>Search for Recipes</div>
      </div>
    </div>
    <div data-layer="Frame 16" style={{alignSelf: 'stretch', height: 42}} />
  </div>
  <div data-layer="Recipe Finder Header" style={{width: 352, left: 215, top: 175, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div data-layer="Frame 18" style={{height: 63, minWidth: 275, paddingLeft: 32, paddingRight: 32, paddingTop: 16, paddingBottom: 16, background: '#FFFFF9', boxShadow: '0px 3px 2px rgba(79, 98, 89, 0.10)', borderBottomRightRadius: 25, borderBottomLeftRadius: 25, justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
      <div data-layer="Recipe Finder" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#202124', fontSize: 24, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Recipe Finder</div>
      <div data-svg-wrapper data-layer="edit" style={{position: 'relative'}}>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3932 3.1C13.9917 2.50172 14.8034 2.16569 15.6497 2.16585C16.4959 2.166 17.3075 2.50233 17.9057 3.10083C18.504 3.69934 18.84 4.511 18.8399 5.35726C18.8397 6.20351 18.5034 7.01505 17.9049 7.61333L17.5149 8.00333L13.0032 3.49167L13.3932 3.1ZM11.8249 4.67L3.24991 13.2433C3.13417 13.3596 3.05532 13.5074 3.02324 13.6683L2.18324 17.835C2.15584 17.9697 2.16216 18.109 2.20165 18.2406C2.24114 18.3723 2.31257 18.4921 2.40958 18.5894C2.50659 18.6868 2.62617 18.7586 2.75766 18.7985C2.88915 18.8385 3.02848 18.8453 3.16324 18.8183L7.33658 17.985C7.49766 17.9525 7.64552 17.873 7.76157 17.7567L16.3366 9.18167L11.8249 4.67Z" fill="#3E4843"/>
      </svg>
      </div>
    </div>
  </div>
  <div data-layer="Browse Recipes" style={{width: 674, height: 249, left: 635, top: 451, position: 'absolute'}}>
    <div data-layer="Browse Recipes Header" style={{width: 549, height: 215, left: -585, top: -96, position: 'absolute'}}>
      <div data-layer="Browse Recipes Header" style={{width: 352, height: 78, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div data-layer="Browse Recipes" style={{width: 295, height: 78, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 36, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Browse Recipes</div>
      </div>
      <div data-layer="Recipe Card 3" style={{width: 162, height: 137, left: 29, top: 78, position: 'absolute'}}>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 0, top: 0, position: 'absolute'}}>
        <svg width="161" height="137" viewBox="0 0 161 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" fill="#C96448"/>
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 45, top: 84, position: 'absolute'}}>
        <svg width="117" height="53" viewBox="0 0 117 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" fill="#ECE3AA"/>
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-layer="Recipes for Griffin" style={{width: 107, left: 50, top: 91, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4F6259', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Recipes for Griffin</div>
      </div>
      <div data-layer="Recipe Card 2" style={{width: 162, height: 137, left: 210, top: 78, position: 'absolute'}}>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 0, top: 0, position: 'absolute'}}>
        <svg width="161" height="137" viewBox="0 0 161 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" fill="#C96448"/>
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 45, top: 84, position: 'absolute'}}>
        <svg width="117" height="53" viewBox="0 0 117 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" fill="#ECE3AA"/>
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-layer="Recipes for Griffin" style={{width: 107, left: 50, top: 91, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4F6259', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Healthy Recipes</div>
      </div>
      <div data-layer="Recipe Card 1" style={{width: 162, height: 137, left: 387, top: 78, position: 'absolute'}}>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 0, top: 0, position: 'absolute'}}>
        <svg width="161" height="137" viewBox="0 0 161 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" fill="#C96448"/>
        <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-svg-wrapper data-layer="Browsing Card" style={{left: 45, top: 84, position: 'absolute'}}>
        <svg width="117" height="53" viewBox="0 0 117 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" fill="#ECE3AA"/>
        <rect x="0.5" y="0.5" width="116" height="52" rx="19.5" stroke="black"/>
        </svg>
        </div>
        <div data-layer="Recipes for Griffin" style={{width: 107, left: 50, top: 91, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4F6259', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Popular Recipes</div>
      </div>
    </div>
    <div data-layer="View All Button (Browse Recipes)" style={{width: 107, height: 34, paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5, left: -18, top: -60, position: 'absolute', background: '#D5D5D5', borderRadius: 100, outline: '1px black solid', outlineOffset: '-1px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div data-layer="Text" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>View All</div>
      <div data-svg-wrapper data-layer="drop arrow" data-direction="down">
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.195377 11.0995L0.195377 0.899536C0.195701 0.796267 0.224183 0.695041 0.277758 0.606754C0.331332 0.518468 0.407969 0.446465 0.499422 0.398495C0.590875 0.350524 0.693679 0.328403 0.796768 0.334514C0.899857 0.340624 0.999328 0.374734 1.08447 0.433171L8.4511 5.53315C8.75653 5.74451 8.75653 6.25338 8.4511 6.46531L1.08447 11.5653C0.999506 11.6243 0.899984 11.6589 0.796724 11.6654C0.693463 11.6718 0.590411 11.6498 0.498765 11.6018C0.407119 11.5538 0.330383 11.4816 0.276896 11.393C0.223408 11.3045 0.195214 11.2029 0.195377 11.0995Z" fill="black"/>
      </svg>
      </div>
    </div>
    <div data-svg-wrapper data-layer="Browsing Card" style={{left: -18, top: -18, position: 'absolute'}}>
    <svg width="161" height="137" viewBox="0 0 161 137" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" fill="#C96448"/>
    <rect x="0.5" y="0.5" width="160" height="136" rx="19.5" stroke="black"/>
    </svg>
    </div>
  </div>
  <div data-layer="Saved Recipes Div" style={{width: 670, height: 249, left: 65, top: 591, position: 'absolute'}}>
    <div data-layer="Saved Recipes Header" style={{width: 429.58, height: 90.33, left: -52, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
      <div data-layer="Saved Recipes Header Text" style={{width: 295, height: 78, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 36, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Saved Recipes</div>
    </div>
    <div data-layer="Component 14" style={{width: 470, height: 245, left: 0, top: 90, position: 'absolute'}}>
      <div data-layer="Component 7" style={{width: 470, height: 245, left: 0, top: 0, position: 'absolute'}}>
        <div data-layer="Ingredients" style={{width: 311, height: 245, left: 18, top: -16, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div data-layer="Ingredient" style={{alignSelf: 'stretch', height: 149, boxShadow: '0px 0px 7px rgba(79, 98, 89, 0.20)', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div data-layer="Ingredient Actions" style={{flex: '1 1 0', paddingTop: 24, paddingBottom: 24, paddingLeft: 24, paddingRight: 32, background: '#FFFFF9', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
              <div data-layer="Frame 7" style={{width: 314, height: 95, position: 'relative'}}>
                <div data-layer="Filter Icons" data-type="Protien" style={{width: 22, height: 22, left: 250.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#9747FF', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="P" style={{width: 6, height: 4, left: 6, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
                </div>
                <div data-layer="Filter Icons/Component 20/vegetarian" style={{width: 22, height: 22, left: 268.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#5A8E42', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                </div>
                <div data-layer="Chicken Pasta" style={{width: 198, height: 80, left: 137.50, top: -31, position: 'absolute', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 24, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Pasta</div>
                <div data-layer="Time" style={{width: 47, height: 41.12, left: 137.50, top: 55, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10.5594C1 11.7413 1.23279 12.9117 1.68508 14.0036C2.13738 15.0955 2.80031 16.0877 3.63604 16.9234C4.47177 17.7591 5.46392 18.4221 6.55585 18.8744C7.64778 19.3267 8.8181 19.5594 10 19.5594C11.1819 19.5594 12.3522 19.3267 13.4442 18.8744C14.5361 18.4221 15.5282 17.7591 16.364 16.9234C17.1997 16.0877 17.8626 15.0955 18.3149 14.0036C18.7672 12.9117 19 11.7413 19 10.5594C19 8.1725 18.0518 5.88331 16.364 4.19549C14.6761 2.50766 12.3869 1.55945 10 1.55945C7.61305 1.55945 5.32387 2.50766 3.63604 4.19549C1.94821 5.88331 1 8.1725 1 10.5594Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.55945L1 6.55945L4 9.55945" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-layer="20m" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>20m</div>
                </div>
                <div data-layer="People" style={{width: 29.10, height: 41.12, left: 207.50, top: 55, position: 'absolute'}}>
                  <div data-svg-wrapper data-layer="ic:round-people" style={{left: -5, top: 9, position: 'absolute'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="black"/>
                  </svg>
                  </div>
                  <div data-layer="3" style={{left: 20, top: 11, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>3</div>
                </div>
                <div data-layer="Filter Icons" data-type="Additional" style={{width: 31, height: 22, left: 284.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 19" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#72D842', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="Ellipse 20" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#8E908F', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="+2" style={{width: 28, height: 4, left: 3, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Ingredient photo" style={{width: 95, height: 95, left: 36, top: 11, position: 'absolute', background: '#B55136', borderRadius: 24}} />
    </div>
    <div data-layer="Saved Recipe Placeholder #1" style={{width: 470, height: 245, left: 335, top: 90, position: 'absolute'}}>
      <div data-layer="Component 7" style={{width: 470, height: 245, left: 0, top: 0, position: 'absolute'}}>
        <div data-layer="Saved Recipe Placeholder Button" style={{width: 311, height: 245, left: 18, top: -16, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div data-layer="Ingredient" style={{alignSelf: 'stretch', height: 149, boxShadow: '0px 0px 7px rgba(79, 98, 89, 0.20)', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div data-layer="Ingredient Actions" style={{flex: '1 1 0', paddingTop: 24, paddingBottom: 24, paddingLeft: 24, paddingRight: 32, background: '#FFFFF9', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
              <div data-layer="Frame 7" style={{width: 314, height: 95, position: 'relative'}}>
                <div data-layer="Filter Icons" data-type="Protien" style={{width: 22, height: 22, left: 250.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#9747FF', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="P" style={{width: 6, height: 4, left: 6, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
                </div>
                <div data-layer="Filter Icons/Component 20/vegetarian" style={{width: 22, height: 22, left: 268.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#5A8E42', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                </div>
                <div data-layer="Chicken Pasta" style={{width: 198, height: 80, left: 137.50, top: -31, position: 'absolute', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 24, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Chicken Pasta</div>
                <div data-layer="Time" style={{width: 47, height: 41.12, left: 137.50, top: 55, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10.5594C1 11.7413 1.23279 12.9117 1.68508 14.0036C2.13738 15.0955 2.80031 16.0877 3.63604 16.9234C4.47177 17.7591 5.46392 18.4221 6.55585 18.8744C7.64778 19.3267 8.8181 19.5594 10 19.5594C11.1819 19.5594 12.3522 19.3267 13.4442 18.8744C14.5361 18.4221 15.5282 17.7591 16.364 16.9234C17.1997 16.0877 17.8626 15.0955 18.3149 14.0036C18.7672 12.9117 19 11.7413 19 10.5594C19 8.1725 18.0518 5.88331 16.364 4.19549C14.6761 2.50766 12.3869 1.55945 10 1.55945C7.61305 1.55945 5.32387 2.50766 3.63604 4.19549C1.94821 5.88331 1 8.1725 1 10.5594Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.55945L1 6.55945L4 9.55945" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-layer="20m" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>20m</div>
                </div>
                <div data-layer="People" style={{width: 29.10, height: 41.12, left: 207.50, top: 55, position: 'absolute'}}>
                  <div data-svg-wrapper data-layer="ic:round-people" style={{left: -5, top: 9, position: 'absolute'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="black"/>
                  </svg>
                  </div>
                  <div data-layer="3" style={{left: 20, top: 11, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>3</div>
                </div>
                <div data-layer="Filter Icons" data-type="Additional" style={{width: 31, height: 22, left: 284.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 19" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#72D842', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="Ellipse 20" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#8E908F', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="+2" style={{width: 28, height: 4, left: 3, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Ingredient photo" style={{width: 95, height: 95, left: 36, top: 11, position: 'absolute', background: '#B55136', borderRadius: 24}} />
    </div>
    <div data-layer="View All Button" style={{width: 107, height: 34, paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5, left: 552, top: 32, position: 'absolute', background: '#D5D5D5', borderRadius: 100, outline: '1px black solid', outlineOffset: '-1px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div data-layer="Text" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>View All</div>
      <div data-svg-wrapper data-layer="drop arrow" data-direction="down">
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.195377 11.0995L0.195377 0.899536C0.195701 0.796267 0.224183 0.695041 0.277758 0.606754C0.331332 0.518468 0.407969 0.446465 0.499422 0.398495C0.590875 0.350524 0.693679 0.328403 0.796768 0.334514C0.899857 0.340624 0.999328 0.374734 1.08447 0.433171L8.4511 5.53315C8.75653 5.74451 8.75653 6.25338 8.4511 6.46531L1.08447 11.5653C0.999506 11.6243 0.899984 11.6589 0.796724 11.6654C0.693463 11.6718 0.590411 11.6498 0.498765 11.6018C0.407119 11.5538 0.330383 11.4816 0.276896 11.393C0.223408 11.3045 0.195214 11.2029 0.195377 11.0995Z" fill="black"/>
      </svg>
      </div>
    </div>
  </div>
  <div data-layer="Recently Viewed Recipes Header" style={{width: 502, height: 78, left: 85, top: 832, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 36, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Recently Viewed Recipes</div>
  <div data-layer="Rec View Recipes" style={{width: 666, height: 289, left: 65, top: 848, position: 'absolute', overflow: 'hidden'}}>
    <div data-layer="View All Button (Rec View Recipes)" style={{width: 107, height: 34, paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5, left: 552, top: 37, position: 'absolute', background: '#D5D5D5', borderRadius: 100, outline: '1px black solid', outlineOffset: '-1px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div data-layer="Text" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>View All</div>
      <div data-svg-wrapper data-layer="drop arrow" data-direction="down">
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.195377 11.0995L0.195377 0.899567C0.195701 0.796297 0.224183 0.695071 0.277758 0.606785C0.331332 0.518498 0.407969 0.446495 0.499422 0.398525C0.590875 0.350554 0.693679 0.328434 0.796768 0.334544C0.899857 0.340654 0.999328 0.374764 1.08447 0.433202L8.4511 5.53318C8.75653 5.74454 8.75653 6.25341 8.4511 6.46534L1.08447 11.5653C0.999506 11.6243 0.899984 11.659 0.796724 11.6654C0.693463 11.6718 0.590411 11.6499 0.498765 11.6019C0.407119 11.5538 0.330383 11.4816 0.276896 11.3931C0.223408 11.3045 0.195214 11.203 0.195377 11.0995Z" fill="black"/>
      </svg>
      </div>
    </div>
    <div data-layer="Rec View Recipe Placeholder #2" style={{width: 470, height: 245, left: 337, top: 94, position: 'absolute'}}>
      <div data-layer="Component 7" style={{width: 470, height: 245, left: 0, top: 0, position: 'absolute'}}>
        <div data-layer="Rec View Recipe Placeholder #2 Button" style={{width: 311, height: 245, left: 18, top: -16, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div data-layer="Ingredient" style={{alignSelf: 'stretch', height: 149, boxShadow: '0px 0px 7px rgba(79, 98, 89, 0.20)', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div data-layer="Ingredient Actions" style={{flex: '1 1 0', paddingTop: 24, paddingBottom: 24, paddingLeft: 24, paddingRight: 32, background: '#FFFFF9', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
              <div data-layer="Frame 7" style={{width: 314, height: 95, position: 'relative'}}>
                <div data-layer="Filter Icons" data-type="Protien" style={{width: 22, height: 22, left: 250.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#9747FF', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="P" style={{width: 6, height: 4, left: 6, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
                </div>
                <div data-layer="Filter Icons/Component 20/vegetarian" style={{width: 22, height: 22, left: 268.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#5A8E42', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                </div>
                <div data-layer="Chocolate Ca.." style={{width: 269, height: 80, left: 133.50, top: -36, position: 'absolute', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 24, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Chocolate Ca..</div>
                <div data-layer="Time" style={{width: 47, height: 41.12, left: 137.50, top: 55, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10.5594C1 11.7413 1.23279 12.9117 1.68508 14.0036C2.13738 15.0955 2.80031 16.0877 3.63604 16.9234C4.47177 17.7591 5.46392 18.4221 6.55585 18.8744C7.64778 19.3267 8.8181 19.5594 10 19.5594C11.1819 19.5594 12.3522 19.3267 13.4442 18.8744C14.5361 18.4221 15.5282 17.7591 16.364 16.9234C17.1997 16.0877 17.8626 15.0955 18.3149 14.0036C18.7672 12.9117 19 11.7413 19 10.5594C19 8.1725 18.0518 5.88331 16.364 4.19549C14.6761 2.50766 12.3869 1.55945 10 1.55945C7.61305 1.55945 5.32387 2.50766 3.63604 4.19549C1.94821 5.88331 1 8.1725 1 10.5594Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.55945L1 6.55945L4 9.55945" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-layer="10m" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>10m</div>
                </div>
                <div data-layer="People" style={{width: 29.10, height: 41.12, left: 207.50, top: 55, position: 'absolute'}}>
                  <div data-svg-wrapper data-layer="ic:round-people" style={{left: -5, top: 9, position: 'absolute'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="black"/>
                  </svg>
                  </div>
                  <div data-layer="2" style={{left: 20, top: 11, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>2</div>
                </div>
                <div data-layer="Filter Icons" data-type="Additional" style={{width: 31, height: 22, left: 284.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 19" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#72D842', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="Ellipse 20" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#8E908F', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="+2" style={{width: 28, height: 4, left: 3, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Ingredient photo" style={{width: 95, height: 95, left: 36, top: 11, position: 'absolute', background: '#B55136', borderRadius: 24}} />
    </div>
    <div data-layer="Rec View Recipe Placeholder #1" style={{width: 470, height: 245, left: 5, top: 94, position: 'absolute'}}>
      <div data-layer="Rec View Recipe Placeholder #1 Button" style={{width: 470, height: 245, left: 0, top: 0, position: 'absolute'}}>
        <div data-layer="Ingredients" style={{width: 311, height: 245, left: 18, top: -16, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div data-layer="Ingredient" style={{alignSelf: 'stretch', height: 149, boxShadow: '0px 0px 7px rgba(79, 98, 89, 0.20)', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div data-layer="Ingredient Actions" style={{flex: '1 1 0', paddingTop: 24, paddingBottom: 24, paddingLeft: 24, paddingRight: 32, background: '#FFFFF9', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
              <div data-layer="Frame 7" style={{width: 314, height: 95, position: 'relative'}}>
                <div data-layer="Filter Icons" data-type="Protien" style={{width: 22, height: 22, left: 250.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#9747FF', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="P" style={{width: 6, height: 4, left: 6, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>P</div>
                </div>
                <div data-layer="Filter Icons/Component 20/vegetarian" style={{width: 22, height: 22, left: 268.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 8" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#5A8E42', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                  <div data-layer="V" style={{width: 6, height: 4, left: 5, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>V</div>
                </div>
                <div data-layer="Spaghetti B..." style={{width: 269, height: 80, left: 133.50, top: -36, position: 'absolute', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 24, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>Spaghetti B...</div>
                <div data-layer="Time" style={{width: 47, height: 41.12, left: 137.50, top: 55, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10.5594C1 11.7413 1.23279 12.9117 1.68508 14.0036C2.13738 15.0955 2.80031 16.0877 3.63604 16.9234C4.47177 17.7591 5.46392 18.4221 6.55585 18.8744C7.64778 19.3267 8.8181 19.5594 10 19.5594C11.1819 19.5594 12.3522 19.3267 13.4442 18.8744C14.5361 18.4221 15.5282 17.7591 16.364 16.9234C17.1997 16.0877 17.8626 15.0955 18.3149 14.0036C18.7672 12.9117 19 11.7413 19 10.5594C19 8.1725 18.0518 5.88331 16.364 4.19549C14.6761 2.50766 12.3869 1.55945 10 1.55945C7.61305 1.55945 5.32387 2.50766 3.63604 4.19549C1.94821 5.88331 1 8.1725 1 10.5594Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-svg-wrapper data-layer="Vector">
                  <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.55945L1 6.55945L4 9.55945" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  <div data-layer="60m" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>60m</div>
                </div>
                <div data-layer="People" style={{width: 29.10, height: 41.12, left: 207.50, top: 55, position: 'absolute'}}>
                  <div data-svg-wrapper data-layer="ic:round-people" style={{left: -5, top: 9, position: 'absolute'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="black"/>
                  </svg>
                  </div>
                  <div data-layer="4" style={{left: 20, top: 11, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>4</div>
                </div>
                <div data-layer="Filter Icons" data-type="Additional" style={{width: 31, height: 22, left: 284.50, top: 65, position: 'absolute'}}>
                  <div data-layer="Ellipse 19" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#72D842', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="Ellipse 20" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#8E908F', borderRadius: 9999, border: '0.50px black solid'}} />
                  <div data-layer="+2" style={{width: 28, height: 4, left: 3, top: 9, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 13, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word'}}>+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Ingredient photo" style={{width: 95, height: 95, left: 36, top: 11, position: 'absolute', background: '#B55136', borderRadius: 24}} />
    </div>
  </div>
</div>
}

export default Recipes;
