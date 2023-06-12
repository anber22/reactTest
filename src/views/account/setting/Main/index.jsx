import BaseInfo from './BaseInfo';
import SafetySetting from './SafetySetting';
import Certification from './Certification';

function Main({ active }) {
  if (active === 'user1') return <BaseInfo />;
  if (active === 'user2') return <SafetySetting />;
  if (active === 'user3') return <Certification />;
}
export default Main;
