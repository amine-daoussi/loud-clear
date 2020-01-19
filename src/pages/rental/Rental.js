import React from 'react';
import CustomizedTabs from '../../shared/components/customizedTabs'
import Exemple from './exemple/exemple'
import {FormattedMessage } from "react-intl";
import messages from './message'

import './rental.scss'

const content1 = <div className='sub-tabs'>
    <h1  className='sub-tabs-title'>
        Content 1</h1>
   
    <CustomizedTabs tabMenu={[{ title: 'title3',
            content: 'content1',
            id: '1'},{ title: 'title1',
            content: 'content1',
            id: '2'},{ title: 'title2',
            content: 'content1',
            id: '3'}]} className="rental-tabs" />
    
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
        , {
            title: <FormattedMessage {...messages.title4} />,
            key: 'title4',
            content: <Exemple />,
            id: '4'
        }
        , {
            title: <FormattedMessage {...messages.title5} />,
            key: 'title5',
            content: <Exemple />,
            id: '5'
        }
        , {
            title: <FormattedMessage {...messages.title6} />,
            key: 'title6',
            content: <Exemple />,
            id: '6'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
        , {
            title: <FormattedMessage {...messages.title7} />,
            key: 'title7',
            content: <Exemple />,
            id: '7'
        }
    ]
    return (
        <div className="rental">
            <CustomizedTabs tabMenu={tabMenu} className="rental-tabs"/>
        </div>
    );
}

export default  Rental
