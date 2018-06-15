import React from 'react';
import {Card} from 'antd';


class UserManage extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    {this.props.title}</Card>
            </div>
        );
    }
}

module.exports = UserManage;