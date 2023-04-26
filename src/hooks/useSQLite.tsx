// useSQLite.js
import { useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'AlarmDatabase.db' });

const useSQLite = () => {
  
    useEffect(() => {
        db.transaction(txn => {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_alarm'",
            [],
            (tx, res) => {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_alarm', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_alarm(alarmID INTEGER PRIMARY KEY AUTOINCREMENT, isEnabled BOOLEAN, date VARCHAR(30))',
                  []
                );
              } else {
                console.log('Already Created Table')
              }
            }
          );
        });
      }, []);

};

export default useSQLite;
