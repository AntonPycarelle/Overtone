import React from 'react';
import MetaTags from 'react-meta-tags';

class Meta extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                </MetaTags>
            </div>
        )
    }
}

export default Meta;
