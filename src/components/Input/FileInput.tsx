"use client"

import { InputEvent } from '@/models/fixedtype.model';
import { fileAccept } from '@/utils/utils';
import React, { useRef } from 'react'

interface Props {
  output: Function,
  fileRef: any
}

export default function FileInput({ output, fileRef }: Props) {
  const file = useRef<any>(null); // เก็บค่าของไฟล์ที่เอาเข้ามาจากการ upload หน้าเว็ป

  // แก้ file
  const onChangeFile = (event: InputEvent) => {
    file.current = event.target.files;
    if (file.current.length) {
      output(file.current)
    }
  };

  return (
    <div>
      <input ref={fileRef} accept={fileAccept} onChange={onChangeFile} type="file" />
    </div>
  )
}

// example for use
// const fileRef = useRef<any>(null); // เอาไว้รีค่าไฟล์ที่แสดงในกล่องอัพโหลด

// const fileOutPut = (file: ImageFile[]) => {
//   let formData: any = new FormData();
//   for (const image of file) {
//     // file ที่ได้มาจากการโหลดจะเป็น [] ต้องเอามา loop ยิง api
//     formData.append("image", image);
//   }
// }

// <FileInput output={fileOutPut} fileRef={fileRef} />