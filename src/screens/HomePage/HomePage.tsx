import React, {type PropsWithChildren, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../features/users/selectUser';
import styles from './HomePage.style';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const HomePage: React.FC<PropsWithChildren<{navigation: any}>> = ({
  navigation,
}) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(false);
    const url = 'https://jsonplaceholder.typicode.com/users';
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    try {
      const response = await fetch(url, requestOptions);
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <View style={[styles.container]}>
      <ScrollView>
        {loading &&
          users?.length > 0 &&
          users?.map((value: UserType, index: number) => (
            <ItemList
              key={index}
              id={value?.id || 0}
              navigation={navigation}
              name={value?.name || '----'}
              email={value?.email || '----'}
            />
          ))}
        {!loading && <ActivityIndicator />}
      </ScrollView>
    </View>
  );
};

export default HomePage;

const ItemList: React.FC<
  PropsWithChildren<{id: number; name: string; email: string; navigation: any}>
> = ({id, name, email, navigation}) => {
  const dispatch = useDispatch();

  const onPress = async () => {
    await fetchUser();
    navigation.navigate('Detail');
  };

  const fetchUser = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    try {
      const response = await fetch(url, requestOptions);
      const json = await response.json();
      dispatch(setUserData(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.item]}>
        <Text style={[styles.name]}>{name}</Text>
        <Text style={[styles.email]}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};
