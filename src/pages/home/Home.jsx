import React, { Component } from 'react';
import {
  PullToRefresh,
  Icon,
  WingBlank,
  NavBar,
  Grid,
  Toast,
  WhiteSpace,
  Button,
  Badge,
} from 'antd-mobile';
import ReactDOM from 'react-dom';
import './styles.css';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}
const data2 = Array.from(new Array(9)).map(() => ({
  icon:
    'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

const dataIconPengguna = [
  {
    tittle: 'Menjadi Mitra',
    icon: 'store.svg',
    url: '/mitra',
  },
  {
    tittle: 'Terdekat',
    icon: 'terdekat.svg',
    url: '/terdekat',
  },
  {
    tittle: 'Catatan',
    icon: 'catatan.svg',
    url: '/catatan',
  },
  {
    tittle: 'Dompet',
    icon: 'dompet.svg',
    url: '/dompet',
  },
];
const dataIconMitra = [
  {
    tittle: 'Restock Barang',
    icon: 'restock.svg',
    url: '/restock',
  },
  {
    tittle: 'Tracking',
    icon: 'tracking.svg',
    url: '/tracking',
  },
  {
    tittle: 'Dompet',
    icon: 'dompet.svg',
    url: '/dompet',
  },
  {
    tittle: 'Catatan',
    icon: 'catatan.svg',
    url: '/catatan',
  },
  {
    tittle: 'Laporan',
    icon: 'laporan.svg',
    url: '/laporan',
  },
  {
    tittle: 'Kasir',
    icon: 'kasir.svg',
    url: '/kasir',
  },
];
// class Home extends Component
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    const hei =
      this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(
      () =>
        this.setState({
          height: hei,
          data: genData(),
        }),
      0,
    );
  }

  render() {
    return (
      <div>
        {/* <div
          style={{
            backgroundColor: '#1890FF',
          }}
        >
          <WhiteSpace size="lg" />
          <WingBlank
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                width: '6em',
                height: '2.5em',
                background: `url(${window.location.origin}/icon/main_logo.svg) center center /  6em no-repeat`,
              }}
            />
            <div
              onClick={() => console.log('yihaaa')}
              style={{
                width: '1.75em',
                height: '1.75em',
                background: `url(${window.location.origin}/icon/notif.svg) center center /  1.3em no-repeat`,
              }}
            />
          </WingBlank>
        </div> */}
        <PullToRefresh
          damping={60}
          ref={el => (this.ptr = el)}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          indicator={{
            activate: 'Lepas untuk memuat ulang',
            finish: 'Yay!',
          }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            setTimeout(() => {
              this.setState({ refreshing: false });
            }, 1000);
          }}
        >
          <NavBar
            style={{
              backgroundColor: '#1890FF',
              paddingTop: '1em',
              height: 'initial',
            }}
            mode="light"
            icon={
              <div
                style={{
                  width: '5em',
                  height: '2.5em',
                  float: 'left',
                  background: `url(${window.location.origin}/icon/main_logo.svg) center center /  5em no-repeat`,
                }}
              />
            }
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Badge text="1">
                {/* <span
                style={{
                  width: '26px',
                  height: '26px',
                  background: '#ddd',
                  display: 'inline-block',
                }}
              /> */}
                <div
                  onClick={() => console.log('yihaaa')}
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    display: 'inline-block',
                    background: `url(${window.location.origin}/icon/notif.svg) center center /  1.1em no-repeat`,
                  }}
                />
              </Badge>,
            ]}
          ></NavBar>
          <div
            style={{
              paddingTop: '3vh',
              backgroundColor: '#1890FF',
              position: 'relative',
              borderBottomLeftRadius: '15%',
              borderBottomRightRadius: '15%',
            }}
          >
            <WingBlank>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <img
                  style={{
                    height: '25%',
                    width: '25%',
                    display: 'block',
                    borderRadius: '1000px',
                  }}
                  src={
                    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                  }
                  alt=""
                />
                <h2
                  style={{
                    textAlign: 'center',
                    margin: '0 0 .25em',
                    color: '#fff',
                  }}
                >
                  Halo, Ade Resie!
                </h2>
              </div>
              {/* <div
                style={{
                  padding: '1em 0',
                  margin: '0 auto 1.5em',
                  backgroundColor: '#fff',
                  width: '50%',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  bottom: '-1.5em',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#1272ED',
                    padding: '.4em 1.2em',
                    position: 'absolute',
                    borderRadius: '100px',
                    top: '0',
                    marginTop: '-1em',
                    color: '#fff',
                  }}
                >
                  Point Saya
                </div>
                <h2 style={{ textAlign: 'center', margin: '0' }}>
                  2.199.094
                </h2>
              </div> */}
              <div
                style={{
                  padding: '1em',
                  margin: '0 auto',
                  backgroundColor: '#fff',
                  width: '100%',
                  borderRadius: '5px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  bottom: '-2em',
                  flexWrap: 'wrap',
                }}
              >
                <p style={{ margin: '0' }}>Saldo</p>
                <div style={{ width: '100%' }}>
                  <h2 style={{ margin: '0', float: 'left' }}>
                    Rp. 250.000
                  </h2>
                  <Button
                    type="primary"
                    inline
                    size="small"
                    style={{
                      marginLeft: '.5em',
                      float: 'right',
                      backgroundColor: '#FBAF18',
                      color: '#111',
                    }}
                  >
                    Top Up
                  </Button>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      float: 'right',
                      marginTop: '.25em',
                      background: `url(${window.location.origin}/icon/refresh.svg) center center /  21px 21px no-repeat`,
                    }}
                  />
                </div>
              </div>
            </WingBlank>
          </div>
          <WingBlank style={{ marginTop: '3em' }}>
            <Grid
              onClick={dataItem => {
                console.log(dataItem);
                Toast.loading('Loading...', 0.5, () => {
                  // history.push("/shelf");
                  window.location.replace(dataItem.url);
                });
              }}
              hasLine={false}
              data={dataIconMitra}
              columnNum={3}
              style={{ background: '#f5f5f9' }}
              renderItem={dataItem => (
                <div style={{ padding: '0' }}>
                  <img
                    src={`${window.location.origin}/icon/${dataItem.icon}`}
                    style={{ height: '3em' }}
                    alt=""
                  />
                  <div
                    style={{
                      color: '#111',
                      fontSize: '14px',
                      marginTop: '0',
                    }}
                  >
                    <span>{dataItem.tittle}</span>
                  </div>
                </div>
              )}
            />
          </WingBlank>
        </PullToRefresh>
      </div>
    );
  }
}
