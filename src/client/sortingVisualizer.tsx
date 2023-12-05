import React, { useState, useEffect } from 'react';

const Column = ({
  value,
  isComparing,
}: {
  value: number;
  isComparing: boolean;
}): React.JSX.Element => {
  return (
    <div
      style={{
        height: `${value}px`,
        backgroundColor: isComparing ? 'green' : 'red',
        width: '30px',
        display: 'inline-block',
        margin: '0 2px',
        position: 'relative',
      }}>
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        }}>
        {value}
      </span>
    </div>
  );
};
const delay = async (ms: number) => {
  return await new Promise(res => setTimeout(res, ms));
};
const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [comparingIndices, setComparingIndices] = useState<number[]>([-1, -1]);
  useEffect(() => {
    generateArray();
  }, []);
  const generateArray = (): void => {
    const result: number[] = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.random() * 100 + 1;
      const floored = Math.floor(randomNum);
      result.push(floored);
    }
    setArray(result);
  };
  const mergeSort = async (
    arr: number[],
    start: number,
    end: number,
  ): Promise<void> => {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      await mergeSort(arr, start, middle);
      await mergeSort(arr, middle + 1, end);
      await merge(arr, start, middle, end);
      await delay(2000);
      setArray([...arr]);
      setComparingIndices([-1, -1]);
    }
  };
  const merge = async (
    arr: number[],
    start: number,
    middle: number,
    end: number,
  ): Promise<void> => {
    const left = arr.slice(start, middle + 1);
    const right = arr.slice(middle + 1, end + 1);

    let k = start;
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      setComparingIndices([start + i, middle + 1 + j]);
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  };
  const handleMergeSort = async (): Promise<void> => {
    const newArray = [...array];
    await mergeSort(newArray, 0, newArray.length - 1);
  };
  return (
    <div>
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={handleMergeSort}>Merge Sort </button>
      <div>
        {array.map((value, i) => {
          return (
            <Column
              key={i}
              value={value}
              isComparing={
                i === comparingIndices[0] || i === comparingIndices[1]
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
