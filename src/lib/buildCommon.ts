import { promises as fs } from 'fs'
//
const buildCommon = {
  /**
  * 
  * @param
  *
  * @return
  */  
  getEntryItems: async function(directoryPath: string): Promise<any>
  {
    try {
      const targetFiles: any[] = [];
      const files = await fs.readdir(directoryPath);
      files.forEach(file => {
        const vEnd = file.endsWith(".tsx");
        if(vEnd) {
        let tmpName = directoryPath + "/" + file;
         targetFiles.push(tmpName);
        }
      });
      return targetFiles;
    } catch (error) {
      console.error('Error getEntryItems:', error);
    }
  },
}
export default buildCommon;
