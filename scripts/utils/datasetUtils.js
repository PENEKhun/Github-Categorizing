const dataset = {
    name : ""
}

export const datasetUtils = {
    setName : (input) => {dataset.name = input},
    getName : () => {return dataset.name},
}