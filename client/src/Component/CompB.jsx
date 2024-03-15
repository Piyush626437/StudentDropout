import React from 'react'
import { fname } from '../App';
const CompB=()=>
{
    return(
        <>
        <fname.Consumer>
            {
                (name)=>
                {
                   return<h1>This  is {name}</h1> ;
                }
            }
        </fname.Consumer>
        </>
    )
}

export default CompB;