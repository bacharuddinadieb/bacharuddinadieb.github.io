import React, { Component } from 'react';
import {
  WhiteSpace,
  Tabs,
  Badge,
  SearchBar,
  NavBar,
  TabBar,
  Icon,
  Button,
  Checkbox,
  WingBlank,
  Toast,
} from 'antd-mobile';
import BarangSaya from './barangSaya/Index';
import BarangBeli from './barangBeli/Index';

const tabs = [
  { title: <Badge>Beli Barang</Badge> },
  { title: <Badge>Barang Saya</Badge> },
];

const CheckboxItem = Checkbox.CheckboxItem;

export default class Barang extends Component {
  constructor(props) {
    super(props);
  }

  renderContent = tab => {
    return (
      <div className="content">
        <BarangSaya />
      </div>
    );
  };

  render() {
    return (
      <div className="barang">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => window.location.replace('/home')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          Barang
        </NavBar>
        <SearchBar
          placeholder="Cari disini"
          ref={ref => (this.manualFocusInst = ref)}
        />
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}
        >
          {this.renderContent}
          {
            <div className="content">
              <BarangBeli />
            </div>
          }
        </Tabs>
        <div
          style={{
            width: '100%',
            backgroundColor: '#fff',
            position: 'fixed',
            bottom: '0',
            padding: '6px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <WingBlank>
            {/* <CheckboxItem
            key={'pilih-semua'}
            onChange={() => console.log('pilih-semua')}
          >
            <span style={{ fontSize: '14px' }}>Pilih Semua</span>
            <Button
              type="primary"
              inline
              size="small"
              style={{ marginRight: '4px', float: 'right' }}
            >
              Bayar
            </Button>
          </CheckboxItem> */}
            <p
              style={{
                fontSize: '15px',
                margin: '0',
                float: 'left',
              }}
            >
              Total:<br></br>Rp. 250.000
            </p>
            <Button
              type="primary"
              inline
              size="small"
              style={{ float: 'right' }}
              onClick={() => {
                Toast.loading('Loading...', 0.5, () => {
                  // history.push("/pembayaran");
                  window.location.replace('/pembayaran');
                });
              }}
            >
              Bayar
            </Button>
          </WingBlank>
        </div>
      </div>
    );
  }
}
