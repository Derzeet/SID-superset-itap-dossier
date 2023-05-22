import React, { useState, useEffect } from 'react';
import SideBar from '../../components/side-bar';

function CreateArticlePage(props) {
    return ( 
        <div className="createArticlePage">
            <SideBar/>

            <div className="createArticleBody">
                <title>Создание новости</title>
                <div className="inputTitle">
                    <label htmlFor="title">Введите заголовок</label>
                    <input type="text" id='title'/>
                </div>
                <div className='inputBody'>
                    <div className="inputPoster">
                        <label htmlFor="poster">Добавьте медиа-файл</label>
                        <input type="file" name="poster" id="poster" />
                    </div>
                    <div className="inputPoster">
                        <label htmlFor="description">Введите описание</label>
                        <textarea name="description" id="description" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateArticlePage;