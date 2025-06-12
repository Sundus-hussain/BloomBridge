# BloomBridge – Emotion-Aware Support App for Young Children

**BloomBridge** is a user-friendly web app designed to support mothers and caregivers in understanding the emotional needs of their young children, especially those who are **specially-abled** or **speech-delayed**. It uses AWS-powered AI to detect emotions and respond with comforting voice messages in real time.

---

## Live Demo [https://www.youtube.com/shorts/6nk9GSa81-s?feature=share]

---

## Key Features

- Emotion detection via **Amazon SageMaker JumpStart**
- Voice interaction using **Amazon Polly**
- Simple, friendly, and intuitive UI for both parents and children
- Serverless backend with **AWS Lambda & API Gateway**
- Real-time support for emotional expression and understanding

---

## Built With

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** AWS Lambda, API Gateway
- **AI Services:**
  - Amazon SageMaker (Text Classification)
  - Amazon Polly (Text-to-Speech)
- **Hosting:** GitHub Pages

---

## How It Works

1. Caregiver types a brief message describing the child’s behavior.
2. BloomBridge sends the text to **SageMaker** to detect the emotion.
3. Based on the emotion, **Amazon Polly** generates a voice message.
4. The app plays the voice message back to the child in real time.

---

## How AWS Lambda Was Used

AWS Lambda served as the core compute layer in BloomBridge, enabling a fully serverless architecture. It executed backend logic in response to user actions and scheduled events without requiring any infrastructure management. Lambda functions were triggered via API Gateway when users submitted tribute messages or configured reminder settings. Additionally, scheduled functions—invoked through Amazon EventBridge—were used to send automated tributes or notifications on emotionally significant dates like anniversaries or birthdays.

Lambda also played a key role in integrating with other AWS services: it invoked Amazon Polly to convert written tributes into lifelike speech, and called Amazon SageMaker endpoints to generate personalized sympathy messages using AI. All execution data and logs were captured via Amazon CloudWatch for observability and debugging. This event-driven design allowed BloomBridge to scale effortlessly, reduce costs, and offer a deeply personalized experience to users.

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/BloomBridge.git
   cd BloomBridge


Ideal For
Mothers and caregivers of children under 5

Specially-abled and neurodiverse children

Real-time emotional assistance and learning

Future Enhancements
Image-based emotion detection with Amazon Rekognition

Emotion trend tracking and suggestions

Interactive games for emotional learning
