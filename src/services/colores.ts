const colores: any = []

const agregar = async function(color: string) {
    colores.push({color})
    return color;
}

const getColores = async function () { return await colores };

export { agregar, getColores}