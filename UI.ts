namespace UI {
    export interface Button {
        label: string
        size?: string
    }

    export function createButton(label: string): Button

    export function createButton(label: string, size: string): Button

    export function createButton(label: string, size?: string): Button {
        if(size) {
            return { label, size } as Button
        } else {
            return { label } as Button
        }
    }
    
}

export default UI