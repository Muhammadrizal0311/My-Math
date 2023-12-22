const Module1 = "https://img.freepik.com/free-photo/focus-girl-trying-solve-mathematical-equation_329181-14170.jpg?w=900&t=st=1703213189~exp=1703213789~hmac=df8f61b64dd079d6c781ec8cffabe86e63ad39004864ea3d5076cea215ce433a";
const Module2 = "https://img.freepik.com/free-photo/side-view-man-studying-classroom_23-2150444924.jpg?size=626&ext=jpg&ga=GA1.1.956289433.1703212223&semt=sph";
const Module3 = "https://img.freepik.com/free-photo/numerology-concept-still-life_23-2150171541.jpg?size=626&ext=jpg&ga=GA1.1.956289433.1703212223&semt=sph";


export const navMenu = [
  {
    path: "#home",
    text: "Home",
  },
  {
    path: "#benefits",
    text: "Benefits",
  },
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#module",
    text: "Module",
  },
  {
    path: "#operator",
    text: "Operators",
  },
  {
    path: "#support",
    text: "Support",
  },
];

export const benefitsCard = [
  {
    id: "1",
    image: '',
    tittle: "Tidak Ada Pembayaran",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
  {
    id: "2",
    image: '',
    tittle: "Device Apapun",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
  {
    id: "3",
    image: '',
    tittle: "Ilmu Perguruan Tinggi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit arcu a lectus aliquet, quis.",
  },
];

export const moduleCard = [
  {
    id: "1",
    image: Module1,
    tittle: "Module Linear",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps:
      "Persamaan linear adalah persamaan aljabar yang tiap sukunya mengandung konstanta atau perkalian konstanta dengan variabel tunggal. Persamaan ini dikatakan linear karena hubungan matematis ini dapat digambarkan sebagai garis lurus dalam sistem koordinat Kartesius. Persamaan linear juga bisa kita artikan sebagai persamaan yang memiliki pangkat tertinggi dari variabelnya selalu satu. Dalam persamaan linear akan ada beberapa hal penting seperti variable, koefisien dan juga konstanta. Variabel adalah simbol pengganti nilai numerik dalam kondisi tidak diketahui yang ada di suatu persamaan. Nilai dalam variabel juga tidak selalu tetap dan bisa diubah. Persamaan linear biasanya akan terdiri dari dua ruas yang akan dihubungkan dengan tanda sama dengan (=). Penjumlahan, pengurangan, perkalian dan pembagian pada kedua ruas persamaan linear tidak akan mengubah bentuk nilai persamaan. Persamaan linear akan memiliki pangkat satu dan tidak memiliki perkalian variabel. Persamaan linear juga kerap disebut sebagai persamaan satu derajat.",
    questions: [
      {
        id: "1",
        question: "Tentukan penyelesaian dari persamaan berikut! 2x + 4 = 8",
        image: '',
        answer: "Jadi, penyelesaian persamaan 2x + 4 adalah x = 2.",
      },
      {
        id: "2",
        question:
          "Tentukan penyelesaian dari persamaan berikut! 9x + 4 = 3x + 22",
        image: '',
        answer: "Jadi, penyelesaian persamaan 9x + 4 = 3x + 22 adalah x = 3.",
      },
    ],
  },
  {
    id: "2",
    image: Module2,
    tittle: "Module Kuadrat",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps:
      "Persamaan kuadrat adalah persamaan matematika yang memiliki variabel berpangkat dua atau aljabar derajat dua dan berbentuk ax² + bx + c = 0. Persamaan ini disebut kuadrat karena pangkat tertinggi dari variabelnya adalah dua. Persamaan kuadrat sering digunakan untuk menggambarkan hubungan antara dua variabel dalam bentuk parabola. Persamaan kuadrat memiliki beberapa sifat, seperti diskriminan, akar-akar, dan bentuk umum. Diskriminan adalah nilai yang terdapat di dalam akar kuadrat pada rumus mencari akar-akar persamaan kuadrat. Nilai diskriminan dapat digunakan untuk menentukan sifat akar-akar persamaan kuadrat. Jika diskriminan bernilai positif, maka persamaan kuadrat memiliki dua akar real yang berbeda. Jika diskriminan bernilai nol, maka persamaan kuadrat memiliki satu akar real yang berulang. Sedangkan jika diskriminan bernilai negatif, maka persamaan kuadrat memiliki dua akar imajiner. Untuk menyelesaikan persamaan kuadrat, kita dapat menggunakan beberapa metode, seperti faktorisasi, kuadrat sempurna, dan rumus ABC. Metode faktorisasi digunakan untuk memfaktorkan persamaan kuadrat menjadi bentuk perkalian dua binomial. Metode kuadrat sempurna digunakan untuk menyelesaikan persamaan kuadrat yang memiliki bentuk x² + 2ax + a² atau x² - 2ax + a². Sedangkan metode rumus ABC digunakan untuk menyelesaikan persamaan kuadrat yang memiliki bentuk ax² + bx + c = 0 dengan menggunakan rumus x = (-b ± √b² - 4ac) / 2a. Semoga penjelasan ini dapat membantu Anda memahami persamaan kuadrat dengan lebih baik. Jika Anda memerlukan informasi lebih lanjut, jangan ragu untuk bertanya lagi.",
    questions: [
      {
        id: "1",
        question:
          "Tentukan akar-akar dari persamaan kuadrat berikut! x^2 + 5x + 6 = 0",
        image: '',
        answer:
          "Jadi, akar-akar dari persamaan kuadrat x^2 + 5x + 6 = 0 adalah x = -2, -3.",
      },
      {
        id: "2",
        question:
          "Tentukan akar-akar dari persamaan kuadrat berikut! 2x^2 - 7x + 3 = 0",
        image: '',
        answer:
          "Jadi, akar-akar dari persamaan kuadrat 2x^2 - 7x + 3 = 0 adalah x = 1/2, 3.",
      },
    ],
  },
  {
    id: "3",
    image: Module3,
    tittle: "Module Himpunan",
    subTittle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia purus mi, vitae laoreet ipsum.",
    paragraps:
      "Persamaan nilai mutlak adalah persamaan yang memuat variabel di dalam tanda mutlak. Masalah muncul ketika ditanya penyelesaian persamaan nilai mutlak. Penyelesaian yang dimaksud di sini adalah nilai-nilai variabel yang membuat persamaan menjadi benar. Penyelesaian persamaan nilai mutlak dapat dilakukan dengan menerapkan definisi dan sejumlah sifat (teorema) nilai mutlak. Keterampilan aljabar dan logika (konjungtif-disjungtif) harus diasah untuk memahami materi ini dengan baik.",
    questions: [
      {
        id: "1",
        question: "Tentukan nilai mutlak dari -5.",
        image: '',
        answer: "Jadi, nilai mutlak dari -5 adalah 5.",
      },
      {
        id: "2",
        question: "Tentukan nilai mutlak dari 0.",
        image: '',
        answer: "Jadi, nilai mutlak dari 0 adalah 0.",
      },
    ],
  },
];

export const operatorCard = [
  {
    id: "1",
    tittle: "Operator Linear",
    subTittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    path: "linear",
  },
  {
    id: "2",
    tittle: "Operator Kuadrat",
    subTittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    path: "kuadrat",
  },
];

export const logoIcon = [
  {
    path: '',
  },
  {
    path: '',
  },
  {
    path: '',
  },
  {
    path: '',
  },
];
