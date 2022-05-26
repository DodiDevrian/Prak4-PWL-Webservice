import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
const styles = createUseStyles({
    content: {
        padding: 20,
        backgroundColor: '#d2d2db',
        paddingBottom: 60
    },
    isi: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: {
            left: 200,
            right: 200
        }
    },
    garis: {
        width: 900
    },
    title: {
        color: '#183153',
        textAlign: 'center',
        textDecoration: 'none',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        maxWidth: 390,

        borderRadius: 4,
        "&:hover": {
            boxShadow: "6px 6px 1px #9E9E9E"
        },

    },
    thumbnail: {
        width: 300,
        height: 200,
        alignSelf: 'center',
    },
    teks: {
        textDecoration: 'none',
        color: 'black',
    }

});

const Proyek = () => {
    const [proyek, setProyek] = useState([]);

    useEffect(() => {
        async function getProyek() {
            const response = await fetch("https://server-dodidevrian.herokuapp.com/api/proyek");
            const json = await response.json();
            setProyek(json.data)
        }
        getProyek()
    }, []);

    const style = styles();
    return (
        <div>
            <div className={style.content}>
                <h2 className={style.title}>Proyek</h2>
                <hr className={style.garis}></hr>
                <div className={style.isi}>

                    {proyek.map((item, index) => (

                        <div key={index} className={style.card}>
                            <Link to={`/komentar/${item.id}`} className={style.teks}>
                                <center>
                                    <img className={style.thumbnail} src={item.image} ></img>
                                </center>
                                <h4 className={style.title}>{item.nama}</h4>
                                <p className={style.teks}>{item.deskripsi}</p>
                            </Link>
                        </div>

                    ))}

                </div>
            </div>

        </div>
    )
}



export default Proyek