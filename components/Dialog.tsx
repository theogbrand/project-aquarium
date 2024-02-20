import { useEffect } from "react";

const Dialog = ({ dataloader }: { dataloader: string }) => {
  useEffect(() => {
    setTimeout(() => {
      (window as any).highlightAll();
    }, 500);
  }, []);
  return (
    <div className="">
      <div className="text-base mb-4 mt-4">
        Load this dataset directly with the Datasets library. First, install
        dependency and clone SeaCrowd
      </div>

      <div className="shj-lang-bash block !whitespace-pre-line overflow-x-scroll p-4 rounded-md !text-sm">
        pip install datasets{`\n`}
        git clone https://github.com/SEACrowd/seacrowd-datahub.git
      </div>

      <div className="text-base mb-4 mt-4">
        Then, the dataset can be downloaded locally by the python script below:
      </div>

      <div className="shj-lang-py block !whitespace-pre-line overflow-x-scroll p-4 rounded-md !text-sm">
        from datasets import load_dataset{`\n`}
        {`\n`}
        path = "sea-crowd/sewcrowd/sea_datasets/{dataloader}"{`\n`}
        dataset = load_dataset(path){`\n`}
        {`\n`}# see dataset sample:{`\n`}
        print(dataset['train'].to_pandas()){`\n`}
      </div>
    </div>
  );
};

export default Dialog;
