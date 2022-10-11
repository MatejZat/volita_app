<template>
    <section>
        <AppTableMetas @filterData="setFilterText"/>

        <AppTable>
            <TableWrapper wrapper="thead">
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">Kód</TableData>
                <TableData tag="th">Klient</TableData>
                <TableData tag="th">Predmet</TableData>
                <TableData tag="th">Kód</TableData>
                <TableData tag="th">Klient</TableData>
                <TableData tag="th">Stav</TableData>
                <TableData tag="th">Konečná cena</TableData>
                <TableData tag="th"/>
            </TableWrapper>

            <TableWrapper wrapper="tbody">
                <TableRow v-for="data in filteredData" :key="data.id">
                    <TableData class="app-table-data-primary" tag="td">{{ data.title.slice( 0, 20 ) }}</TableData>
                    <TableData class="app-table-data-secondary" tag="td">{{ data.id }}</TableData>
                    <TableData tag="td">{{ data.userId }}</TableData>
                    <TableData tag="td">{{ data.userId }}</TableData>
                    <TableData tag="td">{{ data.completed }}</TableData>
                    <TableData tag="td">14.44</TableData>
                    <TableData tag="td">{{ data.completed }}</TableData>
                    <TableData tag="td">14.44</TableData>
                    <TableData tag="td" edit>
                        <RouterLink :to="{ name: 'BusinessCasesEdit', params: {id: data.id} }">
                            <AppIcon icon-name="Edit"/>
                        </RouterLink>
                    </TableData>
                </TableRow>
            </TableWrapper>
        </AppTable>
    </section>
</template>

<script>
import AppTableMetas from "@/components/Table/AppTableMetas";
import AppTable from "@/components/Table/AppTable";
import AppIcon from "@/components/AppIcon";
import TableWrapper from "@/components/Table/TableWrapper";
import TableRow from "@/components/Table/TableRow";
import TableData from "@/components/Table/TableData";
import axios from "axios";

export default {
    components: {
        AppTableMetas,
        AppTable,
        AppIcon,
        TableWrapper,
        TableRow,
        TableData
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

    methods: {
        setFilterText( text ) {
            this.filterText = text;
        }
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
        }
    },
}
</script>