import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import { ReactComponent as PlusIcon } from "../../assets/images/icon/ic_plus.svg";

import AddItemImage from "./AddItemImage";

const FileInput = ({ name, value, onChange }) => {
  const inputRef = useRef();

  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    console.log(inputNode);
    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <AddImageWrap>
      <AddImageLabel htmlFor="file_input">
        <PlusIcon className="plus" />
        <ImagePlaceholder>이미지 등록</ImagePlaceholder>
      </AddImageLabel>
      <input
        id="file_input"
        type="file"
        onChange={handleChange}
        ref={inputRef}
      />

      <AddItemImage
        value={value}
        preview={preview}
        onClearClick={handleClearClick}
      />
    </AddImageWrap>
  );
};

const AddImageWrap = styled.div`
  display: flex;
  gap: 10px;

  & #file_input {
    &[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

const AddImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 282px;
  height: 282px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  cursor: pointer;
`;

const ImagePlaceholder = styled.span`
  font-size: 16px;
  color: #9ca3af;
`;

export default FileInput;
