import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        console.log('rerendering actions')
        return <ButtonToolbar>
            {this.props.buttons.map((button, i) =>
                <Button key={i}
                        onClick={this.mapActionToButton(button.get('name'))}
                        disabled={!button.get('active')}>
                        {button.get('name')}
                </Button>
            )}
        </ButtonToolbar>
    }

    mapActionToButton(action) {
        switch (action) {
            case 'body':
                return () => this.props.incrementHunger('body', Math.floor(Math.random() * 5) + 1)
            case 'mind':
                return () => this.props.incrementHunger('mind', Math.floor(Math.random() * 5) + 1)
            case 'soul':
                return () => this.props.incrementHunger('soul', Math.floor(Math.random() * 5) + 1)
            case 'enlightenment':
                return () => this.props.incrementHunger('enlightenment', 1)
            default:
                return
        }
    }
};