import {  axiosInstance } from "@/libs/axios";
import { useEffect, useState } from "react";

export const useFetchItems = () => {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(false);
   const fetchItems = async () => {
      setLoading(true);
      setTimeout(async() => {
         try {
            const { data } = await axiosInstance.get("/items");
            setItems(data);
            setLoading(false);
         } catch (error) {
            setLoading(true);
            console.error("Error fetching items:", error);
         }
      }, 500)
      
   };

   useEffect(() => {
      fetchItems();
   }, []);

   return { data:items, loading };
}

export const useFetchSuppliers = () => {
   const [suppliers, setSuppliers] = useState([]);
   const [loading, setLoading] = useState(false);
   const fetchSuppliers = async () => {
      setLoading(true);
      setTimeout(async() => {
         try {
            const { data } = await axiosInstance.get("/suppliers");
            setSuppliers(data);
            setLoading(false);
         } catch (error) {
            setLoading(true);
            console.error("Error fetching suppliers:", error);
         }
      }, 500)
      
   };

   useEffect(() => {
      fetchSuppliers();
   }, []);

   return { data:suppliers, loading };
}

export const useFetchCategories = () => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);
   const fetchCategories = async () => {
      setLoading(true);
      setTimeout(async() => {
         try {
            const { data } = await axiosInstance.get("/categories");
            setCategories(data);
            setLoading(false);
         } catch (error) {
            setLoading(true);
            console.error("Error fetching categories:", error);
         }
      }, 500)
   };

   useEffect(() => {
      fetchCategories();
   }, []);

   return { data:categories, loading };
}

export const useFetchSystem = () => {
   const [systems, setsystem] = useState([]);
   const [loading, setLoading] = useState(false);
   const fetchSystem = async () => {
      setLoading(true);
      setTimeout(async () => {
         try {
            const { data } = await axiosInstance.get("/");
            setsystem(data);
            setLoading(false);
         } catch (error) {
            setLoading(true);
            console.error("Error fetching system:", error);
         }
      }, 500)
   };

   useEffect(() => {
      fetchSystem();
   }, []);

   return { data: systems, loading };
}