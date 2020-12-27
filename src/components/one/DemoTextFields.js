import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function DemoTextFields() {
    const [values, setValues] = React.useState({
        name: '',
        age: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <form noValidate autoComplete="off">
            <TextField
                id="user-name"
                label="Name"
                fullWidth
                value={values.name}
                onChange={handleChange('name')}
            />
            <TextField
                id="user-age"
                label="Age"
                type="number"
                fullWidth
                value={values.age}
                onChange={handleChange('age')}
            />
            <p />
            <Button variant="contained" color="primary" >
                submit
            </Button>
        </form>
    );
}
