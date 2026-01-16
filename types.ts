
export interface VenueSpace {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  capacity: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
