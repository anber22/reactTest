import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { toSafeInteger, chunk } from 'lodash';
import { getTags } from './columns';
import SurplusMenu from './components/SurplusMenu';
import DropdownMenu from './components/DropdownMenu';
import TagItem from './components/TagItem';

function TagsViews() {
  const listRef = useRef();
  const { tagList } = useSelector((state) => state.tagsViews);
  const { token } = useSelector((state) => state.theme);
  const { setting } = useSelector((state) => state.layout);
  const { isCollapse } = useSelector((state) => state.menu);
  const [ShowTagList, setShowTagList] = useState([]);
  const [surplusList, setSurplusList] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const index = toSafeInteger(listRef.current.offsetWidth / 100);
    const list = chunk(tagList, index - 2);
    const tags = getTags(list[0], pathname, token.colorPrimary);
    setShowTagList(tags);

    if (list[1]) {
      const arr = [];
      for (let i = 1; i < list.length; i++) {
        arr.push(...list[i]);
      }
      setSurplusList(arr);
    } else {
      setSurplusList([]);
    }
  }, [tagList, pathname, setting.algorithm]);

  return (
    <div
      style={{
        height: '40px',
      }}
    >
      <div
        className={`${
          setting.header.fix ? 'fixed right-0 z-50' : ''
        } bg-light dark:bg-dark border-t border-b border-gray-50  dark:border-gray-800`}
        style={{
          width:
            setting.model === 'Customer' || !setting.header.fix
              ? '100%'
              : `calc(100% - ${isCollapse ? '48px' : '208px'})`,
          top: `${setting.header.height}px`,
          height: '40px',
        }}
      >
        <div className="pr-20 relative">
          <div
            ref={listRef}
            className="flex overflow-hidden items-end  space-x-2 px-2 pt-2"
          >
            {ShowTagList.map((item) => (
              <TagItem item={item} key={item.path} />
            ))}
          </div>
          {surplusList.length ? (
            <SurplusMenu surplusList={surplusList} />
          ) : null}
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
}
export default TagsViews;
