<template>
    <section>
        <AppTableMetas @filterData="setFilterText" button-text="Vytvoriť prípad"/>

        <AppTable>
            <AppTableWrapper wrapper="thead">
                <AppTableData tag="th">Meno klienta</AppTableData>
                <AppTableData tag="th">ID</AppTableData>
                <AppTableData tag="th">Predmet</AppTableData>
                <AppTableData tag="th">Predmet</AppTableData>
                <AppTableData tag="th">ID</AppTableData>
                <AppTableData tag="th">Predmet</AppTableData>
                <AppTableData tag="th">Predmet</AppTableData>
                <AppTableData tag="th"/>
            </AppTableWrapper>

            <AppTableWrapper wrapper="tbody">
                <AppTableRow v-for="data in filteredData" :key="data.id">
                    <AppTableData tag="td" primary-data>{{ data.title.slice( 0, 18 ) }}</AppTableData>
                    <AppTableData tag="td" secondary-data>22-2222</AppTableData>
                    <AppTableData tag="td" secondary-data>Matej</AppTableData>
                    <AppTableData tag="td">Matej</AppTableData>
                    <AppTableData tag="td">22-2222</AppTableData>
                    <AppTableData tag="td">Predmet</AppTableData>
                    <AppTableData tag="td">Predmet</AppTableData>
                    <AppTableData tag="td" edit-data>
                        <RouterLink :to="{ name: 'BusinessCasesEdit', params: { id: data.id } }">
                            <AppIcon icon-name="Edit"/>
                        </RouterLink>
                    </AppTableData>
                </AppTableRow>
            </AppTableWrapper>
        </AppTable>
    </section>
</template>

<script>
// Components
import AppIcon from '@/components/AppIcon';
import AppTableMetas from '@/components/Table/AppTableMetas';
import AppTable from '@/components/Table/AppTable';
import AppTableWrapper from '@/components/Table/AppTableWrapper';
import AppTableRow from '@/components/Table/AppTableRow';
import AppTableData from '@/components/Table/AppTableData';

// Libs
import axios from 'axios';

export default {
    components: {
        AppIcon,
        AppTableMetas,
        AppTable,
        AppTableWrapper,
        AppTableRow,
        AppTableData,
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