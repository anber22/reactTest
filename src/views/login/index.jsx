import { Button } from 'antd';
import { useState } from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

function Login() {
  let [nodeIndex, setNodeIndex] = useState(-1);
  const [rangeIndex, setRangeIndex] = useState(0);
  const changeFQA = (index) => {
    console.log('节点');
    if (nodeIndex === index) {
      nodeIndex = setNodeIndex(-1);
    } else {
      nodeIndex = setNodeIndex(index);
    }
  };
  const changeRangeIndex = (index) => {
    if (index === 1) {
      if (rangeIndex < 2) {
        setRangeIndex(rangeIndex + 1);
      }
    } else if (rangeIndex > 0) {
      setRangeIndex(rangeIndex - 1);
    }
  };
  return (
    <div
      className="h-full flex flex-col bg-gray-100 dark:bg-dark"
      style={{ paddingBottom: '50px' }}
    >
      <div
        className="tips"
        style={{ 'font-size': '10px', color: '#888', padding: '8px 16px' }}
      >
        <p>
          Get a cheap iPhone 13 used. UpTrade compares prices from the most
          reputable used & refurbished device resellers to find you the best
          deal for iPhone 13 refurbished or used.
        </p>
      </div>
      <div style={{ padding: '8px 16px' }}>
        <p style={{ 'font-size': '30px', 'font-weight': '700', color: '#000' }}>
          Best Certified Used iPhone 13 and Refurbished iPhone 13
        </p>
        <div>
          <p
            className="flex"
            style={{
              'align-items': 'center',
              'font-size': '12px',
              'font-weight': 400,
              color: '#000',
              'margin-bottom': '16px',
            }}
          >
            <img
              src="/src/assets/icons/check-circle.svg"
              style={{ 'margin-right': '6px' }}
              alt=""
            />
            Professionally Refurbished
          </p>
          <p
            className="flex"
            style={{
              'align-items': 'center',
              'font-size': '12px',
              'font-weight': 400,
              color: '#000',
              'margin-bottom': '16px',
            }}
          >
            <img
              src="/src/assets/icons/file-text.svg"
              style={{ 'margin-right': '6px' }}
              alt=""
            />
            Clean IMEI
          </p>
          <p
            className="flex"
            style={{
              'align-items': 'center',
              'font-size': '12px',
              'font-weight': 400,
              color: '#000',
              'margin-bottom': '16px',
            }}
          >
            <img
              src="/src/assets/icons/activity.svg"
              style={{ 'margin-right': '6px' }}
              alt=""
            />
            Fully Functional
          </p>
          <p
            className="flex"
            style={{
              'font-size': '12px',
              'font-weight': 400,
              color: '#000',
              'margin-bottom': '16px',
            }}
          >
            <img
              src="/src/assets/icons/award.svg"
              style={{ width: '15px', height: '15px', 'margin-right': '6px' }}
              alt=""
            />
            30-Day Money Back Guarantee
          </p>
        </div>
        <p
          style={{
            'font-size': '20px',
            color: '#000',
            'font-weight': 700,
            margin: '32px 0',
          }}
        >
          From
          <strong
            style={{ fontSize: '36px', fontWeight: '700', marginLeft: '6px' }}
          >
            $514
          </strong>
        </p>
        <Button
          style={{
            width: '100%',
            height: '42px',
            background: 'linear-gradient(180deg,#1ab4e7,#3498db)',
            color: '#fff',
            'border-radius': '4px',
            outline: 0,
            'box-shadow': 'none',
            'line-height': 1.75,
            'font-size': '18px',
            'font-weight': 500,
            padding: '5px 15px',
            border: 0,
          }}
        >
          View Products
        </Button>
      </div>
      <div
        className="flex flex-col"
        style={{ backgroundColor: 'white', padding: '24px' }}
      >
        <div className="flex justify-center">
          <img
            style={{ width: '250px', height: '250px' }}
            src="https://d3c745jesl5pj3.cloudfront.net/sell/web/apple-iphone-13_0ca6a448189d48638c7299e4ee362508_250_a7efbe7789434c3da3388dee51392fdd.webp"
            alt=""
          />
        </div>

        <div
          className="flex justify-between"
          style={{
            border: '1px solid #e2e2e2',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          <div>
            <img
              style={{ width: '50px', height: '50px' }}
              src="https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png"
              alt=""
            />
            <p style={{ fontSize: '20px' }}>iPhone 13</p>
            <p style={{ color: '#3d3d3d' }}>AT&T 128GB Blue</p>
          </div>
          <div>
            <div
              style={{
                width: '103px',
                'font-size': '18px',
                'font-weight': 700,
                'border-radius': '25px',
                height: '28px',
                textAlign: 'center',
                backgroundColor: '#58a55b',
                color: '#fff',
              }}
            >
              Excellent
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '36px',
                color: '#3d3d3d',
                marginTop: '20px',
              }}
            >
              $531
            </div>
          </div>
        </div>
        <div
          className="flex justify-between"
          style={{
            border: '1px solid #e2e2e2',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          <div>
            <img
              style={{ width: '50px', height: '50px' }}
              src="https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png"
              alt=""
            />
            <p style={{ fontSize: '20px' }}>iPhone 13</p>
            <p style={{ color: '#3d3d3d' }}>T-Mobile 128GB Starlight</p>
          </div>
          <div>
            <div
              style={{
                width: '103px',
                'font-size': '18px',
                'font-weight': 700,
                'border-radius': '25px',
                height: '28px',
                textAlign: 'center',
                backgroundColor: '#d95040',
                color: '#fff',
              }}
            >
              Fair
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '36px',
                color: '#3d3d3d',
                marginTop: '20px',
              }}
            >
              $514
            </div>
          </div>
        </div>
        <div
          className="flex justify-between"
          style={{
            border: '1px solid #e2e2e2',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          <div>
            <img
              style={{ width: '50px', height: '50px' }}
              src="https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png"
              alt=""
            />
            <p style={{ fontSize: '20px' }}>iPhone 13</p>
            <p style={{ color: '#3d3d3d' }}>AT&T 128GB Starlight</p>
          </div>
          <div>
            <div
              style={{
                width: '103px',
                'font-size': '18px',
                'font-weight': 700,
                'border-radius': '25px',
                height: '28px',
                textAlign: 'center',
                backgroundColor: '#d95040',
                color: '#fff',
              }}
            >
              Fair
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '36px',
                color: '#3d3d3d',
                marginTop: '20px',
              }}
            >
              $514
            </div>
          </div>
        </div>
        <div
          className="flex justify-between"
          style={{
            border: '1px solid #e2e2e2',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          <div>
            <img
              style={{ width: '50px', height: '50px' }}
              src="https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png"
              alt=""
            />
            <p style={{ fontSize: '20px' }}>iPhone 13</p>
            <p style={{ color: '#3d3d3d' }}>T-Mobile 128GB Midnight</p>
          </div>
          <div>
            <div
              style={{
                width: '103px',
                'font-size': '18px',
                'font-weight': 700,
                'border-radius': '25px',
                height: '28px',
                textAlign: 'center',
                backgroundColor: '#58a55b',
                color: '#fff',
              }}
            >
              Excellent
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '36px',
                color: '#3d3d3d',
                marginTop: '20px',
              }}
            >
              $554
            </div>
          </div>
        </div>
        <div
          className="flex justify-between"
          style={{
            border: '1px solid #e2e2e2',
            padding: '20px',
            marginBottom: '10px',
          }}
        >
          <div>
            <img
              style={{ width: '50px', height: '50px' }}
              src="https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png"
              alt=""
            />
            <p style={{ fontSize: '20px' }}>iPhone 13</p>
            <p style={{ color: '#3d3d3d' }}>Unlocked 128GB Blue</p>
          </div>
          <div>
            <div
              style={{
                width: '103px',
                'font-size': '18px',
                'font-weight': 700,
                'border-radius': '25px',
                height: '28px',
                textAlign: 'center',
                backgroundColor: '#58a55b',
                color: '#fff',
              }}
            >
              Excellent
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '36px',
                color: '#3d3d3d',
                marginTop: '20px',
              }}
            >
              $579
            </div>
          </div>
        </div>
        <Button
          style={{
            width: '100%',
            height: '42px',
            background: 'linear-gradient(180deg,#1ab4e7,#3498db)',
            color: '#fff',
            'border-radius': '4px',
            outline: 0,
            'box-shadow': 'none',
            'line-height': 1.75,
            'font-size': '18px',
            'font-weight': 500,
            padding: '10px 15px',
            border: 0,
          }}
        >
          More
        </Button>
        <div
          style={{
            padding: '16px',
            marginTop: '20px',
            'font-size': '30px',
            'font-weight': 500,
          }}
        >
          <p style={{ width: '100%', textAlign: 'center' }}>About</p>
          <p style={{ width: '100%', textAlign: 'center' }}>Used Condition</p>
          <p
            style={{
              'font-size': '14px',
              'font-weight': 600,
              'letter-spacing': 0,
              color: '#3d3d3d',
              marginTop: '20px',
            }}
          >
            Tips: All Certified Used Phones/Devices are fully functional. The
            main difference is cosmetic. The better the condition, the more
            expensive. If you want the cheapest, pick Fair. If you want a
            balanced choice, choose Good.
          </p>
          <div>
            <ul
              className="flex "
              style={{
                fontSize: '12px',
                'align-items': 'center',
                marginTop: '15px',
              }}
            >
              <p
                style={{
                  width: '103px',
                  padding: '4px 0',
                  'font-size': '12px',
                  'font-weight': '700',
                  color: '#fff',
                  textAlign: 'center',
                  backgroundColor: '#5085eb',
                  'border-radius': '99px',
                  'align-items': 'center',
                  marginRight: '20px',
                }}
              >
                Pristine
              </p>
              Near flawless. Like New.
            </ul>
            <ul
              className="flex "
              style={{
                fontSize: '12px',
                'align-items': 'center',
                marginTop: '15px',
              }}
            >
              <p
                style={{
                  width: '103px',
                  padding: '4px 0',
                  'font-size': '12px',
                  'font-weight': '700',
                  color: '#fff',
                  textAlign: 'center',
                  backgroundColor: '#58a55b',
                  'border-radius': '99px',
                  'align-items': 'center',
                  marginRight: '20px',
                }}
              >
                Excellent
              </p>
              Minor Scratches (NOT visible at arm's length)
            </ul>
            <ul
              className="flex "
              style={{
                fontSize: '12px',
                'align-items': 'center',
                marginTop: '15px',
              }}
            >
              <p
                style={{
                  width: '103px',
                  padding: '4px 0',
                  'font-size': '12px',
                  'font-weight': '700',
                  color: '#fff',
                  textAlign: 'center',
                  backgroundColor: '#f2be42',
                  'border-radius': '99px',
                  'align-items': 'center',
                  marginRight: '20px',
                }}
              >
                Good
              </p>
              Light Scratches visible at arm's length
            </ul>
            <ul
              className="flex "
              style={{
                fontSize: '12px',
                'align-items': 'center',
                marginTop: '15px',
              }}
            >
              <p
                style={{
                  width: '103px',
                  padding: '4px 0',
                  'font-size': '12px',
                  'font-weight': '700',
                  color: '#fff',
                  textAlign: 'center',
                  backgroundColor: '#d95040',
                  'border-radius': '99px',
                  'align-items': 'center',
                  marginRight: '20px',
                }}
              >
                Fair
              </p>
              Heavy sign of wear and tear but still fully functional
            </ul>
          </div>
        </div>
        <div
          style={{
            padding: '16px',
            marginTop: '20px',
            'font-size': '30px',
            'font-weight': 500,
          }}
        >
          <p style={{ width: '100%', textAlign: 'center' }}>Price Trend of</p>
          <p style={{ width: '100%', textAlign: 'center' }}>Last 7 Days</p>
          <div
            className="flex"
            style={{
              backgroundColor: '#eee',
              'font-size': '16px',
              'font-weight': 700,
              marginTop: '10px',
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              Date
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              Cheapest Price
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/09
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $514
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/08
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $533
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/07
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $599
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/06
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $521
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/05
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $549
            </div>
          </div>
          <div
            className="flex"
            style={{
              borderBottom: '1px solid #e6e6e6',
              'font-size': '16px',
              'font-weight': 700,
            }}
          >
            <div className="flex-1" style={{ padding: '8px' }}>
              06/04
            </div>
            <div className="flex-1" style={{ padding: '8px' }}>
              $521
            </div>
          </div>
          <div>
            <div
              style={{
                'font-size': '16px',
                'font-weight': '700',
                marginTop: '50px',
              }}
            >
              Customer reviews
            </div>
            <div
              className="flex"
              style={{
                'font-size': '14px',
                'font-weight': '400',
                alignItems: 'center',
                marginTop: '4px',
              }}
            >
              Data From
              <img
                style={{ width: '80px', height: '11px' }}
                src="https://uptradeit.com/svg/reviewsio-logo.svg"
                alt=""
              />
            </div>
            <div style={{ 'font-size': '12px', color: '#6d7278' }}>
              4.54 Rating based ons
              <span
                style={{ color: '#1ab4e7', 'text-decoration': 'underline' }}
              >
                950 Reviews
              </span>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
            }}
          >
            {rangeIndex === 0 ? (
              <div>
                <div style={{ 'font-size': '16px', 'font-weight': 700 }}>
                  name
                </div>
                <div className="flex" style={{ marginTop: '10px' }}>
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    marginTop: '10px',
                  }}
                >
                  I got one phone, and then decided that I wanted a different
                  one so - I have ordered, returned, gotten refunded and ordered
                  anew with these people. And I have to say it was all seamless.
                  I love the goal of creating less electronica waste by reusing
                  it, and the phone that I have now works great.
                </div>
              </div>
            ) : (
              ''
            )}
            {rangeIndex === 1 ? (
              <div>
                <div style={{ 'font-size': '16px', 'font-weight': 700 }}>
                  name
                </div>
                <div className="flex" style={{ marginTop: '10px' }}>
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    marginTop: '10px',
                  }}
                >
                  This was my second phone that I got from uptradeit. The phone
                  was described accurate and arrived quickly. No issues at all.
                </div>
              </div>
            ) : (
              ''
            )}
            {rangeIndex === 2 ? (
              <div>
                <div style={{ 'font-size': '16px', 'font-weight': 700 }}>
                  name
                </div>
                <div className="flex" style={{ marginTop: '10px' }}>
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                  <img
                    style={{ width: '24px', height: '24px' }}
                    src="https://uptradeit.com/rating.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    marginTop: '10px',
                  }}
                >
                  I’ve purchased an iPad and an iPhone from upgrade. I have been
                  completely satisfied. They’ve exceeded my expectations on both
                  purchases. I highly recommend them.
                </div>
              </div>
            ) : (
              ''
            )}

            <div
              style={{
                width: '100%',
                position: 'absolute',
                bottom: '-50px',
                right: '6px',
              }}
            >
              {rangeIndex !== 0 ? (
                <ArrowLeftOutlined
                  style={{
                    color: 'white',
                    background: 'rgba(0,0,0,.5)',
                    fontSize: '18px',
                    padding: '10px',
                    position: 'absolute',
                    left: '6px',
                    top: '-40px',
                  }}
                  onClick={() => changeRangeIndex(-1)}
                />
              ) : (
                ''
              )}
              {rangeIndex !== 2 ? (
                <ArrowRightOutlined
                  style={{
                    color: 'white',
                    background: 'rgba(0,0,0,.5)',
                    fontSize: '18px',
                    padding: '10px',
                    position: 'absolute',
                    right: '6px',
                    top: '-40px',
                  }}
                  onClick={() => changeRangeIndex(1)}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <div style={{ width: '100%', textAlign: 'center' }}>Specs</div>
            <div
              style={{
                width: '70%',
                marginLeft: '20%',
                'font-size': '12px',
                'line-height': 'normal',
                marginTop: '10px',
              }}
            >
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Release Date:
                </div>
                <div className="flex-1">Sep 2021</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Support Latest iOS:
                </div>
                <div className="flex-1">Yes</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Screen Size:
                </div>
                <div className="flex-1">6.1inches</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Screen Resolution:
                </div>
                <div className="flex-1">2532 x 1170</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  PPI:
                </div>
                <div className="flex-1">460</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Rear Camera:
                </div>
                <div className="flex-1">12MP + 12MP</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Front Camera:
                </div>
                <div className="flex-1">12MP + ToF</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Processor:
                </div>
                <div className="flex-1">A15 Bionic</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Battery:
                </div>
                <div className="flex-1">3095 mAh</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Wireless Charging:
                </div>
                <div className="flex-1">Yes</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Fast Charging:
                </div>
                <div className="flex-1">Yes</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Water Resistant:
                </div>
                <div className="flex-1">IP68</div>
              </div>
              <br />
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Weight:
                </div>
                <div className="flex-1">174 g</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Width:
                </div>
                <div className="flex-1">71.5 mm</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Depth:
                </div>
                <div className="flex-1">7.65 mm</div>
              </div>
              <div className="flex">
                <div className="flex-1" style={{ textAlign: 'left' }}>
                  Height:
                </div>
                <div className="flex-1">146.7 mm</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <div style={{ width: '100%', textAlign: 'center' }}>FAQ</div>
          </div>
          <div>
            <div
              className="flex"
              style={{
                alignItems: 'center',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              onClick={() => changeFQA(0)}
            >
              <img
                style={{ width: '24px', height: '24px' }}
                src="https://uptradeit.com/svg/arrow-down.svg"
                alt=""
              />
              Why buy a refurbished or used iPhone 13?
            </div>
            {nodeIndex === 0 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'grey',
                  padding: '34px',
                  cursor: 'pointer',
                }}
              >
                First of all, understandwhat you are buying. A used or
                refurbished iPhone 13 is not a new device obviously. However, as
                long as the used or refurbished iPhone 13 has been inspected and
                refurbished by a Professional Reseller, the phone will work like
                new.
                <br />
                <br />
                Then when it comes to the price, an iPhone 13 Refurbished is
                much cheaper when you want to purchase your next iPhone. Buying
                a second hand iPhone 13 can be a fantastic choice. It can net
                you huge savings, mainly when the cost of a new iPhone is crazy
                expensive. A refurbished or used iPhone 13 is entirely
                functional and works very much like a brand-new iPhone 13.
                <br />
                <br />
                The rule of thumb with Apple iPhone upgrades is about once every
                two years. Unless you are a bonafide phone geek, then you're
                probably upgrading your device every year. Sometimes twice like
                I do. (I know, it's a problem) If you are still rocking with
                your current old iPhone model, the iPhone 13 is certainly a
                perfect upgrade. You are paying a cheap price for massive
                upgrades. For most people, the Refurbished iPhone 13 will be
                perfect. To make it easier for you, UpTrade allows you to
                compare prices and options from various certified sellers to get
                the best deal on a Certified Used iPhone 13.
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div
              className="flex"
              style={{
                alignItems: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                marginTop: '50px',
              }}
              onClick={() => changeFQA(1)}
            >
              <img
                style={{ width: '24px', height: '24px' }}
                src="https://uptradeit.com/svg/arrow-down.svg"
                alt=""
              />
              What are the differences between Used and Refurbished iPhone 13?
            </div>
            {nodeIndex === 1 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'grey',
                  padding: '34px',
                  cursor: 'pointer',
                }}
              >
                Technically, they are divided into four categories: Used,
                Refurbished, Certified Used, and Certified Refurbished.
                <br />
                <br />A Used iPhone 13 means that the iPhone is used and sold
                as-is. It's the most common term being used in eBay, Craigslist,
                Facebook Marketplace, OfferUp, and other marketplaces. Because
                of the popularity of this term, even professional sellers or
                merchants may use the same term, although their products are
                technically Certified Used iPhones or Certified Refurbished
                iPhones.
                <br />
                <br />A Refurbished iPhone 13 means that the iPhone is used and
                has been refurbished to a sellable condition. To clarify,
                "Refurbishment" doesn't always mean opening up the phone and
                repair. Sometimes it may refer to basic cleaning without
                disassembling the phone.
                <br />
                <br />
                A Certified Used iPhone 13 means that the iPhone is used and has
                been certified by a professional seller or merchant. The
                certification requires a rigorous inspection process to ensure
                all functionalities work fine. The test items include but are
                not limited to Power, Display, Touchscreen, Cellular, WIFI,
                Sensors, Speaker, Receiver, Bluetooth, Charging Port, Audio
                Port, etc. In addition to the functionality test, it also runs
                the background check to make sure the phone is not blacklisted,
                lost or stolen, or still under a finance plan. That guarantees
                you a fully functional and safe-to-use iPhone. Remember, a
                Certified Used iPhone should only come from a professional
                seller. All phones listed on UpTrade are Certified Used or
                Certified Refurbished. So if you see some person claiming that
                they have a Certified Used iPhone for sale on Craigslist or
                other open marketplaces, it's probably not true.
                <br />
                <br />A Certified Refurbished iPhone 13 means that a phone is
                used and has been refurbished by a professional seller. Same as
                Certified Used iPhone, Certified Refurbished iPhone also
                requires a rigorous inspection process. There is no real
                difference between Certified Used and Certified Refurbished.
                Some professional sellers prefer using the term Certified
                Refurbished iPhone, and others like another.
                <br />
                <br />
                Last but not least, pay attention to the seller instead of the
                term. Each seller may have its definition and use the words
                differently. As long as the phone is being sold by a reputable
                professional seller, it doesn't matter whether it's called Used,
                Refurbished, Certified Used, or Certified Refurbished. The
                quality of the iPhone is good. Vice versa, getting a phone from
                an open marketplace or someone you don't know is risky. No
                matter how highly they say about the iPhone, you still risk
                getting scammed. Therefore, at UpTrade, we felt the necessity to
                have a marketplace showing the products from Reputable
                Professional Sellers and Merchants only. So you can rest assured
                of finding a good deal on a used iPhone 13 with excellent
                quality at UpTrade.
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div
              className="flex"
              style={{
                alignItems: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                marginTop: '50px',
              }}
              onClick={() => changeFQA(2)}
            >
              <img
                style={{ width: '24px', height: '24px' }}
                src="https://uptradeit.com/svg/arrow-down.svg"
                alt=""
              />
              How and where to buy a refurbished or used iPhone 13?
            </div>
            {nodeIndex === 2 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'grey',
                  padding: '34px',
                  cursor: 'pointer',
                }}
              >
                Short Answer: Similar to buying used cars or any used goods,
                It's critical to get it from a trustworthy seller. (For example,
                Apple, Amazon, Best Buy, etc.) All products listed on UpTrade
                are from reputable merchants and have excellent quality. You can
                rest assured to choose any iPhone 13 used or refurbished for
                sale here.
                <br />
                <br />
                Long Answer: There are six channels where you can buy a used or
                refurbished iPhone 13.
                <br />
                <br />
                1) OEM / Original Equipment Manufacturer (Apple) - Apple offers
                Apple Certified Refurbished iPhone on its website. There is no
                doubt that Apple has the top notch quality. All refurbished
                iPhones have gone through Apple's manufacturing inspection
                process and have been repaired as needed. As a result, the
                phones work precisely like new ones. Apple will replace the
                cosmetic part with even minimum scratch or sign of use.
                Therefore, all Apple Certified Refurbished iPhones look
                flawless. For the same reason, our website has listed all Apple
                Certified Refurbished iPhones as Pristine, the highest level, on
                our website. However, the price is significantly higher than
                other sellers. And the availability is limited.
                <br />
                <br />
                2) Wireless Carriers (Verizon, AT&T, T-Mobile, etc.) – Each
                Carrier offers its own refurbished program. Like Apple, they
                have their own or 3rd party facility to run the inspection and
                refurbishment processes for all used iPhones. Each Carrier has
                Reverse Logistics and Quality teams overseeing the operations.
                So the quality of refurbished iPhones is trustable. However, the
                availability may also be limited. Based on our research, we have
                not found a stable supply from AT&T and T-Mobile. Therefore, we
                are only listing Verizon Certified Refurbished iPhones on our
                website.
                <br />
                <br />
                3) Retail (Best Buy, GameStop) – Although it's retail, the used
                iPhones are offered online. The sources of the used iPhone 13
                are open box, buyer remorse returns, etc. The used iPhones are
                processed in a dedicated facility for inspection, repair, and
                refurbishment. Only the used iPhone 13 that passed the entire
                process will be listed for resale. GameStop used to offer
                refurbished phones on their website, but the supply has become
                inconsistent. Hence, we only included Best Buy Refurbished
                iPhones on our website. Like the Wireless Carriers, Retail
                companies have their Reverse Logistics and Quality teams
                managing the operations. The quality of the refurbished iPhone
                13 is guaranteed. It's easier to look it up on our website.
                <br />
                <br />
                4) Amazon – Amazon launched Amazon Renew in 2017. This program
                is for pre-owned, refurbished, and open-box products, including
                used iPhones. Unlike Wireless Carriers and Retail, which have
                dedicated facilities to inspect and refurbish products, Amazon
                Renew relies on its sellers to fulfill the work and control the
                quality. However, Amazon has its top-notched seller management
                operations for quality control. And all products on Amazon
                Renewed are backed by the Amazon Renewed Guarantee. So, you can
                trust Amazon Renew. In addition, we have included Amazon Renew
                (Used and Refurbished Phones) on our website so that you can
                easily compare the prices of the used iPhone 13 with other
                deals.
                <br />
                <br />
                5) Professional Resellers (e.g., Gazelle and many others) –
                These companies are dedicated to recycling and reselling Used
                and Refurbished Phones. As smartphone technologies mature, the
                differences between the new and old iPhone generations are
                diminishing. More people buy a used iPhone instead of getting a
                new one. That consumer behavior shift has driven the growth of
                these dedicated used phone Resellers. Each company has the
                facility to run a full inspection of each phone. Depending on
                the condition of each phone, it will be either refurbished for
                sale or disassembled for recycling. Some sellers may have their
                trade-in or cash buyback program to collect used iPhone 13's
                from consumers directly. This channel is a hidden gem. They
                offer Refurbished and Used iPhone 13 with excellent quality.
                Meanwhile, their prices are usually lower than OEM, Wireless
                Carriers, and Retail. At UpTrade, we have chosen the best
                companies and list their used and refurbished iPhone 13's on our
                website.
                <br />
                <br />
                6) Open Marketplace (Craigslist, Facebook Marketplace, etc.) –
                Everyone knows how it works. You find a listing that you like
                and buy it from an individual. Open Marketplace is the only
                channel we don't recommend unless you have super knowledge of
                smartphones and unmatched negotiation skills. True story: one of
                our staff, who has ten years of smartphone technical experience,
                even got scammed in an open marketplace. He was confident about
                his technical knowledge, but scammers had been advancing their
                technique, too. On top of that, the prices from Open Marketplace
                aren't necessarily competitive. We have done a Price Analysis
                across all channels to buy refurbished or used phones. The
                prices of Open Marketplace phones are not often the lowest. They
                are usually priced between Apple Certified Refurbishment
                (channel #1) and Dedicated Used & Refurbished Equipment Sellers
                (channel #5). If you see something listed at a super low price,
                it may be too good to be true, like what happened to our staff.
                On the other hand, suppose you are adamant about getting a deal
                from Open Marketplaces. In that case, we recommend at least the
                following: a) check the price on UpTrade for your negotiation
                reference; b) check the IMEI to see whether it is blacklisted or
                marked lost/stolen; c) check the battery health; d) meet the
                seller at a public place with a friend during daytime.
                <br />
                <br />
                In a nutshell, we recommend buying a Refurbished or Used iPhone
                13 from OEM, Wireless Carriers, Retail, Amazon, or Professional
                Resellers. We have included all recommended companies on our
                website. In addition, all products have been categorized in
                standardized conditions for an apples-to-apples comparison. So
                compare the price to pick the one you like!
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div
              className="flex"
              style={{
                alignItems: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                marginTop: '50px',
              }}
              onClick={() => changeFQA(3)}
            >
              <img
                style={{ width: '24px', height: '24px' }}
                src="https://uptradeit.com/svg/arrow-down.svg"
                alt=""
              />
              What is an unlocked iPhone 13?
            </div>
            {nodeIndex === 3 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'grey',
                  padding: '34px',
                  cursor: 'pointer',
                }}
              >
                You may use an unlocked iPhone 13 with any carrier in the United
                States. Unlocked iPhone 13 Refurbished is compatible with
                Verizon, AT&T, T-Mobile, Sprint, MetroPCS, Cricket, US Cellular,
                Tracfone, and other phone carriers. Purchasing an unlocked
                iPhone 13 is an wonderful choice if you aren't sure which
                wireless carrier you want to sign up with, or if you want to be
                sure the iPhone 13 will work with your current carrier. An
                unlocked iPhone 13 is likewise an incredible phone to buy as a
                gift since it will work with any carrier or wireless plan that
                they may have.
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div
              className="flex"
              style={{
                alignItems: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                marginTop: '50px',
              }}
              onClick={() => changeFQA(4)}
            >
              <img
                style={{ width: '24px', height: '24px' }}
                src="https://uptradeit.com/svg/arrow-down.svg"
                alt=""
              />
              Are refurbished iPhones as good as new iPhones?
            </div>
            {nodeIndex === 4 ? (
              <div
                style={{
                  fontSize: '12px',
                  color: 'grey',
                  padding: '34px',
                  cursor: 'pointer',
                }}
              >
                Many people wonder if a refurbished iPhone is as good as a new
                iPhone. Typically there’s really no difference between them
                except for the fact that there may be signs of use (if at all)
                on a refurbished iPhone. A refurbished iPhone should be fully
                functional and work just like a new iPhone. All UpTrade
                Certified Used Phone Resellers process the iPhones through a
                rigorous inspection so that each iPhone is fully functional and
                works just like a new iPhone.
              </div>
            ) : (
              ''
            )}
          </div>
          <Button
            style={{
              width: '100%',
              height: '42px',
              background: '#fff',
              color: '#169bd5',
              'border-radius': '4px',
              outline: 0,
              'box-shadow': 'none',
              'line-height': 1.75,
              'font-size': '18px',
              'font-weight': 500,
              padding: '5px 15px',
              marginTop: '50px',
              border: '1px solid #169bd5',
            }}
          >
            Back To Top
          </Button>
          <Button
            style={{
              width: '100%',
              height: '42px',
              background: 'linear-gradient(180deg,#1ab4e7,#3498db)',
              color: '#fff',
              'border-radius': '4px',
              outline: 0,
              'box-shadow': 'none',
              'line-height': 1.75,
              'font-size': '18px',
              'font-weight': 500,
              padding: '5px 15px',
              marginTop: '20px',
              border: 0,
            }}
          >
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
