import styles from './Footer.module.css';

const URL_PREFIX = 'https://docs.github.com/en/site-policy';

const footerItems = [
  {
    title: 'Terms',
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: 'Privacy',
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: 'Security',
    link: 'https://github.com/security',
  },
  {
    title: 'Statue',
    link: 'https://www.githubstatus.com',
  },
  {
    title: 'Docs',
    link: 'https://docs.github.com/en',
  },
  {
    title: 'Contact Github',
    link: 'https://support.github.com/?tags=dotcom-footer',
  },
  {
    title: 'Pricing',
    link: 'https://github.com/pricing',
  },
  {
    title: 'API',
    link: 'https://docs.github.com/en',
  },
  {
    title: 'Training',
    link: 'https://services.github.com/',
  },
  {
    title: 'Blog',
    link: 'https://github.blog/',
  },
  {
    title: 'About',
    link: 'https://github.com/about',
  },
];

const Footer = () => {
  return (
    <>
      <ul className={styles.footer}>
        {footerItems.map((item) => (
          <li
            className={styles.item}
            key={item.title}
          >
            <a
              className={styles.link}
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
