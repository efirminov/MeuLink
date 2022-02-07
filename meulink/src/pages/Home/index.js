import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLinks} from '../../services/storeLinks'

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function haldleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })
            setData(response.data);
            setShowModal(true);

            saveLinks('@encurtaLink', response.data);

            setLink('');
        } catch (error) {
            alert("Ops parece que algo deu errado!");
            setLink('');
        }
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Link logo" />
                <h1>SujeitoLink</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color='#fff' />
                    <input
                        placeholder='Cole seu link aqui...'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={haldleShortLink}>Encurtar Link</button>
            </div>
            <Menu />

            { showModal && (
                <LinkItem
                closeModal={ () => setShowModal(false)}
                content={data}
                />
            )}
        </div>
    );
}