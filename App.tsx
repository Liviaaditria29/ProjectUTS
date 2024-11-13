// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   Alert,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import axios from 'axios';

// // Define the Recipe type
// interface Recipe {
//   id: string;
//   title: string;
//   instructions: string;
//   imageUrl: string; // Menambahkan URL gambar
// }

// interface ApiRecipe {
//   idMeal: string;
//   strMeal: string;
//   strInstructions: string;
//   strMealThumb: string; // Menambahkan URL gambar dari API
// }

// const App = () => {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [title, setTitle] = useState<string>('');
//   const [instructions, setInstructions] = useState<string>('');
//   const [editId, setEditId] = useState<string | null>(null);

//   // Fetch recipes from TheMealDB API
//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get<{meals: ApiRecipe[]}>(
//         'https://www.themealdb.com/api/json/v1/1/search.php?s=',
//       );
//       const apiRecipes = response.data.meals || [];
//       const formattedRecipes = apiRecipes.map(item => ({
//         id: item.idMeal,
//         title: item.strMeal,
//         instructions: item.strInstructions,
//         imageUrl: item.strMealThumb, // Menambahkan URL gambar
//       }));
//       setRecipes(formattedRecipes);
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Kesalahan', 'Gagal mengambil resep. Silakan coba lagi.');
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const addRecipe = () => {
//     if (title && instructions) {
//       const newRecipe: Recipe = {
//         id: Math.random().toString(),
//         title,
//         instructions,
//         imageUrl: '', // Gambar baru bisa ditambahkan di sini jika diperlukan
//       };
//       setRecipes([...recipes, newRecipe]);
//       setTitle('');
//       setInstructions('');
//     } else {
//       Alert.alert('Harap isi judul dan instruksi');
//     }
//   };

//   const editRecipe = () => {
//     if (title && instructions && editId) {
//       setRecipes(
//         recipes.map(recipe =>
//           recipe.id === editId ? {...recipe, title, instructions} : recipe,
//         ),
//       );
//       setTitle('');
//       setInstructions('');
//       setEditId(null);
//     } else {
//       Alert.alert('Harap isi judul dan instruksi');
//     }
//   };

//   const deleteRecipe = (id: string) => {
//     Alert.alert(
//       'Konfirmasi Hapus',
//       'Apakah Anda yakin ingin menghapus resep ini?',
//       [
//         {text: 'Batal', style: 'cancel'},
//         {
//           text: 'Hapus',
//           onPress: () => setRecipes(recipes.filter(recipe => recipe.id !== id)),
//         },
//       ],
//     );
//   };

//   const startEditing = (recipe: Recipe) => {
//     setTitle(recipe.title);
//     setInstructions(recipe.instructions);
//     setEditId(recipe.id);
//   };

//   const cancelEditing = () => {
//     setTitle('');
//     setInstructions('');
//     setEditId(null);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Aplikasi Resep</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Judul Resep"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Instruksi"
//         value={instructions}
//         onChangeText={setInstructions}
//       />
//       <View style={styles.buttonRow}>
//         <Button
//           title={editId ? 'Perbarui Resep' : 'Tambah Resep'}
//           onPress={editId ? editRecipe : addRecipe}
//         />
//         {editId && <Button title="Batal" onPress={cancelEditing} color="red" />}
//       </View>

//       <FlatList
//         data={recipes}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <View style={styles.recipe}>
//             <Image source={{uri: item.imageUrl}} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.instructions}>{item.instructions}</Text>
//             <Button title="Edit" onPress={() => startEditing(item)} />
//             <Button title="Hapus" onPress={() => deleteRecipe(item.id)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   input: {borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10},
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   recipe: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   title: {fontSize: 18, fontWeight: 'bold'},
//   instructions: {fontSize: 14, color: '#333'},
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
// });

// export default App;

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Resep from './src/screens/TabScreen/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
