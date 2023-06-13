import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from 'antd';
import { setSetting } from '@/store/modules/layout';
import { setTheme } from '@/store/modules/theme';
// import SvgIcon from '@/components/SvgIcon';

function Fullscreen({ theme, bg }) {
  const { algorithm } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const themeChange = () => {
    const checked = algorithm === 'darkAlgorithm';
    dispatch(setTheme(checked ? 'defaultAlgorithm' : 'darkAlgorithm'));
    dispatch(
      setSetting(
        checked
          ? { algorithm: 'defaultAlgorithm' }
          : { algorithm: 'darkAlgorithm' },
      ),
    );
  };
  return (
    <Tooltip
      title={
        algorithm === 'darkAlgorithm'
          ? '点击切换为亮色模式'
          : '点击切换为暗色模式'
      }
      color="blue"
      placement="bottom"
    >
      <div
        className={`${bg} w-8 h-8 flex justify-center items-center rounded-full  cursor-pointer`}
        onClick={themeChange}
      >
        {/* {algorithm === 'darkAlgorithm' ? (
          // <SvgIcon name="sun" className={`${theme} w-6 h-6`} />
        ) : (
          // <SvgIcon name="moon" className={`${theme} w-6 h-6`} />
        )} */}
      </div>
    </Tooltip>
  );
}
export default Fullscreen;
