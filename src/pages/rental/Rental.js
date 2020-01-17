import React from 'react';
import CustomizedTabs from '../../shared/components/customizedTabs'
import Exemple from './exemple/exemple'
import {FormattedMessage } from "react-intl";
import messages from './message'

import './rental.scss'

const content1 = <div>
    <h1>
        Content 1</h1>
    <p>
        if the content is large , we must write this content under a comoponent wich we will create under this comoponent page
    </p>
</div>
const content2 = <div>
    <h1>
        Content 2</h1>
    <p>
        if the content is large , we must write this content under a comoponent wich we will create under this comoponent page
    </p>
</div>
const Rental = () => {

 
    const tabMenu = [
        {
            title:<FormattedMessage {...messages.title1} />,
            key: 'title1',
            content: content1,
            id: '1'
        }, {
            title:<FormattedMessage {...messages.title2} />,
            key: 'title2',
            content: content2,
            id: '2'
        }, {
            title: <FormattedMessage {...messages.title3} />,
            key: 'title3',
            content: <Exemple />,
            id: '3'
        }
    ]
    return (
        <div className="rental">
            <CustomizedTabs tabMenu={tabMenu} className="rental-tabs"/>
        </div>
    );
}

export default  Rental
