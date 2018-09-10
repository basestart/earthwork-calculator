import React, { Component } from 'react';
import './App.css';
import { Input, Row, Col, Select  } from 'antd';
const Option = Select.Option;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      len: '',
      lenType: 'mi',
      wid: '',
      widType: 'mi',
      dep: '',
      depType: 'mi'
    }
  }

  reload () {
    this.init();
    this.animate();
  }

  componentDidMount () {
    // this.reload()
    // this.init();
    // this.animate();
    // echarts.init(document.getElementById('sq')).setOption({
    //   series: {
    //       type: 'pie',
    //       data: [
    //           {name: 'A', value: 1212},
    //           {name: 'B', value: 2323},
    //           {name: 'C', value: 1919}
    //       ]
    //   }
    // });
  }

  handleLen (e) {
    this.setState({
      len: e.target.value
    })
  }

  handleLenChange (value) {
    this.setState({
      lenType: value
    })
  }

  handleWid (e) {
    this.setState({
      wid: e.target.value
    })
  }

  handleWidChange (value) {
    this.setState({
      widType: value
    })
  }

  handleDep (e) {
    this.setState({
      dep: e.target.value
    })
  }

  handleDepChange (value) {
    this.setState({
      depType: value
    })
  }

  render() {
    let {
      len, lenType, wid, widType, dep, depType
    } = this.state;
    
    let tlen = lenType === 'mi' ? 1 : 0.01;
    let twid = widType === 'mi' ? 1 : 0.01;
    let tdep = depType === 'mi' ? 1 : 0.01;
    let tql = tlen * twid;
    let tmul = tlen * twid * tdep;
    return (
      <div className="App">
        <Row>
          <h2 style={{fontWeight:"bold", marginTop: "20px"}}>土方计算器</h2>
        </Row>
        <Row style={{marginBottom: "12px"}}>
          <Col span={4} style={{paddingTop: "4px", fontWeight:"bold"}}>长度</Col>
          <Col span={15}><Input placeholder="长度" value={len} onChange={this.handleLen.bind(this)}/></Col> 
          <Col span={5}>
            <Select defaultValue="mi" onChange={this.handleLenChange.bind(this)}>
              <Option value="mi">米</Option>
              <Option value="gongfen">公分</Option>
            </Select>
          </Col> 
        </Row>
        <Row style={{marginBottom: "12px"}}>
          <Col span={4} style={{paddingTop: "4px", fontWeight:"bold"}}>宽度</Col>
          <Col span={15}><Input placeholder="宽度" value={wid} onChange={this.handleWid.bind(this)}/></Col> 
          <Col span={5}>
            <Select defaultValue="mi" onChange={this.handleWidChange.bind(this)}>
              <Option value="mi">米</Option>
              <Option value="gongfen">公分</Option>
            </Select>
          </Col>  
        </Row>
        <Row style={{marginBottom: "12px"}}>
          <Col span={4} style={{paddingTop: "4px", fontWeight:"bold"}}>深度</Col>
          <Col span={15}><Input placeholder="深度" value={dep} onChange={this.handleDep.bind(this)}/></Col>  
          <Col span={5}>
            <Select defaultValue="mi" onChange={this.handleDepChange.bind(this)}>
              <Option value="mi">米</Option>
              <Option value="gongfen">公分</Option>
            </Select>
          </Col> 
        </Row>
        <Row style={{marginTop: "10px"}}>
          <Col span={24}><h3 style={{"fontWeight":"bold"}}>总面积:<span style={{color:"red"}}>{(tql * Number(len) * Number(wid)).toFixed(2) || 0} </span>平 </h3></Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
           <Col span={24}><h3 style={{"fontWeight":"bold"}}>总体积:<span style={{color:"red"}}>{(tmul * Number(len) * Number(wid) * Number(dep)).toFixed(2) || 0}</span> 方</h3></Col>  
        </Row>
      </div>
    );
  }
}

export default App;
