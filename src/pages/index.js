import * as React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className="hero-container">
        <iframe
          src="https://player.vimeo.com/video/588487253?background=1"
          width="x"
          height="y"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          className="hero-video"
          title="BV-Hero-Vid.mp4"
        ></iframe>
      </div>

      <div className="blockquote">
        <h1>
          a{' '}
          <a
            href="https://www.twitch.tv/buenviajeradio"
            target="_blank"
            rel="noreferrer"
            className="gradient-text"
          >
            monthly livestream{' '}
          </a>
          exploring sounds ranging from breezy balearic mediterranea to
          transcendent underground house.{' '}
          <a href="/" rel="noreferrer" className="gradient-text">
            buen viaje radio
          </a>{' '}
          ultimately aims to establish a community-driven platform to promote
          dance music events and host a record label.{' '}
        </h1>
      </div>

      <div className="media-wrapper">
        <div className="vimeo-container">
          <iframe
            title="BV-004-Vid.mp4"
            src="https://player.vimeo.com/video/577291665"
            width="640"
            height="375"
            frameborder="0"
            allowfullscreen
            className="vimeo-player"
          ></iframe>
        </div>
        <div className="mixcloud-container">
          <iframe
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuenviaje_radio%2Fbv-002%2F"
            frameborder="0"
            title="BV-Mixcloud-002"
          ></iframe>

          <iframe
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuenviaje_radio%2Fbv-004%2F"
            frameborder="0"
            title="BV-Mixcloud-004"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
