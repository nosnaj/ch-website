import React from 'react';
import { Link } from 'gatsby';

// import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

import TeamImage from '../images/team-image.jpg';
import CHLogo from '../images/ch-logo-transparent.png';
import InstagramLogo from '../images/instagram.png';
import Image1 from '../images/gallery/i1.jpg';
import Image2 from '../images/gallery/i2.jpg';
import Image3 from '../images/gallery/i3.jpg';
import Image4 from '../images/gallery/i4.jpg';
import Image5 from '../images/gallery/i5.jpg';
import Image6 from '../images/gallery/i6.jpg';
import Image7 from '../images/gallery/i7.jpg';
import Image8 from '../images/gallery/i8.jpg';
import Image9 from '../images/gallery/i9.jpg';
import Image10 from '../images/gallery/i10.jpg';
import Image11 from '../images/gallery/i11.jpg';
import Image12 from '../images/gallery/i12.jpg';
import Image13 from '../images/gallery/i13.jpg';

import styles from './index.module.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div style={{ display: 'flex', padding: '24px', justifyContent: 'flex-end', height: '80px' }}>
      <div style={{ marginRight: '64px', borderBottom: '3px solid #FEC95B', width: 'fit-content', height: 'fit-content', padding: '8px 0' }}>
        <span style={{ fontFamily: 'Nunito', fontSize: '24px', lineHeight: '32px', fontWeight: 'bold', color: '#FEC95B' }}>Home</span>
      </div>
      {/* <div style={{ marginRight: '64px', width: 'fit-content', height: 'fit-content', padding: '8px 0' }}>
        <span style={{ fontFamily: 'Nunito', fontSize: '24px', lineHeight: '32px', fontWeight: 'bold', color: '#FFFFFF' }}>About Us</span>
      </div>
      <div style={{ marginRight: '64px', width: 'fit-content', height: 'fit-content', padding: '8px 0' }}>
        <span style={{ fontFamily: 'Nunito', fontSize: '24px', lineHeight: '32px', fontWeight: 'bold', color: '#FFFFFF' }}>Blogs</span>
      </div> */}
    </div>
    <div className={styles.header}>
      <p style={{ fontFamily: 'Raleway', fontSize: '56px', fontWeight: '600', lineHeight: '64px', color: 'white', letterSpacing: '3px' }}>
        Code Humans
      </p>
      <p style={{ width: '50%', fontFamily: 'Nunito', fontSize: '24px', lineHeight: '32px', color: 'white' }}>
        A group of passionate and energetic humans who love to build dreams.
      </p>
      <p style={{ width: '50%', fontFamily: 'Nunito', fontSize: '24px', lineHeight: '32px', color: 'white' }}>
        We are primarily a team of problem solvers within HostAStay and we are gathered here to build and enhance the solutions.
      </p>
      <div style={{ borderBottom: '3px solid #FEC95B', width: 'fit-content', padding: '8px 0' }}>
        <span style={{ fontFamily: 'Nunito', fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', color: '#FEC95B' }}>
          <a href="https://www.instagram.com/codehumans/" target="_blank" style={{ textDecoration: 'none', color: '#FEC95B' }}>
            Know more about us
          </a>
        </span>
      </div>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.teamImageContainer}>
        <img className={styles.teamImage} src={TeamImage} />
      </div>
      <div className={styles.teamContentContainer}>
        <p style={{ fontFamily: 'Raleway', fontSize: '40px', fontWeight: '600', lineHeight: '52px' }}>
          We value <span style={{ textDecoration: 'underline' }}>team</span> more than everything.
        </p>
        <p style={{ fontFamily: 'Nunito', fontSize: '16px', lineHeight: '28px', textAlign: 'justify' }}>
          "WE" is better than "me". This is the most important thing in our team. <br />
          We share our knowledge, experiences, jokes and even our lunch with each other. Apparently we had reached a great height in the atmosphere,
          for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of
          the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere,
          whose upper half was strewn with silver.
        </p>
      </div>
    </div>
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ marginRight: '16%' }}>
        <p
          style={{
            filter: 'drop-shadow(0px -8px 8px #f9f9f9)',
            backgroundColor: 'white',
            fontFamily: 'Nunito',
            fontSize: '16px',
            lineHeight: '28px',
            textAlign: 'center',
            width: '50%',
            margin: '4% 50%',
            padding: '4%'
          }}
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nisl finibus, semper metus eu, venenatis mi. Nullam ornare at leo a
          iaculis.“ <br />— our belief
        </p>
      </div>
      <div className={styles.chLogoContainer}>
        <img src={CHLogo} className={styles.chLogo} />
      </div>
    </div>
    <div className={styles.galleryRow}>
      <div className={styles.galleryCol}>
        <img src={Image1} style={{ width: '100%' }} />
        <img src={Image2} style={{ width: '100%' }} />
        <img src={Image7} style={{ width: '100%' }} />
        <img src={Image12} style={{ width: '100%' }} />
      </div>
      <div className={styles.galleryCol}>
        <img src={Image3} style={{ width: '100%' }} />
        <img src={Image4} style={{ width: '100%' }} />
        <img src={Image5} style={{ width: '100%' }} />
        <img src={Image10} style={{ width: '100%' }} />
      </div>

      <div className={styles.galleryCol}>
        <img src={Image6} style={{ width: '100%' }} />
        <img src={Image13} style={{ width: '100%' }} />
        <img src={TeamImage} style={{ width: '100%' }} />
        <img src={Image8} style={{ width: '100%' }} />
      </div>

      <div className={styles.galleryCol}>
        <img src={Image9} style={{ width: '100%' }} />
        <img src={Image11} style={{ width: '100%' }} />
      </div>
    </div>
    <div style={{ backgroundColor: '#93ECCD', padding: '24px 8%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
      <p style={{ fontFamily: 'Nunito', fontSize: '16px', lineHeight: '28px', textAlign: 'justify', margin: 0, color: 'white', fontWeight: 700 }}>
        Check us out in Instagram and stay tune for many more exciting activities we’ll be having.
      </p>
      <a href="https://www.instagram.com/codehumans/" target="_blank" style={{ textDecoration: 'none', color: '#FEC95B' }}>
        <img src={InstagramLogo} style={{ margin: 0, width: '32px' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '24px 8%' }}>
      <p style={{ margin: 0, fontFamily: 'Nunito', fontSize: '16px', lineHeight: '24px', color: '#4f4f4f' }}>{`More contents will be added soon.`} </p>
      <p style={{ margin: 0, fontFamily: 'Nunito', fontSize: '16px', lineHeight: '24px', color: '#4f4f4f' }}>{`copyright@${new Date().getFullYear()} - codehumans`} </p>
    </div>
  </>
);

export default IndexPage;
