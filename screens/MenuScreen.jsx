import React, { useCallback } from 'react'
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { palette } from '../assets/palette';
import { flatListMenuData, sectionListMenuData } from '../lib/menu';
import { ScreenContainer } from '../components/ScreenContainer';
import { MenuItem } from '../components/MenuItem';
import { PageTitle } from '../components/PageTitle';

const { yellow, red, gray } = palette

export const MenuScreen = () => {

  const renderer = ({ item }) => <MenuItem item={item}/>

  const separator = () => <View style={styles.separator}/>

  const sectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  )

  const menuHeader = useCallback(()=>
    <PageTitle title="Our Menu"/>
  , [])
  return (
    <ScreenContainer>
      {/* <FlatList 
        ListHeaderComponent={menuHeader}
        data={flatListMenuData} 
        renderItem={renderer}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={separator}
        indicatorStyle='white'
      /> */}

      <SectionList
        sections={sectionListMenuData}
        renderItem={renderer}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={menuHeader}
        ItemSeparatorComponent={separator}
        renderSectionHeader={sectionHeader}
        indicatorStyle='white'
      />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: gray.hex,
    borderBottomWidth: 1
  },
  sectionHeader: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 32,
    color: yellow.hex,
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationColor: yellow.hex
  }
})

