const partitionArray = (inputArray: Array<any>, chunkSize: number) => {
    return inputArray.reduce((result, item, idx) => {
        const chunkIndex = Math.floor(idx / chunkSize);

        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(item);

        return result;
    }, []);
};

export default partitionArray;
