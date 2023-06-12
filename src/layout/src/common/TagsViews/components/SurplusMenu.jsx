import { Popover } from 'antd';
import { useDispatch } from 'react-redux';
import { EllipsisOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeRouter } from '@/config/config';
import { deleteTags } from '@/store/modules/tagsViews';

function SurplusMenu({ surplusList, className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClick = (path) => {
    navigate(path);
  };
  const itemDelete = (path) => {
    dispatch(deleteTags(path));
    navigate(HomeRouter);
  };
  const [content, setContent] = useState();
  useEffect(() => {
    const dom = (
      <div>
        {surplusList.map((item) => (
          <div
            className="pb-1 mb-2 border-b border-gray-50 flex justify-between items-center space-x-1 cursor-pointer dark:border-gray-700 hover:border-blue-500"
            key={item.path}
          >
            <span
              onClick={() => itemClick(item.path)}
              className="hover:text-blue-500"
            >
              {item.meta.title}
            </span>
            <CloseOutlined
              onClick={() => itemDelete(item.path)}
              className="hover:text-blue-500"
            />
          </div>
        ))}
      </div>
    );
    setContent(dom);
  }, [surplusList]);

  return (
    <Popover content={content} placement="bottomLeft" trigger="hover">
      <div
        className={`${className} group absolute right-10 top-0 h-full w-10 flex justify-center items-center border-l border-gray-100 dark:border-gray-800`}
      >
        <EllipsisOutlined className="text-l text-gray-400 group-hover:border-blue-500" />
      </div>
    </Popover>
  );
}
export default SurplusMenu;
