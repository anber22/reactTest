import DataStatistics from './components/DataStatistics';
import ContentList from './components/ContentList';
import SearchCategory from './components/SearchCategory';
import ConversionRate from './components/ConversionRate';

function App() {
  return (
    <div className="space-y-6">
      <DataStatistics />
      <ContentList />
      <SearchCategory />
      <ConversionRate />
    </div>
  );
}
export default App;
