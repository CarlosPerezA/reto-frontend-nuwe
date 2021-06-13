import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Form2 from '../components/Form2';
import TopMenu from '../components/TopMenu';

const Profile = () => {
    return(
        <Layout >
            <TopMenu step={"PASO 02/03"} label={"Localización"} link="/register"/>
            <Menu title={"Complete Your Profile!"} 
                subtitle={"Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"} >
                <Form2 />
            </Menu>
        </Layout>
    );
};

export default Profile;