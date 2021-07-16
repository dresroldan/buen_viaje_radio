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
            src="https://player.twitch.tv/?video=1044184765&parent=buenviajeradio.com"
            parent="buenviajeradio.com"
            frameborder="0"
            allowfullscreen="true"
            scrolling="no"
            height="378"
            width="620"
            title="Buen Viaje Radio"
          ></iframe>
        </div>
      </div>

      <div className="instagram-feed">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-843c4d83-11f4-4f68-9156-60821b1b1edb"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;
