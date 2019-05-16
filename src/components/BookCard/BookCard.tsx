import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Author, Book } from '../../types';
import Button from '../Button/Button';
import './BookCard.css';

interface Props extends RouteComponentProps, Book {
  id: string;
}

class BookCard extends React.Component<Props> {
  handleGoTo = (e: React.MouseEvent<HTMLElement>) => {
    this.props.history.push(`/${this.props.id}`);
  };

  render() {
    const { title, authors, pages, img } = this.props;
    return (
      <article
        className="bookCard"
        onClick={(e: React.MouseEvent<HTMLElement>) => this.handleGoTo(e)}
      >
        <div className="bookCard_imgContainer">
          {img ? (
            <img alt={`${title}`} className="bookCard_img" src={img} />
          ) : (
            <img
              alt={'Изображение обложки'}
              src="http://dummyimage.com/60x120/c0c0c0.gif&text=Empty"
            />
          )}
        </div>
        <h2 className="bookCard_title">{title}</h2>
        <div className="bookCard_author">
          <span>Авторы:</span>
          {authors.map((author: Author) => (
            <p key={author.name}>
              {author.surname} {author.name}
              {authors.length > 1 ? ',' : null}
            </p>
          ))}
        </div>
        <div>Количество страниц: {pages}</div>
        <div className="bookCard_buttons">
          <Button
            title="👁️"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleGoTo(e)}
          />
          <Button title="🗑️" onClick={(e: any) => e.stopPropagation()} />
          <Button title="✏️" onClick={(e: any) => e.stopPropagation()} />
        </div>
      </article>
    );
  }
}

export default withRouter(BookCard);
