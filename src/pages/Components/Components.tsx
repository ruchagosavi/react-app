// src/pages/Components/Components.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Components.module.css';

// Importing Page Sections
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import CTASection from '../../components/CTASection/CTASection';
import PricingSection from '../../components/PricingSection/PricingSection';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import FAQSection from '../../components/FAQSection/FAQSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';

// Importing Pages
import LandingPage from '../../components/LandingPage/LandingPage';
import AboutPage from '../../components/AboutPage/AboutPage';
import ContactPage from '../../components/ContactPage/ContactPage';
import LoginPage from '../../components/LoginPage/LoginPage';
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage';
import DashboardPage from '../../components/DashboardPage/DashboardPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';

// Importing Layouts
import GridLayout from '../../components/GridLayout/GridLayout';
import FlexLayout from '../../components/FlexLayout/FlexLayout';


// Importing Forms
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import SearchForm from '../../components/SearchForm/SearchForm';


// Importing UI Elements
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
/*import Modal from '../../components/Modal/Modal';
import Tab from '../../components/Tab/Tab';
import Accordion from '../../components/Accordion/Accordion';
import Tooltip from '../../components/Tooltip/Tooltip';
import Dropdown from '../../components/Dropdown/Dropdown';
import Alert from '../../components/Alert/Alert';
import Badge from '../../components/Badge/Badge';*/
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
// import Pagination from '../../components/Pagination/Pagination';
// import ProgressBar from '../../components/ProgressBar/ProgressBar';
// import Spinner from '../../components/Spinner/Spinner';
// import Table from '../../components/Table/Table';
// import List from '../../components/List/List';
// import Image from '../../components/Image/Image';
// import Icon from '../../components/Icon/Icon';

// Importing Navigation
import Navbar from '../../components/Navbar/Navbar';
//import Sidebar from '../../components/Sidebar/Sidebar';
//import Menu from '../../components/Menu/Menu';

// Importing Media
import ImageGallery from '../../components/ImageGallery/ImageGallery';
//import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
//import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
//import Carousel from '../../components/Carousel/Carousel';

// Importing Data Display
import Chart from '../../components/Chart/Chart';
//import Graph from '../../components/Graph/Graph';
//import Map from '../../components/Map/Map';
// import Statistic from '../../components/Statistic/Statistic';

// Importing Utility Components
import Divider from '../../components/Divider/Divider';
// import Avatar from '../../components/Avatar/Avatar';
// import Tag from '../../components/Tag/Tag';
// import Rating from '../../components/Rating/Rating';

const Components: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const components = [
    { name: 'Hero Sections', category: 'Hero Sections', count: 12, component: HeroSection },
    { name: 'Feature Sections', category: 'Feature Sections', count: 18, component: FeatureSection },
    { name: 'CTA Sections', category: 'CTA Sections', count: 11, component: CTASection },
    { name: 'Pricing Sections', category: 'Pricing Sections', count: 13, component: PricingSection },
    { name: 'Header Sections', category: 'Header Sections', count: 10, component: HeaderSection },
    { name: 'Footer Sections', category: 'Footer Sections', count: 7, component: FooterSection },
    { name: 'Testimonials Sections', category: 'Testimonials Sections', count: 7, component: TestimonialsSection },
    { name: 'FAQ Sections', category: 'FAQ Sections', count: 5, component: FAQSection },
    { name: 'Team Sections', category: 'Team Sections', count: 5, component: TeamSection },
    { name: 'Newsletter Sections', category: 'Newsletter Sections', count: 7, component: NewsletterSection },
  ];

  const pages = [
    { name: 'Landing Pages', category: 'Landing Pages', count: 5, component: LandingPage },
    { name: 'About Pages', category: 'About Pages', count: 8, component: AboutPage },
    { name: 'Contact Pages', category: 'Contact Pages', count: 4, component: ContactPage },
    { name: 'Login Pages', category: 'Login Pages', count: 4, component: LoginPage },
    { name: 'Registration Pages', category: 'Registration Pages', count: 4, component: RegistrationPage },
    { name: 'Dashboard Pages', category: 'Dashboard Pages', count: 4, component: DashboardPage },
    { name: 'Profile Pages', category: 'Profile Pages', count: 4, component: ProfilePage },
  ];

  const layouts = [
    { name: 'Grid Layouts', category: 'Grid Layouts', count: 10, component: GridLayout },
    { name: 'Flex Layouts', category: 'Flex Layouts', count: 7, component: FlexLayout },
    
  ];

  const forms = [
    { name: 'Login Forms', category: 'Login Forms', count: 6, component: LoginForm },
    { name: 'Registration Forms', category: 'Registration Forms', count: 9, component: RegistrationForm },
    { name: 'Contact Forms', category: 'Contact Forms', count: 4, component: ContactForm },
    { name: 'Subscription Forms', category: 'Subscription Forms', count: 4, component: SubscriptionForm },
    { name: 'Feedback Forms', category: 'Feedback Forms', count: 4, component: FeedbackForm },
    { name: 'Search Forms', category: 'Search Forms', count: 4, component: SearchForm },
    
  ];

  const uiElements = [
    { name: 'Buttons', category: 'Buttons', count: 8, component: Button },
    { name: 'Cards', category: 'Cards', count: 12, component: Card },
    /*{ name: 'Modals', category: 'Modals', count: 5, component: Modal },
    { name: 'Tabs', category: 'Tabs', count: 4, component: Tab },
    { name: 'Accordions', category: 'Accordions', count: 6, component: Accordion },
    { name: 'Tooltips', category: 'Tooltips', count: 5, component: Tooltip },
    { name: 'Dropdowns', category: 'Dropdowns', count: 7, component: Dropdown },
    { name: 'Alerts', category: 'Alerts', count: 4, component: Alert },
    { name: 'Badges', category: 'Badges', count: 3, component: Badge },*/
  ];

  const navigation = [
    { name: 'Navbars', category: 'Navbars', count: 5, component: Navbar },
    //{ name: 'Sidebars', category: 'Sidebars', count: 5, component: Sidebar },
    //{ name: 'Menus', category: 'Menus', count: 5, component: Menu },
  ];

  const media = [
    { name: 'Image Galleries', category: 'Image Galleries', count: 4, component: ImageGallery },
    //{ name: 'Video Players', category: 'Video Players', count: 3, component: VideoPlayer },
    //{ name: 'Audio Players', category: 'Audio Players', count: 3, component: AudioPlayer },
    //{ name: 'Carousels', category: 'Carousels', count: 3, component: Carousel },
  ];

  const dataDisplay = [
    { name: 'Charts', category: 'Charts', count: 4, component: Chart },
    //{ name: 'Graphs', category: 'Graphs', count: 4, component: Graph },
    //{ name: 'Maps', category: 'Maps', count: 4, component: Map },
  ];

  const utility = [
    { name: 'Dividers', category: 'Dividers', count: 3, component: Divider },
  ];

  const filteredComponents = (section: { name: string, category: string, count: number, component: React.FC }[]) =>
    section.filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className={styles.componentsContainer}>
      <div className={styles.heroSection}>
        <h1>Huge collection of sections</h1>
        <h2>Infinite combinations</h2>
        <p>
          Discover a multitude of customizable options to craft pixel-perfect pages with ease.
        </p>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search for multiple components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.sectionsContainer}>
        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Page Sections</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(components).map((component, index) => (
              <Link key={index} to={`/${component.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{component.category}</p>
                    <p className={styles.blockCount}>{component.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Pages</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(pages).map((page, index) => (
              <Link key={index} to={`/${page.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{page.category}</p>
                    <p className={styles.blockCount}>{page.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Layouts</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(layouts).map((layout, index) => (
              <Link key={index} to={`/${layout.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{layout.category}</p>
                    <p className={styles.blockCount}>{layout.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Forms</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(forms).map((form, index) => (
              <Link key={index} to={`/${form.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{form.category}</p>
                    <p className={styles.blockCount}>{form.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>UI Elements</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(uiElements).map((element, index) => (
              <Link key={index} to={`/${element.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{element.category}</p>
                    <p className={styles.blockCount}>{element.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Navigation</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(navigation).map((nav, index) => (
              <Link key={index} to={`/${nav.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{nav.category}</p>
                    <p className={styles.blockCount}>{nav.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Media</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(media).map((mediaItem, index) => (
              <Link key={index} to={`/${mediaItem.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{mediaItem.category}</p>
                    <p className={styles.blockCount}>{mediaItem.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Data Display</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(dataDisplay).map((dataItem, index) => (
              <Link key={index} to={`/${dataItem.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{dataItem.category}</p>
                    <p className={styles.blockCount}>{dataItem.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Utility Components</h3>
          <div className={styles.blocksContainer}>
            {filteredComponents(utility).map((util, index) => (
              <Link key={index} to={`/${util.name.toLowerCase().replace(/ /g, '-')}`} className={styles.blockLink}>
                <div className={styles.block}>
                  <div className={styles.blockImage}>Image</div>
                  <div className={styles.blockContent}>
                    <p className={styles.blockTitle}>{util.category}</p>
                    <p className={styles.blockCount}>{util.count} components</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
