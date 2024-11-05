import React, {useState, useEffect} from 'react'
import Menu from './Menu'
import Pages from './Pages'
import Login from './Login'
import Nopermission from '../../pages/Nopermission'
import "./../../../styles/scripts/AuthPanel.scss"

function AuthPanel() {
  const [page, setPage] = useState(<Login />);


  useEffect(() => {
    setPage(<Login setPage = {setPage} />)
  }, [])


  //if (navigator.appVersion.includes('CitizenFX')) {
  return (
    <div className="authPanel_Container">
      <div className="authPanel">
        <Menu setPage={setPage}/>
        <Pages page={page} setPage={setPage}/>
      </div>
    </div>
  )
  //} else {
  //  return (
  //    <Nopermission />
  //  )
 // }
}

export default AuthPanel