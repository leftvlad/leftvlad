from selenium import webdriver
from selenium.webdriver.common.by import By

link = "http://localhost:3000/"
browser = webdriver.Chrome()
browser.get(link)

serch_string = browser.find_element(By.XPATH, "/div/nav/ul/li[2]/a").click()