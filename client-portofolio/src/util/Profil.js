import React from 'react'
import { createUseStyles } from 'react-jss';
import foto from '../assets/foto.jpg'
const styles = createUseStyles({
    konten: {
        backgroundColor: '#4240a3',
        marginTop: -10
    },
    isi: {
        padding: {
            top: 30,
            left: 200,
            right: 200,
            bottom: 100
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    teks: {
        color: '#e9ba55',
        fontSize: 20
    },
    teks2: {
        color: 'white',
        fontSize: 24
    },
    gambar: {
        borderRadius: 300 / 2,
        width: 300,
        height: 300,

    },
    detail: {
        maxWidth: 500
    },
    hubungi: {
        color: 'white',
        backgroundColor: '#e17b7e',
        height: 35,
        width: 140,
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        marginTop: 20,
        "&:hover": {
            backgroundColor: 'gray',
        },
    },
    link: {
        textDecoration: 'none',

    },

});

const Profil = () => {
    const style = styles();
    return (
        <div>
            <div className={style.konten}>
                <div className={style.isi}>
                    <div className={style.detail}>
                        <p className={style.teks}>Nama saya Dodi Devrian</p>
                        <span className={style.teks2}>Saya seorang mahasiswa yang tertarik di bidang web.</span><br>
                        </br>
                        <span className={style.teks2}>Saya sangat berminat menjadi seorang Frontend Developer.</span>
                        <a className={style.link} href='#'>
                            <div className={style.hubungi}>
                                Hubungi Saya
                            </div>
                        </a>
                    </div>
                    <img className={style.gambar} src={foto}></img>
                </div>
            </div>
        </div>
    )
}



export default Profil