import { Layout } from 'antd';
import styles from '../../styles/Layout.module.css';

const { Header } =  Layout;

const HeaderView = () => {
  return <Header className={`${styles.header} site-layout-background`}> Header Header Header Header Header</Header>
};

export default HeaderView;