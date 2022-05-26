import React from 'react'
import Navbar from '../util/Navbar';
import Profil from '../util/Profil';
import Kemampuan from '../util/Kemampuan';
import Proyek from '../util/Proyek';
import Footer from '../util/Footer';
const Beranda = () => {
    return (
        <div>
            <Navbar />
            <Profil />
            <Kemampuan />
            <Proyek />
            <Footer />
        </div >
    );
}
export default Beranda