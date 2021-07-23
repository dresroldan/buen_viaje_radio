import * as React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="stream-container">
          <iframe
            title="vimeo-player"
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
          ></iframe>

          <iframe
            width="100%"
            height="120"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuenviaje_radio%2Fbv-004%2F"
            frameborder="0"
          ></iframe>
        </div>
        <div className="instagram-container"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;
