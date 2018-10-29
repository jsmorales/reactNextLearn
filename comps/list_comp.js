import React from 'react';

//https://www.codecademy.com/es/courses/react-101/lessons/this-props/exercises/this-props-children?action=resume_content_item

export class List extends React.Component {
    render() {
        let titleText = `Favorite ${this.props.type}`;
        if (this.props.children instanceof Array) {
            titleText += 's';
        }
        return (
            <div>
                <h1>{titleText}</h1>
                <ul className={this.props.classNameStyle}>{this.props.children}</ul>
            </div>
        );
    }
}

List.defaultProps = {
    classNameStyle: 'class-style-ul'
};