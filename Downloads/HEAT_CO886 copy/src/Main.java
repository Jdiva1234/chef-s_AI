/** 
 *
 * Copyright (c) 2005 University of Kent
 * Computing Laboratory, Canterbury, Kent, CT2 7NP, U.K
 *
 * This software is the confidential and proprietary information of the
 * Computing Laboratory of the University of Kent ("Confidential Information").
 * You shall not disclose such confidential Information and shall use it only
 * in accordance with the terms of the license agreement you entered into with
 * the University.
 *
 */

//import com.incors.plaf.alloy.AlloyLookAndFeel;

import managers.FileManager;
import managers.InterpreterManager;
import managers.SettingsManager;
import managers.WindowManager;
import managers.UndoManager;
import java.util.logging.Logger;
import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.SimpleFormatter;
import java.util.logging.Level;
import java.io.File;
import java.util.Timer;
import java.util.TimerTask;
import view.windows.SplashWindow;

/**
 * Main HEAT class
 */
public class Main {

  /**
   * The main method of the application.
   * 
   * @param args Command-line arguments
   */
  public static void main(String[] args) {
    // Make a final copy of args so it can be used in the inner class
    final String[] finalArgs = args;

    // Create and show the splash screen
    final SplashWindow splashWindow = new SplashWindow();
    splashWindow.setVisible(true);

    // Create a timer to hide the splash screen after 3 seconds
    new Timer().schedule(new TimerTask() {
      @Override
      public void run() {
        // Hide and dispose of the splash screen
        splashWindow.setVisible(false);
        splashWindow.dispose();

        // Set up logging
        Logger log = Logger.getLogger("heat");
        try {
          log.setUseParentHandlers(false); // turn off logging on stdout console
          // Set up a file handler for the logger
          FileHandler handler = new FileHandler(System.getProperty("user.home") + File.separator + "heat.log");
          handler.setFormatter(new SimpleFormatter());
          log.addHandler(handler);
        } catch (Exception e) {
          System.out.println("Could not install file handler for logging.");
        }

        // Set some system properties for Mac
        System.setProperty("com.apple.mrj.application.apple.menu.about.name", ""); // set name of main menu on Mac
        System.setProperty("apple.laf.useScreenMenuBar", "true"); // on Mac separate menu from window

        // Get instances of various managers
        SettingsManager sm = SettingsManager.getInstance();
        WindowManager wm = WindowManager.getInstance();

        // Load settings and create the GUI
        sm.loadSettings();
        WindowManager.setLookAndFeel();
        wm.createGUI();

        // Show the wizard window if this is a new settings file
        if (sm.isNewSettingsFile())
          wm.showWizardWindow();
        else {
          // Start the interpreter process
          InterpreterManager im = InterpreterManager.getInstance();
          im.startProcess(false);
        }

        // If there were any command-line arguments, open the specified file
        if (finalArgs.length > 0) {
          wm.openFile(new java.io.File(finalArgs[0]));
          wm.showAll();
          /* Make edit area active */
          wm.getEditorWindow().grabFocus();
        } else {
          // If there were no command-line arguments, set up a default editor content
          wm.getEditorWindow().setEditorContent(
              "Use menu to open an existing or create a new program in the editor.Hello Team, i am testing out our project");
          wm.setCloseEnabled(false);
          UndoManager.getInstance().reset();
          wm.onlyConsole();
          wm.getConsoleWindow().getFocus();
        }
        // Make the window visible
        wm.setVisible();

      }
    }, 3000); // 3000 milliseconds = 3 seconds
  }

}
