import React from 'react';

import { Upload } from 'antd';
import { RcFile } from 'antd/lib/upload/interface';
import { InboxOutlined } from '@ant-design/icons';
import { File as IFile } from '../types';


export interface FileProps {
  onReceive: (file: IFile) => void
}

export const File: React.FC<FileProps> = props => {
  const receive = (file: RcFile): boolean => {
    file.text().then(async text => {
      props.onReceive({ name: file.name, text });
    });

    return false;
  };

  return (
    <Upload.Dragger
      beforeUpload={receive}
      maxCount={1}
      showUploadList={false}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        more text goes here
      </p>
    </Upload.Dragger>
  );
};
