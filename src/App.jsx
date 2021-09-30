import { useSelector } from 'react-redux';

import Container from 'components/Container';
import TableCreationForm from 'components/TableCreationForm';
import Table from 'components/Table';

import selectors from './redux/selectors';


function App() {
  const table = useSelector(selectors.getTableData);
  return (
    <Container>
      <header>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid lightblue' }}>
          Summary Table App
        </h1>
      </header>

      <TableCreationForm />

      {Object.keys(table).length > 0 && <Table />}

    </Container>
  );
}

export default App;