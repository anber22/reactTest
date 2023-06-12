import { useSelector } from 'react-redux';

function Logo({ isCollapse, theme, className }) {
  const { setting } = useSelector((state) => state.layout);
  const { token } = useSelector((state) => state.theme);
  const { algorithm } = useSelector((state) => state.theme);
  return (
    <div
      className={`${
        theme === 'light' && algorithm !== 'darkAlgorithm'
          ? 'bg-white'
          : 'bg-dark'
      } ${className} flex justify-center items-center`}
      style={{ height: `${setting.header.height - 2}px` }}
    >
      {isCollapse && isCollapse === '1' ? (
        <img src="/src/assets/images/ico.png" className="w-8" alt="" />
      ) : (
        <>
          <img src="/src/assets/images/ico.png" className="w-5 mr-3" alt="" />
          <span
            className={`${
              theme === 'light' && algorithm !== 'darkAlgorithm'
                ? 'text-black'
                : 'text-white'
            } text-xl`}
            style={{
              color: token.colorPrimary,
            }}
          >
            Uzi Admin
          </span>
        </>
      )}
    </div>
  );
}
export default Logo;
