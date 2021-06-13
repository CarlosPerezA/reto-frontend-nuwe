import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Card from '../components/Card';
import CardItem from '../components/CardItem';
import TopMenu from '../components/inicioSesion';

const Initial = () =>{
    return(
        <Layout >
            <TopMenu />
            <Menu title={"¡Únete a la comunidad!"} subtitle={"Para empezar, dinos que cuenta te gustaría abrir"} >
                <Card >
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <CardItem 
                        title={"Developers"}
                        description={"Cuenta personal para entrar al mundo dev"}
                        />
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <CardItem 
                        title={"Bussines"}
                        description={"Tienes o perteneces a una compañia"}
                        />
                    </Link>
                </Card>
            </Menu>
        </Layout>
    );
};

export default Initial;
