Vue.component('search', {
    template: `
        <div class="search-form">
            <input v-model="searchLine" type="text" class="search-field">
            <button class="btn-search" type="button" @click='search()'>
                <i class="fas fa-search"></i>
            </button>
        </div>
    `,
    data: () => ({
        searchLine: '',
    }),
     methods: {
       search() {
         this.$emit('search', this.searchLine);
       }
     }
})