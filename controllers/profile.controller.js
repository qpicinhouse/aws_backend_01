const getProfile = (req, res) => {
  const profileData = [
            { "name": "John Doe", "email": "john.doe1@example.com", "phone": "9876543210", "address": "Delhi, India" },
            { "name": "Jane Smith", "email": "jane.smith2@example.com", "phone": "9876543211", "address": "Mumbai, India" },
            { "name": "Michael Brown", "email": "michael.brown3@example.com", "phone": "9876543212", "address": "Bangalore, India" },
            { "name": "Emily Davis", "email": "emily.davis4@example.com", "phone": "9876543213", "address": "Hyderabad, India" },
            { "name": "David Wilson", "email": "david.wilson5@example.com", "phone": "9876543214", "address": "Chennai, India" },
            { "name": "Sarah Johnson", "email": "sarah.johnson6@example.com", "phone": "9876543215", "address": "Kolkata, India" },
            { "name": "Chris Lee", "email": "chris.lee7@example.com", "phone": "9876543216", "address": "Pune, India" },
            { "name": "Anna White", "email": "anna.white8@example.com", "phone": "9876543217", "address": "Jaipur, India" },
            { "name": "James Harris", "email": "james.harris9@example.com", "phone": "9876543218", "address": "Ahmedabad, India" },
            { "name": "Olivia Martin", "email": "olivia.martin10@example.com", "phone": "9876543219", "address": "Surat, India" },
            { "name": "Daniel Clark", "email": "daniel.clark11@example.com", "phone": "9876543220", "address": "Lucknow, India" },
            { "name": "Sophia Lewis", "email": "sophia.lewis12@example.com", "phone": "9876543221", "address": "Kanpur, India" },
            { "name": "Matthew Walker", "email": "matthew.walker13@example.com", "phone": "9876543222", "address": "Nagpur, India" },
            { "name": "Ava Hall", "email": "ava.hall14@example.com", "phone": "9876543223", "address": "Indore, India" },
            { "name": "Ethan Allen", "email": "ethan.allen15@example.com", "phone": "9876543224", "address": "Bhopal, India" },
            { "name": "Mia Young", "email": "mia.young16@example.com", "phone": "9876543225", "address": "Patna, India" },
            { "name": "Noah King", "email": "noah.king17@example.com", "phone": "9876543226", "address": "Ranchi, India" },
            { "name": "Isabella Wright", "email": "isabella.wright18@example.com", "phone": "9876543227", "address": "Chandigarh, India" },
            { "name": "Liam Scott", "email": "liam.scott19@example.com", "phone": "9876543228", "address": "Goa, India" },
            { "name": "Charlotte Green", "email": "charlotte.green20@example.com", "phone": "9876543229", "address": "Shimla, India" },
            { "name": "Sovan Ghorai", "email": "sovan.ghorai21@example.com", "phone": "9876543230", "address": "Shimla, India" },
            { "name": "Sovan Ghorai new", "email": "sovan.ghorainew21@example.com", "phone": "9876543230", "address": "Shimla, India" },

            ];
  res.json(profileData);
};

module.exports = { getProfile };