import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Form from '../components/Form1';
import TopMenu from '../components/TopMenu';

const Register = () => {
    return(
        <Layout >
            <TopMenu step={"PASO 01/03"} label={"Personal Info."} link="/"/>
            <Menu title={"Registra tu cuenta individual"} 
                subtitle={"Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"} >
                <Form />
            </Menu>
        </Layout>
    );
};

export default Register;