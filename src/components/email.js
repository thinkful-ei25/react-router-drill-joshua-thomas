import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

export default function Email() {
    return (
    <BrowserRouter>
        <div className="email">
            <Sidebar />
            <main>
                <Switch>
                    <Redirect exact from='/' to='/inbox' />
                    <Route exact path='/:folderId' component={EmailList} />
                    <Route exact path='/:folderId/:emailId' component={SingleEmail} />
                </Switch>
            </main>
        </div>
    </BrowserRouter>
    );
}
