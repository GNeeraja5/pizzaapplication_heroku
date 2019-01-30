import React from 'react';
import { Helmet } from 'react-helmet';

export default class Component1 extends React.Component{
    render(){
        return (
            <div>
                <Helmet>
                <meta name="description" content="Todos on steroid!" />
                <meta name="keywords" content="find me" />
                </Helmet>
            </div>
        );
    }
}