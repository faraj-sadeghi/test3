// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "Insatallation WSL  An introduction to How to install Linux on Windows with WSLDevelopers can access the power of both Windows and Linux at the same time on a Windows machine The Windows Subsystem for Linux  WSL  lets developers install a Linux distribution  such as Ubuntu, OpenSUSE, Kali, Debian, Arch Linux, etc  and use Linux applications, utilities, and Bash command-line tools directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup   Prerequisites  You must be running Windows 10 version 2004 and higher  Build 19041 and higher  or Windows 11 to use the commands below  Install WSL command  You must be running Windows 10 version 2004 and higher  Build 19041 and higher  or Windows 11 to use the commands below   for more informatio see  https //learn.microsoft.com/en-us/windows/wsl/install   After installation WSL you need to close cmd and open it again type in WSL and enter after that you can use Ls and cd commond for drive your folder WSL stores your Windows drives in the /mnt folder, with the name of the drive as a subfolder For example your C   drive will be present at /mnt/c/ for you to use Keeping this in mind, you can swap to your specific folder like so cd /mnt/e/username/folder1/folder2  How to install fastqc on your WSL system  Linux ubuntu   Linux, with its robust capabilities, is a preferred choice for many in the scientific community Installing FastQC on a Linux system is straightforward Follow these steps to ensure a smooth installation  Update Your System  Start by updating your system’s package list to have the latest software references Open your terminal and enter    Install FastQC  With your package list updated, proceed to install FastQC In the terminal, type    This command initiates the download and installation of FastQC   Verification  To confirm that FastQC has been installed correctly, run the following in your terminal    This should display the help information and version number, indicating a successful installation.By completing these steps, FastQC will be installed and ready for use on your Linux system, setting the stage for high-quality sequence data analysis   Workshop day 1  wsl --install  sudo apt update  sudo apt -y install fastqc  fastqc--help   ", "");
   return this;
}
