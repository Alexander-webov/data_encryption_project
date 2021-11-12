import React, { useState } from 'react';

import env from './env.json'

const Create = () => {
    const [url, seturl] = useState('');
    const [lineClass, setlineClass] = useState('hide');
    const [formClass, setformClass] = useState('');


    const loadDataFromForm = (e) => {
        e.preventDefault()


        const sendData = (obj) => {
            setformClass('hide')
            setlineClass('')

            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.result) {
                        seturl(env.url + '/' + res.url)
                    }
                })
        }
        let note = e.target.elements.note.value;
        note = note.trim()
        if (note === '') {
            alert('Заполните поля!')
            return false;
        }
        sendData({ "note": note });

    }

    return (
        <div>
            <form onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="">Введите заметку</label>
                <textarea name="note" id="note" defaultValue="Test"></textarea>
                <button type="submit">Создать</button>
            </form>
            <div className={lineClass}>
                {url}
                <div>
                    <button onClick={() => window.location.reload()}>
                        Создать новую заметку
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Create;
