<template>
  <header class="app-table-metas">
    <div class="app-table-metas-content">
      <div class="filter-input-container">
        <AppInput placeholder="Prehľadávať výsledky" icon-name="Sliders" />
      </div>

      <aside class="app-table-metas-buttons">
        <AppButton type="primary" icon-name="Plus">Vytvoriť prípad</AppButton>
        <AppButton type="error" icon-name="Trash">Vymazať záznam</AppButton>
      </aside>
    </div>
  </header>
</template>

<script>
  import AppInput from '@/components/Form/AppInput';
  import AppButton from '@/components/AppButton';

  export default {
    components: {
      AppInput,
      AppButton
    },
  }
</script>

<style lang="scss" scoped>
  .app-table-metas {
    margin-bottom: rem(20);

    &-content {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      .filter-input-container {
        width: 280px;

        @include breakpointDown($md) {
          width: 100%;
        }
      }
    }

    &-buttons {
      margin-left: rem(10);
      display: flex;

      @include breakpointUp($md) {
        margin-left: 0;
      }

      a:first-child {
        margin-right: rem(10);
      }
    }
  }
</style>