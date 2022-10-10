<template>
    <section>
        <AppTableMetas @filterData="setFilterText"/>

        <AppTable>
            <TableWrapper wrapper="thead">
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">Kód</TableData>
                <TableData tag="th">Klient</TableData>
                <TableData tag="th">Stav</TableData>
                <TableData tag="th">Konečná cena</TableData>
            </TableWrapper>

            <TableWrapper wrapper="tbody">
                <TableRow v-for="data in filteredData" :key="data.id">
                    <TableData class="app-table-data-primary" tag="td">{{ data.title }}</TableData>
                    <TableData class="app-table-data-secondary" tag="td">{{ data.id }}</TableData>
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
            allData: [],
            filterText: '',
        }
    },

    mounted() {
        axios.get( 'https://jsonplaceholder.typicode.com/todos' )
            .then( response => this.allData = response.data );
    },

    methods: {
        setFilterText( text ) {
            this.filterText = text;
        }
    },

    computed: {
        filteredData() {
            if ( this.filterText ) {
                return this.allData.filter( item => {
                    return item.title.toLowerCase().includes( this.filterText.toLowerCase() );
                } );
            } else {
                return this.allData;
            }
        }
    },
}
</script>