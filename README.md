# AI-Based OPD Consultant for Paediatric Care

## Project Overview

This project develops an **AI-based clinical decision support system** for pediatric outpatient (OPD) consultations. The system assists doctors by analyzing patient symptoms, medical history, and clinical guidelines to provide evidence-based diagnostic and investigative recommendations.

## 🎯 Project Objectives

### Step 1: Clinical Problem Definition
The AI consultant aims to:

1. **Predict Probable Diseases** - Identify likely pediatric diagnoses based on patient data
2. **Classify Severity** - Categorize condition severity (Mild / Moderate / Severe)
3. **Suggest Investigations** - Recommend appropriate diagnostic tests (X-ray, MRI, Blood tests, etc.)
4. **Support Clinical Decisions** - Provide evidence-based recommendations aligned with clinical guidelines

## 📊 Step 2: Data Collection & Machine Learning

### Input Features
- **Demographics**: Age, Gender
- **Symptomatology**: Pain location, Pain duration
- **Physical Findings**: Swelling, Range of motion
- **Medical History**: Trauma history, Previous conditions
- **Clinical Assessment**: Pain severity score (0-10)
- **Vital Signs**: Temperature, Heart rate, Blood pressure

### Target Output (Labels)
- **Diagnosis Class**: Primary diagnostic prediction
- **Severity Level**: Mild / Moderate / Severe classification
- **Recommended Tests**: List of suggested investigations
- **Clinical Notes**: Additional observations and recommendations

### ML Workflow
```
1. Collect paediatric clinical data
2. Preprocess & normalize data
3. Train ML model using MATLAB
4. Test & evaluate accuracy
5. Deploy for OPD consultation
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: MATLAB for ML model training
- **Simulation**: SimPy/MATLAB for queueing simulation
- **Web Framework**: Streamlit (Python)
- **Data Processing**: NumPy, Pandas, Scikit-learn

## 📋 Project Timeline

| Day | Phase | Activities |
|-----|-------|----------|
| 1-2 | Learning & Setup | Learn Python/MATLAB, Setup development environment |
| 3-4 | Hospital Simulation | Visit hospital, observe patient flow, collect data |
| 5-6 | Design & Development | Design system architecture, develop components |
| 7-8 | Integration & Testing | Integrate modules, conduct testing |
| 9-11 | Documentation | Write technical documentation, prepare proposal |
| 11-12 | Final Preparation | Review, formatting, submission |

## 👥 Team Roles

### Role A: ML Model Development
- Learn Python decision tree basics
- Hospital data collection & analysis
- Queueing parameter estimation
- Module integration & testing
- Technical documentation

### Role B: Simulation & Backend
- Learn SimPy/MATLAB queueing fundamentals
- Hospital workflow observation
- Queueing model development
- Backend system integration
- Methodology documentation

### Role C: Frontend & Documentation
- Streamlit web app development
- Hospital photography & documentation
- Permission letter acquisition
- Literature review compilation
- UI/UX design

### Role D: Quality & Coordination
- Team role assignment & iteration
- Project coordination
- Activity recording & documentation
- Final proposal formatting & submission

## 🚀 System Features

- 📋 **Patient Data Input** - User-friendly interface for data entry
- 🤖 **AI Analysis** - ML model with clinical guideline integration
- 📊 **Diagnosis Prediction** - Probabilistic diagnosis with confidence scores
- ⚠️ **Severity Assessment** - Automatic risk stratification
- 🔬 **Investigation Guide** - Evidence-based test recommendations
- 📈 **Performance Metrics** - Real-time accuracy tracking

## 📁 Project Structure

```
AI-OPD-Consultant/
├── index.html              # Main website
├── styles.css              # Website styling
├── script.js               # Website functionality
├── README.md               # Project documentation
├── data/
│   ├── clinical_data.csv   # Patient dataset
│   └── guidelines.json     # Clinical guidelines
├── models/
│   ├── decision_tree.m     # MATLAB model
│   └── model_training.m    # Training script
├── src/
│   ├── preprocessing.py    # Data preprocessing
│   ├── ml_pipeline.py      # ML pipeline
│   └── app.py              # Streamlit app
└── tests/
    ├── test_model.py       # Model testing
    └── test_preprocessing.py # Data testing
```

## 🔄 Development Methodology

### 1. Supervised Learning Approach
- Decision tree classification for diagnosis prediction
- Multi-class severity classification
- Feature importance analysis

### 2. Future: Reinforcement Learning
- Optimize investigation recommendations
- Learn from clinical outcomes
- Improve decision policies over time

## 📊 Expected Deliverables

1. **Clinical Dataset** - Comprehensive pediatric OPD data
2. **ML Model** - Trained and validated predictive model
3. **Web Application** - Interactive OPD consultant interface
4. **Technical Documentation** - Complete system documentation
5. **Clinical Guidelines** - Evidence-based recommendation framework
6. **Performance Report** - Accuracy, sensitivity, specificity metrics

## ⚙️ Implementation Steps

### Phase 1: Foundation
- [ ] Environment setup
- [ ] Data collection
- [ ] Literature review

### Phase 2: Development
- [ ] Data preprocessing
- [ ] Model training
- [ ] Web app development

### Phase 3: Testing & Validation
- [ ] Model validation
- [ ] System testing
- [ ] Clinical evaluation

### Phase 4: Deployment
- [ ] Documentation
- [ ] Proposal preparation
- [ ] Final submission

## 📈 Success Metrics

- **Model Accuracy**: > 85%
- **Sensitivity**: > 80%
- **Specificity**: > 90%
- **User Interface**: Intuitive and responsive
- **Documentation**: Comprehensive and clear

## 🔐 Data Privacy & Ethics

- HIPAA compliance for patient data
- Informed consent procedures
- Anonymization protocols
- Ethical review board approval

## 📚 References & Resources

- Pediatric Clinical Guidelines
- Machine Learning Algorithms
- Healthcare AI Best Practices
- SimPy Documentation
- MATLAB Machine Learning Toolbox

## 🤝 Contributing

This is an academic project. For contributions or inquiries, please contact the development team.

## 📄 License

This project is developed for educational and research purposes.

## 📞 Contact & Support

For questions about this project, please reach out to the development team or visit the project website.

---

**Developed with ❤️ for better pediatric healthcare**

*Last Updated: June 2026*