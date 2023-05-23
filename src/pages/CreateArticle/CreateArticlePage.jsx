import React, { useState, useEffect } from 'react';
import SideBar from '../../components/side-bar';

import './createArticle.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateArticlePage(props) {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [poster, setPoster] = useState('')

    const navigate = useNavigate()    

    const handleSave = async () => {
        console.log(title, desc, poster)

        // news/create?title=ff&description=fasf%file=fasf

        const params = {
            title: title,
            description: desc,
            file: poster
        }

        let res = await axios.post(
            'http://192.168.30.24:9095/create/news', {
              // specify query parameters
              params,
            }
        );

            console.log(res)

        navigate('/news')
    }

    const handleCancel = () => {
        navigate('/news')
    }

    return ( 
        <div className="createArticlePage">
            <SideBar/>

            <div className="createArticleBody">
                <div className='pageTitle'>Создание новости</div>
                <div className="inputTitle">
                    <label htmlFor="title">Введите заголовок</label>
                    <input type="text" id='title' onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className='inputBody'>
                    <div className="inputPoster">
                        <label htmlFor="poster">Добавьте медиа-файл</label>
                        <input type="file" name="poster" id="poster" onChange={(event) => {setPoster(event.target.value)}}/>
                    </div>
                    <div className="inputDescription">
                        <label htmlFor="description">Введите описание</label>
                        <textarea name="description" id="description" onChange={(event) => setDesc(event.target.value)}></textarea>
                    </div>
                </div>
                <div className="articleSave">
                    <div>
                        <input type="button" name="save" id="saveButton" value={'Отменить'} onClick={handleCancel}/>
                        <input type="button" name="save" id="saveButton" value={'Сохранить'} onClick={handleSave}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateArticlePage;