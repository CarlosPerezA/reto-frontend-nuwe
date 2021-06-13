import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Form3 from '../components/Form3';
import TopMenu from '../components/TopMenu';

const Verify = () => {
    return(
        <Layout >
            <TopMenu step={"PASO 01/03"} label={"Verficación por tarjeta"} link="/profile" />
            <Menu title={"Verifica tu perfil"}
                subtitle={"Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"} >
                <Form3 />
            </Menu>
        </Layout>
    );
};

export default Verify;