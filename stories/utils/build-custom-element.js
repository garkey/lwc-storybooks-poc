import { buildCustomElementConstructor } from 'lwc';

export default function buildAndRegisterCustomElement(elementName, elementClass) {
    if (!customElements.get(elementName)) {
        const customElement = buildCustomElementConstructor(elementClass);
        customElements.define(elementName, customElement);

        // this is supposed to be fullfilled by @lwc/engine-dom https://www.npmjs.com/package/@lwc/engine-dom?activeTab=readme
        console.log('elementClass.CustomElementConstructor', elementClass.CustomElementConstructor);
        
    }
}

