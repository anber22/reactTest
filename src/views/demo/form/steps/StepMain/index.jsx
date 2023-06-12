import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function App({ current, stepChange }) {
  console.log('current', current);
  if (current === 0)
    return <StepOne stepChange={(active) => stepChange(active)} />;
  if (current === 1)
    return <StepTwo stepChange={(active) => stepChange(active)} />;
  if (current === 2)
    return <StepThree stepChange={(active) => stepChange(active)} />;
}
export default App;
