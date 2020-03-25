import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      title: document.querySelector('input').value,
      category: document.querySelector('select').value,
    });
  }

  render() {
    const { addBook } = this.props;

    const handleSubmit = e => {
      e.preventDefault();
      const params = { ...this.state, id: Math.random() };
      document.querySelector('input').value = '';
      this.setState({
        title: '',
      });
      if (params.title) addBook(params);
    };

    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <>
        <form>
          <input
            type="text"
            required
            placeholder="Add Your Book"
            onChange={this.handleChange}
          />
          <select name="categories" onChange={this.handleChange}>
            {categories.map(category => (
              <option key={Math.random()} value={category}>{category}</option>
            ))}
          </select>
          <input type="submit" value="Add Book" onClick={handleSubmit} />
        </form>
      </>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);