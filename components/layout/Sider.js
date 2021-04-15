import React, {useState} from 'react';
import { Layout, Menu, Divider, Button } from 'antd';
import  Logo from '../../assets/logo.svg';
import  SmallLogo from '../../assets/logo-2.svg';
import  OverviewIcon from '../../assets/overview-icon.svg';
import  ProductIcon from '../../assets/product-icon.svg';
import  CampaignIcon from '../../assets/campaign-icon.svg';
import  ScheduleIcon from '../../assets/schedule-icon.svg';
import  PayoutIcon from '../../assets/payout-icon.svg';
import  StatementIcon from '../../assets/statement-icon.svg';
import  SettingIcon from '../../assets/setting-icon.svg';
import  ProIcon from '../../assets/pro-icon.svg';
import styles from '../../styles/Layout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'

const { Sider } =  Layout;
const iconStyle = {
  position: 'relative',
  top: 6,
};

const SiderView = () => {
  const router = useRouter();
const [ collapse, setCollapse ] = useState(false);
  const toggleCollapsed = () => {
    setCollapse(prev => !prev);
  };
  return (
    <Sider theme={'light'} className={styles.sider} width={256} collapsible collapsed={collapse} style={{
      padding: collapse && '20px 0'
    }} trigger={null}>
      <div className={styles.logo} onClick={toggleCollapsed}>
        { collapse ?  <SmallLogo style={{ marginLeft: 10 }} /> : <Logo /> }
      </div>
      <Menu defaultSelectedKeys={['overview']} style={{ border: 'none' }}>
        {!collapse &&  <p className={styles.smallText}>Admin tools</p>}
        <Menu.Item key="/overview" onClick={() => router.push('/overview')} icon={<OverviewIcon style={iconStyle} />}>
            Overview
        </Menu.Item>
        <Menu.Item key="product" onClick={() => router.push('/product')} icon={<ProductIcon style={iconStyle} />}>
           Products
         </Menu.Item>
        <Menu.Item key="campaign" onClick={() => router.push('/campaign')} icon={<CampaignIcon style={iconStyle} />}>Campaigns</Menu.Item>
        <Menu.Item key="schedule" onClick={() => router.push('/campaign')} icon={<ScheduleIcon style={iconStyle} />}>Schedules</Menu.Item>
        <Menu.Item key="payout" onClick={() => router.push('/campaign')} icon={<PayoutIcon style={iconStyle} />}>Payouts</Menu.Item>
        <Menu.Item key="statement" onClick={() => router.push('/campaign')} icon={<StatementIcon style={iconStyle} />}>Statements</Menu.Item>
        <Menu.Item key="setting" onClick={() => router.push('/campaign')} icon={<SettingIcon style={iconStyle} />}>Settings</Menu.Item>
          <div className={styles.divider}>
            <Divider />
          </div>
        {!collapse &&  <p className={styles.smallText}>Insights</p>}
        <Menu.Item key="setting" onClick={() => router.push('/campaign')} icon={<SettingIcon style={iconStyle} />}>Settings</Menu.Item>
        <Menu.Item key="setting" onClick={() => router.push('/campaign')} icon={<SettingIcon style={iconStyle} />}>Settings</Menu.Item>
        <Menu.Item key="setting" onClick={() => router.push('/campaign')} icon={<SettingIcon style={iconStyle} />}>3rd</Menu.Item>
      </Menu>
      <ProIcon style={{marginTop: 30 }}/>
      <Button>Get Pro Now</Button>
    </Sider>
  )
};

export default SiderView;