// shortcut --> rfce
//* CLS -> Cummulative Layout Shift
// it is the shift in layout of site when user interacts with it
// it should be mininum

import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    return (
        <div style={{ height: '50px' }}>
            {/* following syntax means firstly first
            condition will be checked if it is true then
            second condition will be checked otherwise it
            will not check second condition */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
            {/* props.alert can't be directly used inside a html tag */}
        </div>
    )
}

export default Alert


