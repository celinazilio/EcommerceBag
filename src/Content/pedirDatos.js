import donas from "./datos"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(donas)
        }, 2000)
    })
}