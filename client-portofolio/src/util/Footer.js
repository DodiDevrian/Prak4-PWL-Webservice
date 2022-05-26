import React from 'react'
import { createUseStyles } from 'react-jss';
import ig from "../assets/ig.png"
import fb from "../assets/fb.png"
const styles = createUseStyles({
    bungkus: {
        backgroundColor: '#463d2c',
        padding: 20
    },
    rowing: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: {
            left: 300,
            right: 300
        }
    },
    teks: {
        color: 'white'
    },
    gambar: {
        width: 40,
        height: 40,
    }

});

const Footer = () => {
    const style = styles();
    return (
        <div>
            <div className={style.bungkus}>
                <div className={style.rowing}>
                    <div>
                        <p className={style.teks}>Copyright 2022 by Dodi Devrian</p>
                    </div>
                    <div>
                        <a href='#'>
                            <img className={style.gambar} src={ig}></img>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <img className={style.gambar} src={fb}></img>
                        </a>
                    </div>
                    <div>
                        <p className={style.teks}>Webservice</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer