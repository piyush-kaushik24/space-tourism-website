type BackgroundProps = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export const Background = ({ desktop, tablet, mobile }: BackgroundProps) => {
  return (
    <div>
      <picture>
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <source srcSet={tablet} media="(min-width: 768px)" />
        <img
          src={mobile}
          alt=""
          className="fixed inset-0 top-0 z-0 h-full w-full"
        />
      </picture>
    </div>
  );
};
