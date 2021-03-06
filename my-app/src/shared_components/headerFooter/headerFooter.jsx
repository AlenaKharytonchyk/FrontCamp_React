import React from 'react';
import './headerFooter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class PageContainer extends React.Component {
  render() {
    return (
      <>
        <header className="page-container">
          <section className="page">
            <span>netflix</span>
            <span>roulette</span>
          </section>
          <Link to="/"><FontAwesomeIcon icon={faSearch} /></Link>
        </header>
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default PageContainer;
