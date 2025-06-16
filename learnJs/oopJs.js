class MyStudent{
    constructor(firstName, lastName, umur, kelas) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.umur = umur;
        this.kelas = kelas;
    }
    getStudentInfo() {
        return `Nama: ${this.fullName}, Umur: ${this.umur}, Kelas: ${this.kelas}`;
    }   
    getFullName() {
        return this.fullName;
    }
}

const siswaPertama = new MyStudent("Budi", "Santoso", 20, "10A");
const siswaKedua = new MyStudent("Siti", "Wulandari", 19, "10B");
console.log(siswaPertama.getStudentInfo()); // Nama: Budi Santoso, Umur: 20, Kelas: 10A
console.log(siswaKedua.getStudentInfo()); // Nama: Siti Wulandari, Umur: 19, Kelas: 10B

// Object Literal
