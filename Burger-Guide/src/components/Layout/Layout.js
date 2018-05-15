import React from 'react';

import auxilary from '../../hoc/auxilary';
import classes from './Layout.css';

const layout = ( props ) => (
    <auxilary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </auxilary>
);

export default layout;