Hospital.destroy_all
Doctor.destroy_all
Patient.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian", specialty: "Internal Medicine", hospital: sacred_heart)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery", hospital: sacred_heart)
eliot = Doctor.find_or_create_by(name: "Eliot Reed", specialty: "Endocrinology", hospital: sacred_heart)

wilkes = Patient.find_or_create_by(name: "Mrs. Wilkes", doctor: jd)
johnny_the_tackling_alzheimers_patient = Patient.find_or_create_by(name: "Johnny", doctor: eliot)
harvey = Patient.find_or_create_by(name: "Harvey Korman", doctor: jd)