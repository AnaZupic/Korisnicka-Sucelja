type BadgeProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

export type BadgeNode = React.ReactElement<BadgeProps, typeof Badge>;

const Badge = ({ text, bgColor, textColor }: BadgeProps) => (
  <div
    className={`inline-flex items-center  ${bgColor} ${textColor} text-xs font-roboto font-[500] px-4 py-1 rounded-full`}
  >
    {text}
  </div>
);

const Badges = {
  design: () => (
    <Badge
      text="Design"
      bgColor="bg-brand-grey-50"
      textColor="text-brand-grey-600"
    />
  ),
  digital: () => (
    <Badge
      text="Design"
      bgColor="bg-brand-grey-600"
      textColor="text-brand-grey-800"
    />
  ),
  branding: () => (
    <Badge
      text="Design"
      bgColor="bg-blue-50"
      textColor="text-brand-grey-600"
    />
  ),
  paper: () => (
    <Badge
      text="Design"
      bgColor="bg-brand-grey-50"
      textColor="text-brand-grey-800"
    />
  ),
};

export default Badges;
