import Navbar from '../util/Navbar';
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from "../util/Footer"

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
        borderRadius: 4,
        margin: {
            top: 20,
            left: 100,
            right: 100
        },

        border: '1px solid rgba(0, 0, 0, 0.4)',
    },
    thumbnail: {
        width: 400,
        height: 250,
        alignSelf: 'center',
    },
    judul: {
        textAlign: 'center'
    },
    container: {
        margin: {
            left: 100,
            right: 100
        },
    },
    cardKomen: {
        backgroundColor: '#f0d699',
        padding: 20,
        borderRadius: 5,
        margin: {
            top: 10,
            bottom: 10
        },
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    boxInput: {
        width: '100%',
        height: 40,
        marginTop: 30,
    },
    boxInput2: {
        width: '100%',
        minHeight: 140,
        marginTop: 30,
        boxShadow: "1px 3px 1px #9E9E9E"
    },
    tombol: {
        width: '50%',
        height: 40,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 7,
        "&:hover": {
            backgroundColor: '#1b1e24'
        },
    }


});

const Detail = () => {
    const { id } = useParams()
    const [proyek, setProyek] = useState([]);
    const navigate = useNavigate();
    const [validasiError, setValidasiError] = useState({})

    const [nama, setNama] = useState("");
    const [isi_komentar, setIsiKomentar] = useState("");
    const [proyek_id, setProyekId] = useState(id);
    const [isiKomen, setIsiKomen] = useState([])

    const aksiKomen = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('nama', nama)
        formData.append('isi_komentar', isi_komentar)
        formData.append('proyek_id', proyek_id)


        await axios.post(`https://server-dodidevrian.herokuapp.com/api/proyek/${id}/komen`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate(`/`)
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidasiError(response.data.errors)
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: "error"
                })
            }
        })
    }



    useEffect(() => {

        async function getProyek() {
            const response = await fetch(`https://server-dodidevrian.herokuapp.com/api/proyek/${id}`);
            const json = await response.json();
            setProyek(json.data)
        }

        async function getIsiKomen() {
            const response = await fetch(`https://server-dodidevrian.herokuapp.com/api/getkomen/${id}`);
            const json = await response.json();
            setIsiKomen(json.data)
        }

        getIsiKomen()
        getProyek()
    }, []);
    const style = styles();
    console.log(isiKomen)
    return (
        <div>
            <Navbar />

            <div className={style.container}>
                <h1 className={style.judul}>Rincian Proyek</h1>
                <hr></hr>
                {proyek.map((item, index) => (

                    <div key={index} className={style.card}>
                        <center>
                            <img className={style.thumbnail} src={item.image} ></img>
                        </center>
                        <h4 className={style.title}>{item.nama}</h4>
                        <hr></hr>
                        <p className={style.teks}>{item.deskripsi}</p>

                    </div>

                ))}
                <h3 className={style.judul}>Komentar </h3>
                <div>
                    <form onSubmit={aksiKomen}>
                        <input
                            className={style.boxInput}
                            type="text"
                            value={nama}
                            placeholder="Nama"
                            onChange={(e) => setNama(e.target.value)}
                        />
                        <br></br>
                        <textarea
                            className={style.boxInput2}
                            type="text"
                            value={isi_komentar}
                            placeholder="Isi Komentar"
                            onChange={(e) => setIsiKomentar(e.target.value)}
                        />
                        <br></br>
                        <center>
                            <button className={style.tombol} type="submit">Submit</button>
                        </center>
                    </form>
                </div>
                <hr></hr>
                {isiKomen.map((item, index) => (
                    <div key={index} className={style.cardKomen} >
                        <strong>{item.nama}</strong>
                        <p>{item.isi_komentar}</p>
                        <p>{item.created_at}</p>
                    </div>
                ))}


            </div>
            <Footer />
        </div>
    )
}

export default Detail