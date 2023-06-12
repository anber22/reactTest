import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function App() {
  return (
    <div className="w-full">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <h3>内容轮播图-1</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default App;
