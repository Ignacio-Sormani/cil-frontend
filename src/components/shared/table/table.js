import React from 'react';
import './table.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

class ResponsiveTable extends React.Component {
  render() {
    return (
      <>
        <Table>
          <Thead>
            <Tr>
              <Th>Codigo</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>asdads3456asda</Td>
              <Td>guitarra</Td>
              <Td>cuerdas</Td>
              <Td>$646</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>asdads3456asda</Td>
              <Td>guitarra</Td>
              <Td>cuerdas</Td>
              <Td>$646</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>asdads3456asda</Td>
              <Td>guitarra</Td>
              <Td>cuerdas</Td>
              <Td>$646</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>asdads3456asda</Td>
              <Td>guitarra</Td>
              <Td>cuerdas</Td>
              <Td>$646</Td>
              <Td>5</Td>
            </Tr>
          </Tbody>
        </Table>
      </>
    );
  }
}

export default ResponsiveTable;
