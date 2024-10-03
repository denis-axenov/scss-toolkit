import * as fs from 'fs';
import exec from 'exec-sh';

const releaseFolder = './release'
const sourceFolder = './src';
const packageJSON = './package.json';
const releasePackageJSON = releaseFolder + '/package.json';


fs.cp(sourceFolder, releaseFolder, {
    recursive: true
}, (error) => {
    if (error) throw error;

    fs.copyFile('./LICENSE', releaseFolder + '/LICENSE', (error) => {
        if (error) throw error;
    });

    fs.copyFile('./README.md', releaseFolder + '/README.md', (error) => {
        if (error) throw error;
    });

    fs.copyFile(packageJSON, releasePackageJSON, (error) => {
        if (error) throw error;


        fs.readFile(releasePackageJSON, 'utf8', (error, data) => {
            if (error) throw error;

            const date = new Date();
            const formatter = new Intl.DateTimeFormat('en', {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
            });
            const releaseDate = formatter.format(date);

            const packageJson = JSON.parse(data);
            packageJson.releaseDate = releaseDate;

            delete packageJson.scripts;
            delete packageJson.devDependencies;
            delete packageJson.dependencies;

            const updatedPackageJson = JSON.stringify(packageJson, null, 2);

            fs.writeFile(releasePackageJSON, updatedPackageJson, 'utf8', (error) => {
                if (error) throw error;

                exec('cd ./release & npm publish', (error) => {
                    if (error) throw error;

                    fs.rm(releaseFolder, {
                        recursive: true,
                        force: true
                    }, (error) => {
                        if (error) throw error;
                    });

                    console.log('Released successfully!');
                });
            });
        });
    });
});