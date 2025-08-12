export interface Category {
  id?: number;               // Optional, যদি API থেকে ID আসে
  categoryName: string;
  enabled: boolean | null;   // তোমার দেওয়া মত enabled null হতে পারে
}
