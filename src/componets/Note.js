import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Хук дает доступ к параметрам поиска в URL;

import env from './env.json'




const Note = () => {
    let { noteURL } = useParams();

    const [notetext, setnotetext] = useState('')
    const [lineClass, setlineClass] = useState('hide')
    const [formClass, setformClass] = useState('');
    const [errorClass, seterrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL }),
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res.note);
                    if (res.result) {
                        console.log(1);
                        setnotetext(res.note)
                        setlineClass('')
                        setformClass('hide')
                        seterrorClass('hide')
                    }
                    else if (!res.result) {
                        console.log(2);
                        setlineClass('hide')
                        setformClass('')
                        seterrorClass('')
                    }
                })
        } else {
            setlineClass('hide')
            setformClass('')
            seterrorClass('hide')

        }

    }, []);


    const getNode = (e) => {
        e.preventDefault();
        let url = e.target.elements.url.value;
        url = url.trim()
        if (url === '') {
            alert('Заполните поля!')
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url
    }

    return (
        <div>
            <div className={lineClass}>
                <h3 >{notetext} </h3>
                <div>
                    <button onClick={() => window.location.href = env.url}>Смотреть еще одно сообщение</button>
                </div>
            </div>

            <div className={errorClass}>
                Произошла ошибка...
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNode}>
                    <label htmlFor="url"></label>
                    <input type="text" name="url" id="url" className="form-control" />
                    <button>Искать Note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;
