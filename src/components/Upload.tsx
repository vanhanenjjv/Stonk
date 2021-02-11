import React from 'react';

import StockData from '../stock-data';

import { ReactComponent as DocumentText } from 'heroicons/outline/document-text.svg';
import { Input, DragAndDrop } from '.';

import dayjs from 'dayjs';


interface UploadProps {
  onReceive: (stockData: StockData[]) => void;
}

export const Upload: React.FC<UploadProps> = ({ onReceive }) => {
  return (
    <div className="shadow-sm rounded-md bg-white grid grid-cols-1">
      <div className="text-center bg-gray-50 py-3 border-b">
        <h1 className="text-gray-600">yee</h1>
      </div>
      <div className="p-2">
        <DragAndDrop
          className="mt-2 bg-white flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          onDrop={receiveFile}>
          <div className="space-y-1 text-center">
            <DocumentText className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                // eslint-disable-next-line max-len
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload a file</span>
                <Input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  className="sr-only"
                  onChange={receiveFile}
                  accept=".csv" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">CSV up to 10MB</p>
          </div>
        </DragAndDrop>
      </div>
    </div>
  );

  async function receiveFile(file: File | undefined | null): Promise<void> {
    if (!file)
      return;

    const data = (await file.text())
      .split('\n')
      .slice(1) // Ignore column headers
      .filter(line => line) // Filter out empty lines
      .map(parseStockData);

    onReceive(data);

    function parseStockData(line: string): StockData {
      const [date, close, volume, open, high, low] = line.split(', ');

      const removeDollar = (str: string): number => Number(str.slice(1));

      return {
        date: dayjs(date).format('YYYY-MM-DD'),
        close: removeDollar(close),
        volume: Number(volume),
        open: removeDollar(open),
        high: removeDollar(high),
        low: removeDollar(low)
      };
    }
  }
};
