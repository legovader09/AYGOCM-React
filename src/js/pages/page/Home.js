import React from 'react';
import Button from 'react-bootstrap/Button';
import RoundedBox from '../../components/RoundedBox';
import Text from '../../components/Text';
import { ContentContext } from '../../utils/ContentContext';
import Logo from '../../../assets/cover.png';
import '../../../css/home.css';

const Home = () => {
  document.title = 'Home | Anime Yu-Gi-Oh! Card Maker';
  return (
    <ContentContext.Consumer>
      {(content) => (
        <div className="container">
          <div className="content row">
            <div className="banner child col-sm-6">
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="banner child col-sm-6">
              <h1 className="title">Anime Yu-Gi-Oh! Card Maker</h1>
              <h3 className="subtitle">Web Edition</h3>
              <Button className="btn-create" href="/cardmaker">Start Creating</Button>
            </div>
            <hr />
            <div className="child fadeIn col-md-8">
              <RoundedBox>
                <h4>Welcome to AYGOCM Web Edition!</h4>
                <Text>
                  {content.Strings.HomeContent.HomeText}
                </Text>
              </RoundedBox>
            </div>
            <div className="child fadeIn col-md-4">
              <RoundedBox colour="green">
                <Text>
                  {content.Strings.HomeContent.SidebarText}
                </Text>
              </RoundedBox>
            </div>
          </div>
        </div>
      )}
    </ContentContext.Consumer>
  );
};

export default Home;
