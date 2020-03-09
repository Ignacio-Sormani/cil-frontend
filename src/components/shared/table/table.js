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
            {this.props.productList.length &&
              this.props.productList.map(product => {
                return (
                  <Tr key={product._id}>
                    <Td>{product._id}</Td>
                    <Td>{product.name}</Td>
                    <Td> {product.category.name}</Td>
                    <Td> ${product.price}</Td>
                    <Td> {product.stock}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </>
    );
  }
}

export default ResponsiveTable;
