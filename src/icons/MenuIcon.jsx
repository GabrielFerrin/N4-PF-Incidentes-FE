const MenuIcon = ({ logo }) => {
  return (
    <>
      {logo === 'home' && (
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.88 26.88" height={30}>
          <path fill="currentColor" d="M15.78,14.99h-4.6c0,.12,0,.23,0,.33,0,2.49,0,4.97,0,7.46,0,.58-.2,.78-.78,.78-1.77,0-3.54,0-5.31,0-.53,0-.75-.21-.75-.74,0-4.03,0-8.05,0-12.08,0-.32,.11-.56,.37-.76,2.81-2.17,5.6-4.36,8.4-6.54,.24-.19,.41-.18,.67,.02,1.69,1.32,3.39,2.63,5.08,3.95,1.09,.85,2.18,1.71,3.29,2.55,.28,.21,.39,.46,.39,.81,0,3.96,0,7.92,0,11.88,0,.12,0,.24,0,.36,.02,.3-.16,.53-.47,.55-.14,.01-.27,0-.41,0-1.71,0-3.42,0-5.13,0-.54,0-.75-.21-.75-.76,0-2.49,0-4.97,0-7.46,0-.11,0-.22,0-.35Zm5.7,7.43c0-.09,.02-.15,.02-.21,0-3.71,0-7.42,0-11.14,0-.11-.08-.26-.17-.33-2.55-1.98-5.1-3.95-7.65-5.93-.15-.12-.24-.11-.39,0-2.54,1.97-5.08,3.94-7.63,5.91-.15,.11-.2,.23-.2,.4,0,3.67,0,7.34,0,11.01,0,.24,.07,.3,.3,.3,1.34,0,2.67,0,4.01,0,.09,0,.18-.01,.29-.02,0-.13,0-.24,0-.35,0-2.49,0-4.97,0-7.46,0-.55,.2-.75,.75-.75,1.77,0,3.54,0,5.31,0,.59,0,.77,.19,.77,.78,0,2.49,0,4.99,0,7.48,0,.24,.05,.32,.3,.32,1.34-.01,2.67,0,4.01,0,.08,0,.17,0,.28-.01Z" />
          <rect className="cls-2" fill="none" stroke="inherit" strokeWidth=".25px" strokeMiterlimit="10" x=".12" y=".12" width="26.62" height="26.63" rx="1.94" ry="1.94" />
        </svg>)}
    </>
  )
}

MenuIcon.propTypes = null

export default MenuIcon