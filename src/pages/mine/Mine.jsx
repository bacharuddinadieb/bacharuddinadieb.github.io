import React, { Component } from 'react';
import { List } from 'antd-mobile';
import CryptoJS from 'crypto-js';
import Axios from 'axios';
import qs from 'qs';

const Item = List.Item;
const Brief = Item.Brief;

export default class Mine extends Component {
  static propTypes = {};

  constructor(props) {
    super();
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(props) {}

  shouldComponentUpdate(props, state) {
    return true;
  }

  componentWillUpdate(props, state) {}

  componentDidUpdate(props, state) {}

  componentWillUnmount() {}

  state = {
    disabled: false,
  };

  render() {
    console.log('adieb');
    let secret = 'asd';
    let timestamp = new Date().toISOString();
    let NoRek = '888801000003301';
    let requestPath = `/sandbox/v2/inquiry/${NoRek}`;
    let httpMethod = 'GET';
    // let payload =  'path=' + requestPath + '&verb=' + httpMethod +
    // '&token=Bearer ' + token + '&timestamp=' + timestamp +
    // '&body=' + requestBody;
    // let hmacSignature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, secret_key));

    fetch(
      'https://sandbox.partner.api.bri.co.id/oauth/client_credential/accesstoken?grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'include',
        body: {
          client_id: '8kpXbR0fqaq9ZLKRtU7ofLhZG1tpV2kA',
          client_secret: 'xPBt4iE2BOQQZrAf',
        },
      },
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    // const options = {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin':
    //       'https://sandbox.partner.api.bri.co.id/oauth/client_credential/accesstoken?grant_type=client_credentials',
    //   },
    //   data: qs.stringify({
    //     client_id: '8kpXbR0fqaq9ZLKRtU7ofLhZG1tpV2kA',
    //     client_secret: 'xPBt4iE2BOQQZrAf',
    //   }),
    //   url:
    //     'https://sandbox.partner.api.bri.co.id/oauth/client_credential/accesstoken?grant_type=client_credentials',
    // };
    // Axios(options).then(res => {
    //   console.log(res);
    // });

    // fetch().then(()=>{

    // }).catch(()=>{

    // })
    return (
      <div>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra={'extra content'}>Title</Item>
        </List>
        <List renderHeader={() => 'Subtitle'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            platform="android"
          >
            ListItem （Android）
            <Brief>
              There may have water ripple effect of <br /> material if
              you set the click event.
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List
          renderHeader={() =>
            'Customized Right Side（Empty Content / Text / Image）'
          }
          className="my-list"
        >
          <Item>Title</Item>
          <Item arrow="horizontal" onClick={() => {}}>
            Title
          </Item>
          <Item
            extra="extra content"
            arrow="horizontal"
            onClick={() => {}}
          >
            Title
          </Item>
          <Item
            extra="10:30"
            align="top"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List
          renderHeader={() => 'Align Vertical Center'}
          className="my-list"
        >
          <Item multipleLine extra="extra content">
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            My wallet
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
        </List>
        <List
          renderHeader={() => 'Text Wrapping'}
          className="my-list"
        >
          <Item data-seed="logId">
            Single line，long text will be hidden with ellipsis；
          </Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text
            Long Text Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text
            Long Text
          </Item>
          <Item extra="no arrow" arrow="empty" className="spe" wrap>
            In rare cases, the text of right side will wrap in the
            single line with long text. long text long text long text
          </Item>
        </List>
        <List renderHeader={() => 'Other'} className="my-list">
          <Item
            disabled={this.state.disabled}
            extra=""
            onClick={() => {
              console.log('click', this.state.disabled);
              this.setState({ disabled: true });
            }}
          >
            Click to disable
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">Html select element</option>
              <option value="2" disabled>
                Unable to select
              </option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>
      </div>
    );
  }
}
