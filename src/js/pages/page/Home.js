import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RoundedBox from '../../components/RoundedBox';
import Text from '../../components/Text';
import { ContentContext } from '../../utils/ContentContext';
import Logo from '../../../assets/cover.png';
import '../../../css/home.css';

const Home = () => {
  const [isLogoReady, setLogoReady] = useState(false);
  document.title = 'Home | Anime Yu-Gi-Oh! Card Maker';
  return (
    <ContentContext.Consumer>
      {() => (
        <div id="preloader" className="container pre-loader" hidden={!isLogoReady}>
          <div className="content row">
            <div className="banner child col-sm-6">
              <img className="logo" src={Logo} alt="logo" onLoad={setLogoReady(true)} />
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
                  <p>
                    This is the <b>brand new</b> homepage of the popular{' '}
                    <b>Anime Yu-Gi-Oh! Card Maker!</b>{' '}
                    This time featuring a web app, that&apos;s right,{' '}
                    no longer do you need to download an app.{' '}
                    Though if you prefer a downloaded version, you can still access the old website{' '}
                    <a href="https://aygocm.co.uk" target="_blank" rel="noreferrer">here.</a>
                  </p>
                  <h5>What is AYGOCM?</h5>
                  <p>
                    Anime Yu-Gi-Oh! Card Maker <b>(</b>AYGOCM<b>)</b> is a tool that allows the creation of{' '}
                    anime/4kids styled Yu-Gi-Oh! cards.
                  </p>
                </Text>
              </RoundedBox>
            </div>
            <div className="child fadeIn col-md-4">
              <RoundedBox colour="green">
                <Text>
                  <h4>Featured Video</h4>
                  <p style={{ color: 'var(--grey); margin-top: -10px' }}>
                    Special Thanks to{' '}
                    <a href="https://www.youtube.com/channel/UCrn320jsOmDtiM4hM_-OZIA" target="_blank" rel="noreferrer">
                      Nostaligiacade Gaming
                    </a>!
                  </p>
                  <iframe className="iframe-yt" src="https://www.youtube-nocookie.com/embed/MdR6Iw9u5_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><hr />
                  <h5>Want to Support the Development?</h5>
                  <p>
                    If you like my work and would like to support future developments,{' '}
                    feel free to leave a donation!
                  </p>
                  <a href="https://ko-fi.com/Z8Z71EKU3" target="_blank" rel="noreferrer">
                    <img height="36" style={{ border: '0px;height:36px;' }} src="https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2" border="0" alt="Buy Me a Coffee at ko-fi.com" />
                  </a><hr />
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="3B8T7MMSH568U" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                  </form><hr />
                  <p>
                    Alternatively, disabling Ad blockers for this website would also be a huge help{' '}
                    and very much appreciated!
                  </p>
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
