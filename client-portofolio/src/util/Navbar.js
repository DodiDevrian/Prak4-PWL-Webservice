import React from 'react'
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    navigasi: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#21252a',


    },
    navKanan: {
        display: 'flex',
        flexDirection: 'row',

    },
    navKanan2: {
        marginLeft: 10,
        marginRight: 10
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: '600',
        "&:hover": {
            color: 'gray'
        },
    },
    link2: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        "&:hover": {
            color: 'gray'
        },
    }

});

const Navbar = () => {
    const style = styles();
    return (
        <div>
            <ul className={style.navigasi}>
                <li><a className={style.link2} href="/">Dodi Devrian</a></li>
                <div className={style.navKanan}>
                    <li className={style.navKanan2}><a className={style.link} href="#">About</a></li>
                    <li className={style.navKanan2}><a className={style.link} href="#">Kemampuan</a></li>
                    <li className={style.navKanan2}><a className={style.link} href="#">Kontak</a></li>
                    <li className={style.navKanan2}><a className={style.link} href="#">Portofolio</a></li>

                </div>

            </ul>
        </div>
    )
}



export default Navbar