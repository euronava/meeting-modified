import React, {useState} from 'react'
import img from '../assets/color.png'

export const Dashboard = () => {

  // const [checks, setChecks] = useState({1: false, 2: false})
  // const handleCheck = (element: number, check: boolean) => {
  //   setChecks({...checks, [element]: check});
  // }
  // return (
  //   <div className={'container'} >
  //     <div style={{display: 'flex', alignItems:'center'}}>
  //       <img alt={'img'}  src={img} width='30px' height={'30px'}/>
  //       <h1 style={{color: '#789efa', marginLeft: '10px'}}>Verbum</h1>
  //     </div>
  //     <h2 style={{color: '#789efa', marginBottom: '5px', marginTop:'10px'}}>A product by one meta</h2>
  //     <p style={{color: '#789efa', 'fontWeight': '600'}}>Please give us your preferences for the app</p>

  //     <div >
  //       <div>
  //         <p style={{marginBottom: '2px'}}>Username</p>
  //         <input placeholder='Username' style={{
  //           padding: '12px',
  //           border: '1px solid #646464',
  //           borderRadius: '6px',
  //           color: '#646464'
  //         }} />
  //       </div>
  //       <div>
  //         <p style={{marginBottom: '2px'}}>Text lenguage</p>
  //         <select style={{
  //           padding: '12px',
  //           border: '1px solid #646464',
  //           borderRadius: '6px',
  //           color: '#646464',
  //           width: '169px',
  //         }}
  //         disabled={checks[1]}
  //          >
  //           <option>Spanish</option>
  //           <option>English</option>
  //           <option>Turkish</option>
  //           <option>Italian</option>
  //         </select>
  //         <div style={{marginTop: '5px'}}>
  //           <input type='checkbox' onClick={()=>handleCheck(1, !checks[1])}/> 
  //           <span style={{marginLeft: '5px'}}>Auto-detect</span>
  //         </div>
  //       </div>
  //       <div style={{
  //         display: 'flex',
  //         flexDirection: 'column'
  //       }}>
  //         <p style={{marginBottom: '2px'}}>Audio lenguage</p>
  //         <select style={{
  //           padding: '12px',
  //           border: '1px solid #646464',
  //           borderRadius: '6px',
  //           color: '#646464',
  //           width: '169px',
  //           outline: 'none'
  //         }}
  //         disabled={checks[2]}
  //         >
  //           <option>Spanish</option>
  //           <option>English</option>
  //           <option>Turkish</option>
  //           <option>Italian</option>
  //         </select>
  //         <div style={{marginTop: '5px'}}>
  //           <input type='checkbox' onClick={()=>handleCheck(2, !checks[2])} /> 
  //           <span style={{marginLeft: '5px'}}>Auto-detect</span>
  //         </div>
  //       </div>
  //       <div style={{marginTop: '40px'}}>
  //         <button style={{width: '169px', backgroundColor:"#789efa", color: 'white', padding: '12px', borderRadius: '5px', border: 'none'}}>
  //           Save changes
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  //)

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F5F5'
    }}>
      <div style={{
      width: '40%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid rgb(233, 231, 231)',
        paddingBottom: '20px'
      }}>
        <h3>Settings</h3>
        <span style={{
          color: 'gray'
        }}>Personalize your translation settings to suit your preferences.</span>
      </div>
      {/* Language preferences, first div */}
      <div style={{
        borderBottom: '1px solid rgb(233, 231, 231)',
        paddingBottom: '20px'
      }}>
        <h4>Language preferences</h4>
        <span style={{
          color: 'gray'
        }}>Customize your language settings for the perfect translation <br/>experience.</span>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <h4>Spoken Language</h4>
          <select style={{
             backgroundColor: 'white',
             padding: '4px',
             border: 'none',
             borderRadius: '4px',
             color: '#646464',
             width: '209px',
             outline: 'none',
             marginLeft: 'auto'
          }}
          >
            <option>Spanish</option>
            <option>English</option>
            <option>Turkish</option>
            <option>Italian</option>
           </select>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <h4>Captions Language</h4>
          <select style={{
            backgroundColor: 'white',
            padding: '4px',
            border: 'none',
            borderRadius: '4px',
            color: '#646464',
            width: '209px',
            outline: 'none',
            marginLeft: 'auto'
          }}
          >
            <option>Spanish</option>
            <option>English</option>
            <option>Turkish</option>
            <option>Italian</option>
           </select>
        </div>
      </div>
      {/* preferences, second div */}

      <div style={{
        borderBottom: '1px solid rgb(233, 231, 231)',
        paddingBottom: '20px'
      }}>
        <h4>Preferences</h4>
        <span style={{
          color: 'gray'
        }}>Adjust your preferences to suit your translation style.</span>

        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <h4>Auto transcript in meetings</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <h4>Chat translation always on</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

      </div>
            {/* profile, third div */}

      <div>
        <h4>Profile</h4>
        <span style={{
          color: 'gray'
        }}>Visit our website to edit your profile</span>
      </div>
    </div>
    </div>

  )
}
