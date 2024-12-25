import "./index.scss";

export interface SvgIconProps {
  className?: string;
  name: string;
  [key: string]: any;
}
const SvgIcon = (props: SvgIconProps) => {
  console.log("lfsz", props);

  return (
    <svg
      className={"svg-icon " + (props?.className ? props?.className : "")}
      aria-hidden='true'
    >
      <use className='svg-use' xlinkHref={`#${props?.name}`} />
    </svg>
  );
};
export default SvgIcon;
