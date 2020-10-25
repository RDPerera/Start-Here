import React from 'react';
import { Loading } from 'arwes';

class Loader extends React.Component {
    render() {
        return [
            <div>
                <Loading animate />
                <Loading animate small />
                <div style={{ position: 'relative', width: 200, height: 200 }}>
                    <Loading animate full />
                </div>
            </div>
        ]
    }
}

export default Advertisement;