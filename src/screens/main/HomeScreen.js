import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const categories = [
    { id: '1', name: 'Pizza', icon: 'pizza-outline' },
    { id: '2', name: 'Burgers', icon: 'fast-food-outline' },
    { id: '3', name: 'Steak', icon: 'restaurant-outline' },
  ];

  const popularItems = [
    { 
      id: '1', 
      name: 'Food 1', 
      author: 'By Viet Nam', 
      price: '$15', 
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' 
    },
    { 
      id: '2', 
      name: 'Food 2', 
      author: 'By Italy', 
      price: '$20', 
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80' 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.homeHeader}>
          <Text style={styles.screenMainTitle}>Explorer</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search for meals or area" 
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoryScroll}
        >
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
              <View style={styles.categoryIconCircle}>
                <Ionicons name={cat.icon} size={24} color="#333" />
              </View>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {popularItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.foodCard}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodAuthor}>{item.author}</Text>
            </View>
            <Text style={styles.foodPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  homeHeader: { 
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'android' ? 40 : 20, 
    paddingBottom: 10 
  },
  screenMainTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#111' 
  },
  searchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    marginHorizontal: 20, 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    paddingVertical: 12, 
    marginTop: 10 
  },
  searchInput: { 
    flex: 1, 
    marginLeft: 10, 
    fontSize: 16, 
    color: '#333' 
  },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginHorizontal: 20, 
    marginTop: 25, 
    marginBottom: 15 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  filterText: { 
    color: '#0000ff', 
    fontSize: 14 
  },
  viewAllText: { 
    color: '#999', 
    fontSize: 14 
  },
  categoryScroll: { 
    paddingLeft: 20 
  },
  categoryCard: { 
    alignItems: 'center', 
    marginRight: 20, 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 12, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 3, 
    width: 80, 
    marginBottom: 10 
  },
  categoryIconCircle: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: '#f8f8f8', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 8 
  },
  categoryName: { 
    fontSize: 14, 
    fontWeight: '500', 
    color: '#333' 
  },
  foodCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    marginHorizontal: 20, 
    marginBottom: 15, 
    padding: 10, 
    borderRadius: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 2 
  },
  foodImage: { 
    width: 70, 
    height: 70, 
    borderRadius: 10 
  },
  foodInfo: { 
    flex: 1, 
    marginLeft: 15 
  },
  foodName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 4 
  },
  foodAuthor: { 
    fontSize: 13, 
    color: '#777' 
  },
  foodPrice: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#0000ff', 
    marginRight: 10 
  },
});