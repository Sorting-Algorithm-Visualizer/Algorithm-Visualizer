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
        backgroundColor: isComparing ? 'red' : 'green',
        width: '20px',
        display: 'inline-block',
        margin: '0 2px',
        position: 'relative',
      }}>
      {/* <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        }}>
        {value}
      </span> */}
    </div>
  );
};

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = (): void => {
    const result: number[] = [];
    for (let i = 0; i < 60; i++) {
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
    if (end - start <= 1) {
      return;
    }

    const middle = Math.floor((start + end) / 2);

    await mergeSort(arr, start, middle);
    await mergeSort(arr, middle, end);

    await merge(arr, start, middle, end);
  };

  const merge = async (
    arr: number[],
    start: number,
    middle: number,
    end: number,
  ): Promise<void> => {
    const result: number[] = [];
    let leftIndex = start;
    let rightIndex = middle;

    while (leftIndex < middle && rightIndex < end) {
      setCurrentIndices([leftIndex, rightIndex]);

      await new Promise(resolve => setTimeout(resolve, 250));

      if (arr[leftIndex] < arr[rightIndex]) {
        result.push(arr[leftIndex]);
        leftIndex++;
      } else {
        result.push(arr[rightIndex]);
        rightIndex++;
      }
    }

    result.push(...arr.slice(leftIndex, middle), ...arr.slice(rightIndex, end));

    for (let i = 0; i < result.length; i++) {
      arr[start + i] = result[i];
    }

    setCurrentIndices([]);
  };

  const handleSort = async (): Promise<void> => {
    await mergeSort(array, 0, array.length);
    setArray([...array]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={handleSort}>Merge Sort</button>
      <div>
        {array.map((value, i) => {
          const isComparing = currentIndices.includes(i);
          return <Column key={i} value={value} isComparing={isComparing} />;
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
