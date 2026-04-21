import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  AddBookmarkScreen,
  BookmarkDetailScreen,
  BookmarkListScreen,
} from 'app/features/bookmarks'

type RootStackParamList = {
  home: undefined
  add: undefined
  'bookmark-detail': {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function BookmarkDetailRoute({
  route,
}: {
  route: { params: RootStackParamList['bookmark-detail'] }
}) {
  return <BookmarkDetailScreen id={route.params.id} />
}

export function NativeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BookmarkListScreen}
        options={{ title: 'Bookmarks' }}
      />
      <Stack.Screen
        name="add"
        component={AddBookmarkScreen}
        options={{ title: 'Add Bookmark' }}
      />
      <Stack.Screen
        name="bookmark-detail"
        component={BookmarkDetailRoute}
        options={{ title: 'Bookmark' }}
      />
    </Stack.Navigator>
  )
}
