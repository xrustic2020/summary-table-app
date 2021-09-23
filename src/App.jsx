import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import TableCreationForm from 'components/TableCreationForm';
import Table from 'components/Table'

import selectors from './redux/selectors';


function App({ table }) {
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

App.propTypes = {
  table: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  table: selectors.getTableData(state)
})

export default connect(mapStateToProps)(App);