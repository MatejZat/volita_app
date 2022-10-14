<template>
    <section>
        <TableMetas @filterData="setFilterText" button-text="Vytvoriť prípad"/>

        <AppTable>
            <TableWrapper wrapper="thead">
                <TableData tag="th">Meno klienta</TableData>
                <TableData tag="th">ID</TableData>
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">ID</TableData>
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th"/>
            </TableWrapper>

            <TableWrapper wrapper="tbody">
                <TableRow v-for="data in filteredData" :key="data.id">
                    <TableData tag="td" primary-data>{{ data.title.slice( 0, 18 ) }}</TableData>
                    <TableData tag="td" secondary-data>22-2222</TableData>
                    <TableData tag="td" secondary-data>Matej</TableData>
                    <TableData tag="td">Matej</TableData>
                    <TableData tag="td">22-2222</TableData>
                    <TableData tag="td">Predmet</TableData>
                    <TableData tag="td">Predmet</TableData>
                    <TableData tag="td" edit-data>
                        <RouterLink :to="{ name: 'BusinessCasesEdit', params: { id: data.id } }">
                            <AppIcon icon-name="Edit"/>
                        </RouterLink>
                    </TableData>
                </TableRow>
            </TableWrapper>
        </AppTable>
    </section>
</template>

<script>
// Components
import AppIcon from '@/components/AppIcon';
import AppTable from '@/components/Table/AppTable';
import TableMetas from '@/components/Table/TableMetas';
import TableWrapper from '@/components/Table/TableWrapper';
import TableRow from '@/components/Table/TableRow';
import TableData from '@/components/Table/TableData';

// Libs
import axios from 'axios';

export default {
    components: {
        AppIcon,
        AppTable,
        TableMetas,
        TableWrapper,
        TableRow,
        TableData,
    },

    data() {
        return {
            cases: [],
            filterText: '',
        }
    },

    created() {
        axios.get( 'https://jsonplaceholder.typicode.com/todos' )
            .then( response => this.cases = response.data );
    },

    computed: {
        filteredData() {
            if ( this.filterText ) {
                return this.cases.filter( item => {
                    return item.title.toLowerCase().includes( this.filterText.toLowerCase() );
                } );
            } else {
                return this.cases;
            }
        },
    },

    methods: {
        setFilterText( text ) {
            this.filterText = text;
        },
    },
}
</script>