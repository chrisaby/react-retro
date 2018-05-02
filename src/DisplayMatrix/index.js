import React from 'react';
import Pixel from '../Pixel';

import './DisplayMatrix.css'

export class DisplayMatrix extends React.Component{
    render(){
        var pix = [];
        var pix2 = [];        
        for(var i = 0; i < 8; i++){
            pix2=[]
            for(var j = 0; j < 8; j++){
                pix2.push(<td><Pixel/></td>)
            }
            pix.push(<tr>{pix2}</tr>)
        }
        var x = 0;
        return(<div className = "matrix-outer" >
            <table>
                <tbody>
                    {pix}
                </tbody>                    
            </table>
        </div>);
    }
}