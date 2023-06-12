import { CheckCircleFilled, EllipsisOutlined } from '@ant-design/icons';
import { Row, Col, Card, Popover, Skeleton } from 'antd';
import { useState, useImperativeHandle, forwardRef } from 'react';
import { getIcon } from '@/utils/utils';

function CommonCard({ data, children }, ref) {
  const [loading, setLoading] = useState(false);
  useImperativeHandle(ref, () => ({
    changeLoading: (newVal) => {
      setLoading(newVal);
    },
  }));

  return (
    <Card
      hoverable
      bodyStyle={{
        height: 200,
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <Skeleton loading={loading} active>
          <div className="flex flex-1 space-x-2">
            {data.icon ? (
              <div className="bg-blue-600 flex items-center justify-center rounded-full w-6 h-6 text-white">
                {getIcon(data.icon)}
              </div>
            ) : null}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm">{data.title}</span>
                  {data.status ? (
                    <div className="flex items-center justify-center bg-green-200 px-1 py-1 rounded space-x-1">
                      <CheckCircleFilled className="text-green-600" />
                      <span className="text-xs text-green-600">已开通</span>
                    </div>
                  ) : null}
                </div>
                <Popover content="这里可以放内容或者操作按键" title="触发icon">
                  <EllipsisOutlined />
                </Popover>
              </div>
              {data.time ? (
                <span className="text-xs text-gray-400 mt-1">{data.time}</span>
              ) : null}
              <div className="flex-1">
                {data.list ? (
                  <Row className="h-full items-center">
                    {data.list.map((item) => (
                      <Col span={12} key={item.label + item.value}>
                        <div className="space-x-2">
                          <span className="text-xs text-gray-400">
                            {item.label}
                          </span>
                          <span className="text-xs text-gray-600">
                            {item.value}
                          </span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : null}
                {data.description ? (
                  <div className="h-full flex items-center text-xs text-gray-400">
                    {data.description}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Skeleton>
        <div className="flex justify-end space-x-3">{children}</div>
      </div>
    </Card>
  );
}
export default forwardRef(CommonCard);
