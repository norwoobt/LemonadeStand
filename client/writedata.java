import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Random;

public class writedata {
	public static String[] wf = {"Clear and Sunny", "Rainy", "Cloudy", "Overcast", "Hazy"};
	public static DecimalFormat df = new DecimalFormat("#.##");
	public static Random rand = new Random();

	public static void main(String[] args) {
		String data = "";
		int numLines = 500;

		for(int i = 0; i<numLines; i++){
			data+=rTemp() + "," + rWF() + "," + rCP() + "," + rLP() + "," + rSP() + "," + rIP() + "\n";
		}
		
		File file = new File("/home/bryce/LemonadeStand2-master/days.txt");
		FileWriter fr = null;
		try {
			fr = new FileWriter(file);
			fr.write(data);
		} catch(IOException e) {
			e.printStackTrace();
		} finally {
			try {
				fr.close();
			} catch(IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static int rTemp(){
		return (int)(Math.random()*(99-50) + 50);
	}

	public static String rWF(){
		return wf[rand.nextInt(4)];
	}

	public static String rCP(){
		String cp = "";
		Double cp1 = Math.random() * (0.93-0.80) + 0.80;
		Double cp2 = cp1 * (Math.random() * (1.95-1.85) + 1.85);
		Double cp3 = cp1 * (Math.random() * (3.55-3.45) + 3.45);
		cp = "" + df.format(cp1) + "," + df.format(cp2) + "," + df.format(cp3) + "";
		return cp;
	}

	public static String rLP(){
                String lp = "";
                Double lp1 = Math.random() * (0.65-0.52) + 0.52;
                Double lp2 = lp1 * (Math.random() * (2.85-2.72) + 2.72);
                Double lp3 = lp1 * (Math.random() * (6.85-6.65) + 6.65);
                lp = "" + df.format(lp1) + "," + df.format(lp2) + "," + df.format(lp3) + "";
		return lp;
        }

	public static String rSP(){
                String sp = "";
                Double sp1 = Math.random() * (0.70-0.53) + 0.53;
                Double sp2 = sp1 * (Math.random() * (2.45-2.35) + 2.35);
                Double sp3 = sp1 * (Math.random() * (5.10-5.00) + 5.00);
                sp = "" + df.format(sp1) + "," + df.format(sp2) + "," + df.format(sp3) + "";
		return sp;
        }

	public static String rIP(){
                String ip = "";
                Double ip1 = Math.random() * (0.94-0.78) + 0.78;
                Double ip2 = ip1 * (Math.random() * (2.45-2.35) + 2.35);
                Double ip3 = ip1 * (Math.random() * (4.70-4.60) + 4.60);
                ip = "" + df.format(ip1) + "," + df.format(ip2) + "," + df.format(ip3) + "";
		return ip;
        }



}
