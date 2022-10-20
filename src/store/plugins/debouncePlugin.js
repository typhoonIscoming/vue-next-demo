import debounce from 'lodash/debounce';

export default (params) => {
    console.log('params====', params, debounce)
    return {
        debounce: 'this is debounce plugin'
    }
}
