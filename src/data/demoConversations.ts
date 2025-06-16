export interface Message {
  type: 'user' | 'bot';
  message: string;
  timestamp: string;
}

export interface DemoConversation {
  title: string;
  icon: string;
  messages: Message[];
}

export const demoConversations: DemoConversation[] = [
  {
    title: "E-commerce Assistant",
    icon: "shopping-cart",
    messages: [
      { type: 'user', message: "Hi, I'm looking for a laptop for gaming", timestamp: "2:30 PM" },
      { type: 'bot', message: "Hello! I'd be happy to help you find the perfect gaming laptop. What's your budget range and preferred screen size?", timestamp: "2:30 PM" },
      { type: 'user', message: "Around $1500 and 15-17 inches", timestamp: "2:31 PM" },
      { type: 'bot', message: "Great! Based on your budget and size preference, I recommend our MSI Gaming Laptop with RTX 4060, 16GB RAM, and 15.6\" display. It's currently on sale for $1,399. Would you like to see the specifications?", timestamp: "2:31 PM" },
      { type: 'user', message: "Yes, show me the specs", timestamp: "2:32 PM" },
      { type: 'bot', message: "Here are the key specifications:\n• Intel Core i7-12700H processor\n• NVIDIA RTX 4060 8GB graphics\n• 16GB DDR5 RAM\n• 512GB NVMe SSD\n• 15.6\" 144Hz display\n• RGB keyboard\n\nThis laptop handles all modern games at high settings. Would you like me to add it to your cart?", timestamp: "2:32 PM" }
    ]
  },
  {
    title: "Healthcare Support",
    icon: "shield",
    messages: [
      { type: 'user', message: "I need to schedule an appointment with Dr. Smith", timestamp: "10:15 AM" },
      { type: 'bot', message: "I'd be happy to help you schedule an appointment with Dr. Smith. What type of appointment do you need - consultation, follow-up, or specialist referral?", timestamp: "10:15 AM" },
      { type: 'user', message: "It's a follow-up for my blood test results", timestamp: "10:16 AM" },
      { type: 'bot', message: "Perfect! I see Dr. Smith has availability this week. Here are the available slots:\n• Tuesday, Dec 12 at 2:00 PM\n• Wednesday, Dec 13 at 10:30 AM\n• Friday, Dec 15 at 3:15 PM\n\nWhich time works best for you?", timestamp: "10:16 AM" },
      { type: 'user', message: "Wednesday at 10:30 AM works perfectly", timestamp: "10:17 AM" },
      { type: 'bot', message: "Excellent! I've scheduled your follow-up appointment with Dr. Smith for Wednesday, December 13th at 10:30 AM. You'll receive a confirmation email shortly with appointment details and preparation instructions. Is there anything else I can help you with today?", timestamp: "10:17 AM" }
    ]
  },
  {
    title: "Customer Support",
    icon: "headphones",
    messages: [
      { type: 'user', message: "My order hasn't arrived yet and it's been 5 days", timestamp: "1:45 PM" },
      { type: 'bot', message: "I'm sorry to hear about the delay with your order. Let me check the status for you right away. Could you please provide your order number?", timestamp: "1:45 PM" },
      { type: 'user', message: "Order #ORD-2024-1156", timestamp: "1:46 PM" },
      { type: 'bot', message: "Thank you! I've found your order. I can see it was shipped on December 8th and is currently in transit. The tracking shows it's at the local distribution center and should be delivered by tomorrow afternoon. I'll send you the updated tracking information via email right now.", timestamp: "1:46 PM" },
      { type: 'user', message: "That's great, thank you! Can I get a refund if it doesn't arrive tomorrow?", timestamp: "1:47 PM" },
      { type: 'bot', message: "Absolutely! If your order doesn't arrive by tomorrow evening, I can process a full refund or expedite a replacement shipment at no extra cost. I've also added a $10 credit to your account as an apology for the inconvenience. You'll see this reflected in your next purchase.", timestamp: "1:47 PM" }
    ]
  },
  {
    title: "Educational Assistant",
    icon: "graduation-cap",
    messages: [
      { type: 'user', message: "Can you help me understand photosynthesis?", timestamp: "9:20 AM" },
      { type: 'bot', message: "Of course! Photosynthesis is how plants make their own food using sunlight. Think of it as a plant's kitchen recipe! Would you like me to explain it step by step or focus on a specific part?", timestamp: "9:20 AM" },
      { type: 'user', message: "Step by step please, I have a test tomorrow", timestamp: "9:21 AM" },
      { type: 'bot', message: "Perfect! Here's photosynthesis broken down:\n\n1. **Ingredients**: Plants need sunlight, water (from roots), and CO₂ (from air)\n2. **Location**: This happens in chloroplasts (the green parts)\n3. **Process**: Chlorophyll captures sunlight energy\n4. **Result**: Plants make glucose (sugar) for energy + release oxygen\n\n**Simple equation**: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂\n\nWant me to create a practice quiz for your test?", timestamp: "9:21 AM" },
      { type: 'user', message: "Yes, that would be amazing!", timestamp: "9:22 AM" },
      { type: 'bot', message: "Great! Here's a quick practice quiz:\n\n1. What are the three main ingredients plants need for photosynthesis?\n2. Where in the plant cell does photosynthesis occur?\n3. What two products does photosynthesis create?\n4. Why is photosynthesis important for humans?\n\nTake your time answering, and I'll provide feedback on each answer!", timestamp: "9:22 AM" }
    ]
  }
];