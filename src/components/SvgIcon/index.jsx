function SvgIcon({ name, style, className }) {
  return (
    <svg className={`w-4 h-4 ${className}`} style={style} aria-hidden="true">
      <use xlinkHref={`#${name}`} rel="external nofollow" />
    </svg>
  );
}
export default SvgIcon;
