export default {
  beforeMount(el, { value }) {
    el.innerHTML += `<${value.tag}>${value.content}</${value.tag}>`;
  },
};
