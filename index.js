import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
import {HashRouter, Route} from 'react-router-dom'

import Index from './init/index.jsx';
import Menu from './init/menu.jsx';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/index" component={Index}/>
            <Route path="/menu" component={Menu}/>
        </div>
    </HashRouter>
    , document.getElementById('root'));