import React from 'react';
import { ListView, Checkbox, WingBlank, Stepper } from 'antd-mobile';
import ReactDOM from 'react-dom';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>
        you can custom body wrap element
      </span>
      {props.children}
    </div>
  );
}
const CheckboxItem = Checkbox.CheckboxItem;
const data = [
  {
    id: '1',
    img: 'https://dummyimage.com/hd1080',
    title: 'Paket Sembako Ajaib',
    des:
      '2 Pak Kopi sachet, 5 Pak Mie Instan, 5 Pak Detergent, 5 Pak Rokok ',
    price: '2.000.000',
    discount: '1.700.000',
    metaDes:
      'Potongan hingga Rp10.000 dengan min. pembelian Rp.0; Potongan Rp60.000 dengan mi. pembelian Rp300.00',
    url: '',
  },
  {
    id: '2',
    img: 'https://dummyimage.com/hd1080',
    title: 'Paket Sembako Kilat',
    des:
      '4 Kanopi, 3 Kursi Lipat, 5 Meter terpal, 4 bilah tiang, 2 meja',
    price: '300.000',
    discount: '250.000',
    metaDes:
      'Potongan hingga Rp10.000 dengan min. pembelian Rp.0; Potongan Rp60.000 dengan mi. pembelian Rp300.00',
    url: '',
  },
  {
    id: '3',
    img: 'https://dummyimage.com/hd1080',
    title: 'Paket Sembako Cepat',
    des: '4 Pak mie instan, 5 Pak Shampo, 9 Pak Sabun, 5 Pak Odol',
    price: '500.000',
    discount: '400.000',
    metaDes:
      'Potongan hingga Rp10.000 dengan min. pembelian Rp.0; Potongan Rp60.000 dengan mi. pembelian Rp300.00',
    url: '',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];

function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = pIndex * NUM_SECTIONS + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class PageView extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) =>
      dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) =>
      dataBlob[rowID];

    genData();

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4,
    };
  }

  onChange = val => {
    console.log(val);
  };

  onChange1 = val => {
    console.log(val);
    this.setState({ val });
  };

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    const hei =
      document.documentElement.clientHeight -
      ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    // simulate initial Ajax

    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(
          dataBlobs,
          sectionIDs,
          rowIDs,
        ),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(
          dataBlobs,
          sectionIDs,
          rowIDs,
        ),
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >
            <CheckboxItem
              key={obj.id}
              onChange={() => this.onChange(obj.id)}
            >
              {obj.title}
            </CheckboxItem>
          </div>
          <div
            style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}
          >
            <img
              style={{ height: '64px', marginRight: '15px' }}
              src={obj.img}
              alt=""
            />
            <div style={{ lineHeight: 1 }}>
              <div
                style={{ marginBottom: '8px', fontWeight: 'bold' }}
              >
                {obj.des}
              </div>
              <div>
                <span style={{ fontSize: '30px', color: '#FF6E27' }}>
                  35
                </span>
                ¥ {rowID}
              </div>
              <div>
                <Stepper
                  showNumber
                  min={0}
                  value={this.state.val}
                  onChange={this.onChange1}
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    // for (let section of sectionIDs.values()) {
    //   console.log('section=' + section);
    // }

    // console.log(`section:${sectionIDs.values()}`);

    // for (let row of rowIDs.values()) {
    //   console.log('row=' + row);
    // }
    // console.log(`row:${rowIDs.values()}`);
    return (
      <WingBlank>
        <ListView
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>
          )}
          renderBodyComponent={() => <MyBody />}
          renderRow={row}
          renderSeparator={separator}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
          onScroll={() => {
            console.log('scroll');
          }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </WingBlank>
    );
  }
}
