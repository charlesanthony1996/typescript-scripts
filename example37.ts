// decorators and attributes
function log(target: any, propertykey: string, descriptor: PropertyDescriptor) {
    const originalmethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        console.log()
    }

}