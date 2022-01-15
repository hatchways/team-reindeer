export interface Profile {
  _id?: string;
  firstName: string;
  lastName: string;
  description: string;
  gender?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  availability?: string[];
  photo?: string;
  sitter?: boolean;
  price?: number;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: Profile[];
}
