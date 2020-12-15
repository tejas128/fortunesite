import React,{ useState } from 'react'
import "./Catlog.css"
function Option({option}) {
    const [classname, setclassname] = useState("option")
    const [classname2, setclassname2] = useState("")
    const [dropdownstaus, setdropdownstatus] = useState(true)
    const changeclass = () => {
        setdropdownstatus(!dropdownstaus)
        if (dropdownstaus) {
            setclassname("optiononclick ")
            setclassname2("options")
        } else {
            setclassname("option")
            setclassname2("")
        }

    }
    return (
        <li className={classname}>
        <div className="option-content">
            <div className="option-name">
                {option}</div>
            <svg className="dropdown" onClick={changeclass} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L6 6L1 1" stroke="#828282" stroke-width="1.4" />
            </svg>
        </div>
        <div className={classname2}>
        </div>
    </li>
    )
}

export default Option
