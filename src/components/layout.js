import React from 'react'
import {Title} from './title';
import Bot from '../containers/bot'
import './../styles/title.css';


export const Layout = ()=>{
    return (
          <div className="">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id={"titlespace"}><Title/></div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" id={"dataspace"}><Bot/></div>
                </div>
          </div>
    );
};

