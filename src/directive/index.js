
export const outsideClick = {
    mounted(el, binding) {
        document.body.addEventListener('click', function(event){
            if (!(el == event.target || el.contains(event.target))) {
                if (typeof binding.value === 'function') {
                    binding.value();
                }
            }
        })
    }
}