import psycopg2
import requests
import random

# Database connection
db_config = {
    'user': 'postgres',
    'host': 'localhost',
    'dbname': 'countries',
    'password': 'D@nth3man',
    'port': 5432,
}

def fetch_countries():
    try:
        response = requests.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population')
        return response.json() if response.ok else []
    except requests.RequestException as err:
        print(f"Error: Can't fetch countries {err}")
        return []

def insert_random_countries():
    countries = fetch_countries()
    if not countries:
        print("No countries data available")
        return

    random_countries = random.sample(countries, min(10, len(countries)))
    
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        for country in random_countries:
            name = country['name']['common']
            capital = country['capital'][0] if country.get('capital') else None
            flag = country['flags'].get('png') or None
            subregion = country.get('subregion') or None
            population = country.get('population')

            cursor.execute(
                """
                INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT (name) DO NOTHING
                """,
                (name, capital, flag, subregion, population)
            )
            print(f"Inserted: {name}")
        conn.commit()
        print("Countries were added")
    except psycopg2.Error as err:
        print(f"Database error: {err}")
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    insert_random_countries()