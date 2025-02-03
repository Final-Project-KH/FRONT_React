import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import ListItem from "@tiptap/extension-list-item";
import { Image } from "@tiptap/extension-image";
import {
  EditorArea,
  TipTapBox,
  ToolBarContainer,
  WriteButtonsArea,
  WriteCancelButton,
  WriteSubmitButton,
} from "../../../../styles/community/Reply";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AxiosApi from "../../../../../api/AxiosApi";
import { useSelector } from "react-redux";

const lowlight = createLowlight(all);

CodeBlockLowlight.configure({
  lowlight,
});

const ToolBar = ({ editor }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  if (!editor) return null;

  // Image Upload Handler
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;
        editor.chain().focus().setImage({ src: url }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  // 드롭다운 표시/숨기기
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // 색상 변경 처리
  const handleColorChange = (color) => {
    // 색상 코드 매핑
    const colorMap = {
      black: "#000000",
      blue: "#228be6",
      red: "#fa5252",
      green: "#00C471",
      yellow: "#ffff00",
      gray: "#868e96",
    };
    const selectedColor = colorMap[color];
    editor.chain().focus().setColor(selectedColor).run(); // setColor 메서드 사용
    setDropdownVisible(false); // 색상 변경 후 드롭다운 숨김
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className="toolbar"
      style={{
        display: "flex",
        overflow: "auto"
      }}
    >
      <div
        className="button-group"
        style={{
          display: "flex",
          alignItems: "center",
          overflowX: "auto", // 가로 스크롤 활성화
          whiteSpace: "nowrap", // 줄바꿈 방지
          minWidth: "max-content", // 내부 요소 크기에 맞춰 최소 너비 설정
        }}
      >
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_01_Bold.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_02_Italic.svg)",
          }}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        />

        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_03_UnderLine.svg)",
          }}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        />

        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_04_StrikeThrough.svg)",
          }}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        />

        {/* 색상 변경 버튼 */}
        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_05_TextColor.svg)",
            backgroundSize: "80%",
          }}
          onClick={toggleDropdown}
        />

        {/* 드롭다운 메뉴 */}
        <div className={`dropdown-menu ${isDropdownVisible ? "show" : ""}`}>
          {["black", "blue", "red", "green", "yellow", "gray"].map(
            (color, index) => (
              <button
                key={color}
                style={{
                  zIndex: "10",
                  backgroundColor: "#fff",
                  backgroundImage: `url(/images/tiptap/Editor_Toolbar_05_0${
                    index + 1
                  }_${capitalizeFirstLetter(color)}.svg)`, // 동적으로 이미지 경로 설정
                  backgroundSize: "80%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleColorChange(color)}
              />
            )
          )}
        </div>

        <div
          style={{
            display: "inline-block",
            height: "30px",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            margin: "0 10px",
          }}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_06_Code.svg)",
          }}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_07_CodeBlock.svg)",
          }}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_08_Quote.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        />
        <label
          htmlFor="upload-image"
          className="upload-button"
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_09_Image.svg)",
          }}
        />
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <div
          style={{
            display: "inline-block",
            height: "30px",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            margin: "0 10px",
          }}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_10_H1.svg)",
          }}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_11_H2.svg)",
          }}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_12_H3.svg)",
          }}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_13_UL.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_14_OL.svg)",
          }}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_15_Line.svg)",
          }}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
      </div>
    </div>
  );
};

const Post_ReplyEditor = ({ handleCloseEditor }) => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const userAuth = useSelector((state) => state.auth.accesstoken);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // 기본 코드 블록 비활성화
      }),
      TextStyle,
      Color.configure({ types: [TextStyle.name] }), // TextStyle 확장과 연동
      Underline,
      Code,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image,
      Placeholder.configure({
        placeholder: `답변을 작성해보세요.`,
      }),
    ],
    content: "",
  });

  // submit button
  const handleSubmit = async () => {
    const htmlContent = editor.getHTML().trim();

    // HTML 태그를 제거한 텍스트만 확인
    const textContent = htmlContent.replace(/<[^>]+>/g, "").trim(); // HTML 태그 제거 후 남은 텍스트를 확인

    if (userAuth === "") {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }

    // 텍스트가 비어있거나 공백만 있는 경우 유효하지 않음
    if (!textContent) {
      alert("내용을 입력하세요!");
      return;
    }
    try {
      const response = await AxiosApi.writeReply(boardId, editor.getHTML());
      alert("내용이 성공적으로 제출되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error("제출 실패:", error);
      alert("제출에 실패했습니다. 다시 시도해주세요.");
      console.error(boardId);
    }
  };

  return (
    <>
      <TipTapBox>
        <EditorArea>
          <ToolBarContainer>
            <ToolBar editor={editor} />
          </ToolBarContainer>
          <EditorContent
            style={{
              width: "100%",
              height: "100%",
              padding: "30px",
              overflowY: "auto", // 세로 스크롤 활성화
              overflowX: "hidden", // 가로 스크롤 비활성화
              boxSizing: "border-box", // 패딩 포함 계산
            }}
            editor={editor}
          />
        </EditorArea>
        <WriteButtonsArea>
          <WriteCancelButton onClick={handleCloseEditor}>
            닫기
          </WriteCancelButton>
          <WriteSubmitButton onClick={handleSubmit}>등록</WriteSubmitButton>
        </WriteButtonsArea>
      </TipTapBox>
    </>
  );
};

export default Post_ReplyEditor;
