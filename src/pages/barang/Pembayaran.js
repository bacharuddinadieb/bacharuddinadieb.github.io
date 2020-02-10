import React, { Component } from 'react';
import {
  WingBlank,
  Card,
  NavBar,
  Icon,
  WhiteSpace,
  Button,
  Accordion,
  List,
  Steps,
} from 'antd-mobile';
const Step = Steps.Step;
export default class Pembayaran extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => window.location.replace('/home')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          Pembayaran
        </NavBar>
        <WingBlank size="lg">
          <WhiteSpace />
          <Card style={{ minHeight: 'initial' }}>
            <Card.Body>
              <div>
                <p
                  style={{
                    fontSize: '15px',
                    margin: '0',
                    float: 'left',
                  }}
                >
                  Total:<br></br>
                  <span
                    style={{
                      fontSize: '18px',
                      color: '#388BF2',
                    }}
                  >
                    Rp. 250.000
                  </span>
                </p>
              </div>
              <Button
                type="ghost"
                inline
                size="small"
                style={{ float: 'right' }}
              >
                Detail
              </Button>
            </Card.Body>
          </Card>
          <WhiteSpace />
          <Card>
            <Card.Header
              title="Bank BRI"
              thumb={`${window.location.origin}/icon/bri.svg`}
              extra={<span>Otomatis</span>}
            />
            <Card.Body>
              <div>
                <p
                  style={{
                    fontSize: '15px',
                    margin: '0',
                    float: 'left',
                  }}
                >
                  No. Virtual Account:<br></br>
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#388BF2',
                    }}
                  >
                    128 082940183940
                  </span>
                </p>
              </div>
              <Button
                type="ghost"
                inline
                size="small"
                style={{ float: 'right' }}
              >
                Salin
              </Button>
            </Card.Body>
            <Card.Footer
              style={{ fontSize: '12px' }}
              content="Bayar pesanan ke Virtual Account di atas sebelum membuat pesanan kembali dengan Virtual Account agar nomor tetap sama. Hanya menerima transfer dari Bank BRI"
              //   extra={<div>extra footer content</div>}
            />
          </Card>
          <WhiteSpace />
          <Accordion
            defaultActiveKey="0"
            className="my-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel
              header="Petunjuk Transfer ATM "
              className="pad"
            >
              <WhiteSpace />
              <WingBlank>
                <Steps size="small">
                  <Step
                    status="process"
                    description="Pilih Transaksi Lain > Pembayaran > Lainya > Briva"
                  />
                  <Step
                    status="process"
                    description="Masukkan Nomor BRIVA 128 082940183940 kemudian pilih Benar "
                  />
                  <Step
                    status="process"
                    description="Periksa informasi yang tertera di layar. Pastikan Merchant adalah CLEAR. Total  Tagihan sudah benar dan username kamu sudah benar. Jika benar pilih Ya"
                  />
                </Steps>
              </WingBlank>
            </Accordion.Panel>
          </Accordion>
          <WhiteSpace size="lg" />
          <Button type="primary">Oke</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}
