export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      DailyTask: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          term: Database["public"]["Enums"]["Term"][];
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          term: Database["public"]["Enums"]["Term"][];
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          term?: Database["public"]["Enums"]["Term"][];
        };
        Relationships: [];
      };
      TodoList: {
        Row: {
          category: Database["public"]["Enums"]["Category"];
          created_at: string;
          id: string;
          name: string;
          order: number;
          term: Database["public"]["Enums"]["Term"];
        };
        Insert: {
          category: Database["public"]["Enums"]["Category"];
          created_at?: string;
          id?: string;
          name: string;
          order: number;
          term: Database["public"]["Enums"]["Term"];
        };
        Update: {
          category?: Database["public"]["Enums"]["Category"];
          created_at?: string;
          id?: string;
          name?: string;
          order?: number;
          term?: Database["public"]["Enums"]["Term"];
        };
        Relationships: [];
      };
      "\buser_site": {
        Row: {
          created_at: string;
          id: number;
          img: string | null;
          title: string;
          url: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          img?: string | null;
          title: string;
          url: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          img?: string | null;
          title?: string;
          url?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      Category:
        | "Daily"
        | "Weekly"
        | "ArcaneRiver(D)"
        | "ArcaneRiver(W)"
        | "Grandis(D)"
        | "Boss(D)"
        | "Boss(W)"
        | "Boss(M)";
      Term: "Daily" | "Weekly-Sun" | "Weekly-Thu" | "Monthly";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
