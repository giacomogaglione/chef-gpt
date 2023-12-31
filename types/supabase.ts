export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      recipes: {
        Row: {
          content: string | null
          cooking_time: string | null
          created_at: string | null
          difficulty: string | null
          id: string
          ingredients: string | null
          low_calori: boolean | null
          paleo: boolean | null
          people: string | null
          user_id: string | null
          vegan: boolean | null
        }
        Insert: {
          content?: string | null
          cooking_time?: string | null
          created_at?: string | null
          difficulty?: string | null
          id?: string
          ingredients?: string | null
          low_calori?: boolean | null
          paleo?: boolean | null
          people?: string | null
          user_id?: string | null
          vegan?: boolean | null
        }
        Update: {
          content?: string | null
          cooking_time?: string | null
          created_at?: string | null
          difficulty?: string | null
          id?: string
          ingredients?: string | null
          low_calori?: boolean | null
          paleo?: boolean | null
          people?: string | null
          user_id?: string | null
          vegan?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
