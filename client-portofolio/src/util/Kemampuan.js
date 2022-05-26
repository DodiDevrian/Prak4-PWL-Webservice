import React from 'react'
import { createUseStyles } from 'react-jss';
import html5 from "../assets/html5.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
const styles = createUseStyles({
    content: {
        padding: 20,
        backgroundColor: '#f8e6e6',
        paddingBottom: 60
    },
    isi: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: {
            left: 200,
            right: 200
        }
    },
    gambar: {
        width: 70,
        height: 70
    },
    title: {
        color: '#183153',
        textAlign: 'center'
    },
    garis: {
        width: 900
    },
    huruf: {
        color: '#3f3f3f'
    },
    tengah: {
        borderRight: '1px solid rgba(0, 0, 0, 0.4)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.4)',
        padding: {
            left: 4,
            right: 4
        },
        margin: {
            left: 4,
            right: 4
        }
    }

});

const Kemampuan = () => {
    const style = styles();
    return (
        <div>
            <div className={style.content}>
                <h2 className={style.title}>Kemampuan</h2>
                <hr className={style.garis}></hr>
                <div className={style.isi}>
                    <div>
                        <img className={style.gambar} src={html5}></img>
                        <h3>HTML5</h3>
                        <p className={style.huruf}>Saya memiliki pengetahuan yang lumayan dalam HTML5.</p>
                    </div>
                    <div className={style.tengah}>
                        <img className={style.gambar} src={css}></img>
                        <h3>CSS</h3>
                        <p className={style.huruf}>Saya memiliki pengetahuan yang lumayan dalam CSS.</p>
                    </div>
                    <div>
                        <img className={style.gambar} src={js}></img>
                        <h3>Javascript</h3>
                        <p className={style.huruf}>Saya memiliki pengetahuan yang lumayan dalam Javascript.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Kemampuan