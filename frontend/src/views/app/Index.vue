<template>
  <section>
    <AppTableMetas />

    <AppTable>
      <TableWrapper wrapper="thead">
        <TableData tag="th">Kód</TableData>
        <TableData tag="th">Predmet</TableData>
        <TableData tag="th">Klient</TableData>
        <TableData tag="th">Stav</TableData>
        <TableData tag="th">Konečná cena</TableData>
      </TableWrapper>

      <TableWrapper wrapper="tbody">
        <TableRow v-for="data in tableData" :key="data.id">
          <TableData tag="td">{{ data.id }}</TableData>
          <TableData tag="td">{{ data.title }}</TableData>
          <TableData tag="td">{{ data.userId }}</TableData>
          <TableData tag="td">{{ data.completed }}</TableData>
          <TableData tag="td">14.44</TableData>
        </TableRow>
      </TableWrapper>
    </AppTable>
  </section>
</template>

<script>
  import AppTable from '@/components/Table/AppTable';
  import AppTableMetas from '@/components/Table/AppTableMetas';
  import TableWrapper from '@/components/Table/TableWrapper';
  import TableRow from '@/components/Table/TableRow';
  import TableData from '@/components/Table/TableData';

  import axios from 'axios';

  export default {
    components: {
      AppTable,
      AppTableMetas,
      TableWrapper,
      TableRow,
      TableData,
    },

    data() {
      return {
        tableData: [],
      }
    },

    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(response => this.tableData = response.data);
    },
  }
</script>