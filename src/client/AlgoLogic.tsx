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
        backgroundColor: isComparing ? 'red' : 'orange',
        width: '4px',
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
  const [delay, setDelay] = useState<number>(250);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = (): void => {
    const result: number[] = [];
    for (let i = 0; i < 75; i++) {
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
      await new Promise(resolve => setTimeout(resolve, delay));
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
  const bubbleSort = async (): Promise<void> => {
    const len = array.length;
    let isSwapped = false;

    for (let i = 0; i < len; i++) {
      isSwapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        setCurrentIndices([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, delay));

        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          isSwapped = true;
        }
        setArray([...array]);
      }

      setCurrentIndices([]);
    }
  };

  const selectionSort = async (): Promise<void> => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      let minIndex = i;

      for (let j = i + 1; j < len; j++) {
        setCurrentIndices([minIndex, j]);
        await new Promise(resolve => setTimeout(resolve, delay));

        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        setArray([...array]);
      }

      setCurrentIndices([]);
    }
  };
  const quickSort = async (
    arr: number[],
    low: number,
    high: number,
  ): Promise<void> => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const partition = async (
    arr: number[],
    low: number,
    high: number,
  ): Promise<number> => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      setCurrentIndices([j, high]);
      await new Promise(resolve => setTimeout(resolve, delay));

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };
  const handleBubbleSort = async (): Promise<void> => {
    await bubbleSort();
  };
  const handleQuickSort = async (): Promise<void> => {
    await quickSort([...array], 0, array.length - 1);
  };
  const handleSelectionSort = async (): Promise<void> => {
    await selectionSort();
  };
  const handleMergeSort = async (): Promise<void> => {
    await mergeSort(array, 0, array.length);
    setArray([...array]);
  };
  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDelay(Number(e.target.value));
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={handleMergeSort}>Merge Sort</button>
      <button onClick={handleBubbleSort}>Bubble Sort</button>
      <button onClick={handleSelectionSort}>Selection Sort</button>
      <button onClick={handleQuickSort}>Quick Sort</button>
      <input
        type='range'
        min='1'
        max='1000'
        value={delay}
        onChange={handleDelayChange}
      />
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
