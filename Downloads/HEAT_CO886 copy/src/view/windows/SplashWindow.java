package view.windows;

import java.awt.BorderLayout;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

public class SplashWindow extends JFrame {
  private JPanel contentPane;

  public SplashWindow() {
    setUndecorated(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setBounds(100, 100, 800, 400); // Increase the size of the window

    contentPane = new JPanel();
    contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
    contentPane.setLayout(new BorderLayout(0, 0)); // Use BorderLayout for automatic resizing
    setContentPane(contentPane);

    ImageIcon originalIcon = new ImageIcon("./src/icons/splash.png");
    Image image = originalIcon.getImage(); // Transform it
    Image newimg = image.getScaledInstance(600, 300, java.awt.Image.SCALE_SMOOTH); // Scale it to fit the frames
    ImageIcon icon = new ImageIcon(newimg); // Transform it back

    JLabel label = new JLabel("");
    label.setIcon(icon);
    contentPane.add(label, BorderLayout.CENTER);
    pack();
    setLocationRelativeTo(null); // Center the window on the screen

  }
}