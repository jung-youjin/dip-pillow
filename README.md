# 딥러닝 기반 알약 자동 분류 및 정보 제공 시스템

### 2021-1 Digital Image Processing 최종 설계 프로젝트


---


# Deep-learning based pill automatized classification and informative system

### 2021-1 Digital Image Processing Final Design Project

---
---

## 프로젝트 진행 타임라인 

> Workflow

- ~ 2021.04 주제 선정 및 기술/기존 연구 자료 조사
    - 2021.04.22 1차 회의
    - 2021.04.29 2차 회의
    - 2021.05.06 3차 회의
    - 2021.05.11 4차 회의
- **2021.05.12 제안서 발표**
- 2021.05.14 웹앱 프론트엔드 템플릿 뼈대
- 2021.05.17 웹앱 서버 및 통신 방식 추가
- 2021.05.18 웹앱 데이터베이스 연결 (in progress)
- 2021.05.19 
    - YOLOv4 리서치
    - 데이터셋 확보
- 2021.05 20 YOLOv4 1차 전이학습 및 테스트
- 2021.05.22 YOLOv4 2차 전이학습 및 테스트
- 2021.05.23 
    - YOLOv4 crop& save
    - 영상 전처리용 MATLAB code 작성 시작 (in prrogress)
    - 서비스 제공용 알약 정보 수집
- 2021.05.24 OCR 툴 수정 (Tesseract -> EasyOCR)
- **2021.05.26 중간 발표**
- 2021.05.27
    - 서비스 제공 대상, 방식 및 기능 수정 (교수님 feedback 반영)
    - OCR 기능 테스트
    - MATLAB 전처리용 간단 code 작성
    - octave 연동
- 2021.05.28
    - selenium 연동
- 2021.05.30
    - octave 제거 -> opencv 영상처리로 변경
- 2021.06.04
    - 알약 1개만 촬영시 상세하고 정확한 검색가능한 기능 추가
- **2021.06.09 최종 발표**

## 사용된 영상 처리 기법 및 기술

### 자동 인식을 위해 사용된 기술
- Object Detection / Segmentation - YOLO
    - YOLOv4
- Text Recognition - OCR 
    - Tesseract
    - EasyOCR
- Image Preprocessing - Image Enhancement
    - Gaussian Filtering
    - Color Scale Conversion
    - Magnitude Modification
    - Histogram Equalization (Contrast Adjustment)
    - CLAHE
 
 
 ### 서비스 제공을 위해 사용된 기술
 - Web Crawler
    - Selenium
    
---

## 프로젝트 구현 결과물 예시

### SECTIONS
<img src="https://user-images.githubusercontent.com/37402072/121221702-c76cbb80-c8c0-11eb-9936-f845c073172b.png" width="250">

---

### INPUT
<img src="https://user-images.githubusercontent.com/37402072/121222151-3ea24f80-c8c1-11eb-8562-1003e84c5fcf.jpg" width="300">

---

### CROP & SAVE
<img src="https://user-images.githubusercontent.com/37402072/121222577-9fca2300-c8c1-11eb-9331-22c5cb578353.png" width="400">
<img src="https://user-images.githubusercontent.com/37402072/121222282-5ed20e80-c8c1-11eb-9536-97b38b2e6611.png" width="450">

---

### IMAGE PREPROCESSING
<img src="https://user-images.githubusercontent.com/37402072/121222361-727d7500-c8c1-11eb-8d23-9a2172315407.png" width="450">

---

### TEXT RECOGNITION
<img src="https://user-images.githubusercontent.com/37402072/121222819-d43ddf00-c8c1-11eb-95db-6a0c22d36166.png" width="250">

---

### INFORMATION RETRIEVAL
<img src="https://user-images.githubusercontent.com/37402072/121221813-e703e400-c8c0-11eb-8058-35ce7dee9fe9.png" width="450">
<img src="https://user-images.githubusercontent.com/37402072/121221953-0dc21a80-c8c1-11eb-924c-9c9f4f63b457.png" width="600">
<img src="https://user-images.githubusercontent.com/37402072/121222003-1c103680-c8c1-11eb-8d40-381aa85c5595.png" width="600">




#### 한계점

프로젝트 결과물 발표 당시, 웹프로젝트로 구현하지 못하고 Google Colab에서 마무리 지은 점이 아쉽다.
