import requests
import json


def test_create_task():
    r = requests.post('http://localhost:5000/v1/tasks', json={"title": "My First Task"})
    print('ankur jain' , (r.json()))
    assert isinstance(r.json()["id"], int)
    assert len(r.json()) == 1

def test_list_all_tasks():
    r = requests.get('http://localhost:5000/v1/tasks')
    # print('ankur jain')
    # print(r.json()["tasks"])
    assert isinstance(r.json()["tasks"], list)
    print('ankur jain')
    print(r.json()["tasks"][0]["_id"])
    assert len(r.json()) == 1
    print(r.json()["tasks"][0]["_id"])
    print(r.json()["tasks"][0]["_id"])
    assert isinstance(r.json()["tasks"][0]["_id"], int)
    print('ankur jain')
    assert isinstance(r.json()["tasks"][0]["title"], str)
    assert isinstance(r.json()["tasks"][0]["is_completed"], bool)
    assert len(r.json()["tasks"][0]) == 3

def test_get_task():
    r = requests.get('http://localhost:5000/v1/tasks/49')
    print(type(r.json()))
    assert isinstance(r.json(),dict)
    assert isinstance(r.json()["_id"], int)

    assert isinstance(r.json()["title"], str)
    assert isinstance(r.json()["is_completed"], bool)
    assert len(r.json()) == 3

def test_update_task():
    r = requests.put('http://localhost:5000/v1/tasks/1', json={"title": "My 1st Task", "is_completed": True})
    assert not r.content



def test_delete_task():
    r = requests.delete('http://localhost:5000/v1/tasks/1')
    assert not r.content



