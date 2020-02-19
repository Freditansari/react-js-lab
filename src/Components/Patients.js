import React from 'react';
import PropTypes from 'prop-types';

const Patients = (props) => {
    alert(props.name);
    return (
        <div>
            <h1>Hello  {props.newPatientList[3].firstname} { props.newPatientList[3].lastName}, you are patient number {props.newPatientList[3].id}</h1>
        </div>
    )
}

Patients.defaultProps = {
    name: "bananabonono"
}

Patients.propTypes ={
    newPatientList:PropTypes.array
}

export default Patients;
