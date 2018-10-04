import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.paypal.selion.platform.utilities.WebDriverWaitUtils;

public class McKessonScript {

  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("http://www.eurestonsite.com/mckesson/Pages/Home.aspx");
    WebDriverWaitUtils.waitTillJqueryComplete();
    
    List<WebElement> links = driver.findElements(By.xpath("//div[@id= 'MSOZoneCell_WebPartWPQ6']//a"));
    WebElement recentLink = links.get(links.size() - 1);
    recentLink.click();
  }
}