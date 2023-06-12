import { HomeFilled, CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { deleteTags } from '@/store/modules/tagsViews';
import { HomeRouter } from '@/config/config';

function TagItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = (i) => {
    dispatch(deleteTags(i.path));
    navigate(HomeRouter);
  };
  return (
    <div className="flex-none group" key={item.path}>
      <div className={item.itemClass} style={item.style}>
        {item.path === HomeRouter ? (
          <>
            <HomeFilled className={item.hoverClass} />
            <Link className={item.hoverClass} to={HomeRouter}>
              {item.meta.title}
            </Link>
          </>
        ) : (
          <>
            <Link className={item.hoverClass} to={item.path}>
              {item.meta.title}
            </Link>
            <CloseOutlined
              className={item.hoverClass}
              onClick={() => {
                handleClose(item);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
export default TagItem;
