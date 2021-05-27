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


## 사용된 영상 처리 기법 및 기술

- Object Detection / Segmentation - YOLO
    - YOLOv4
- Text Recognition - OCR 
    - Tesseract
    - EasyOCR
- Image Preprocessing - Image Enhancement
    - Gaussian Filtering
    - Sobel Filtering
    - Magnitude Modification
    - Histogram Equalization
    - Contrast Adjustment
 
 ### 서비스 제공을 위해 사용된 기술
 - Web Crawler
    - Selenium
