import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {type UserType} from '../HomePage/HomePage';
import styles from './DetailPage.style';

export type Props = {};

const DetailPage: React.FC<Props> = () => {
  const [user, setUser] = useState<UserType>();
  const selectedUser = useSelector((state: any) => state.selectUser.value);

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
    console.log('selected user', selectedUser);
  }, [selectedUser]);

  return (
    <View style={[styles.container]}>
      <ScrollView>
        {user && (
          <>
            <Text style={[styles.h1]}>{user?.name || '--- ----'}</Text>
            <Text style={[styles.h2]}>{user?.company?.name || '-------'}</Text>

            <Text style={styles.h3}>Contact Information</Text>
            <Text style={styles.content}>{user?.email || 'Email'}</Text>
            <Text style={styles.content}>
              {user?.address?.street || 'Street'}
            </Text>
            <Text style={styles.content}>
              {user?.address?.suite || 'Suite'}
            </Text>
            <Text style={styles.content}>{user?.address?.city || 'City'}</Text>
            <Text style={styles.content}>{user?.phone || 'Phone'}</Text>

            <Text style={[styles.h3]}>Other Information</Text>
            <Text style={styles.content}>{`User Name: ${
              user?.username || '----'
            }`}</Text>
            <Text style={styles.content}>{`Website: ${
              user?.website || '----'
            }`}</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default connect()(DetailPage);
