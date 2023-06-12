import BaseCard from './BaseCard';
import ContentCard from './ContentCard';
import OpenCard from './OpenCard';
import RuleCard from './RuleCard';

function CardList({ value }) {
  if (value === '1') {
    return (
      <>
        <BaseCard titleShow={value === '1'} />
        <ContentCard titleShow={value === '1'} />
        <OpenCard titleShow={value === '1'} />
        <RuleCard titleShow={value === '1'} />
      </>
    );
  }
  if (value === '2') return <BaseCard titleShow={value === '1'} />;
  if (value === '3') return <ContentCard titleShow={value === '1'} />;
  if (value === '4') return <OpenCard titleShow={value === '1'} />;
  if (value === '5') return <RuleCard titleShow={value === '1'} />;
}
export default CardList;
