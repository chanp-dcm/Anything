import requests


def get_article_contents(item_id):
    content = get.requests('/api/v2/items/:{}'.format(item_id))
    print(content)

def get_user_information():
    requests()
    return

if __name__=='__main__':

    get_article_contents()
