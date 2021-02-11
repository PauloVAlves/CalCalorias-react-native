import React from 'react'
import { FlatList, View} from 'react-native'
import ResultItem from './ResultItem'

const SearchResult = ({searchList, addToRecipe}) => {
  return(
    <View>
      <FlatList data={searchList} renderItem={({item}) => (
        <ResultItem item={item} addToRecipe={addToRecipe}/>
        )} keyExtractor={item => item.id}
      />
    </View>
      )
}

export default SearchResult;