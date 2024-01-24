import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  public name = 'Huy Thế Phạm';
  public age = 19;
  public fruits = ['Orange', 'Apple', 'Mango', 'Lemon', 'Strawbery']
  public listFruits = [
    {name: 'Orange', price: 12, discount: 10},
    {name: 'Apple', price: 32, discount: 0},
    {name: 'Mango', price: 16, discount: 11},
    {name: 'Lemon', price: 8, discount: 0}
];



public vietNamData=[
  {
    city: "Chọn tỉnh/thành phố",
    district: ["Quận/Huyện"]
  },
  {
    city: "Hà Nội",
    district: ["Quận Ba Đình",
    "Huyện Ba Vì",
    "Quận Bắc Từ Liêm",
    "Quận Cầu Giấy",
    "Huyện Chương Mỹ",
    "Huyện Đan Phượng",
    "Huyện Đông Anh",
    "Quận Đống Đa",
    "Huyện Gia Lâm",
    "Quận Hà Đông",
    "Quận Hai Bà Trưng",
    "Huyện Hoài Đức",
    "Quận Hoàn Kiếm",
    "Quận Hoàng Mai",
    "Quận Long Biên",
    "Huyện Mê Linh",
    "Huyện Mỹ Đức",
    "Quận Nam Từ Liêm",
    "Huyện Phú Xuyên",
    "Huyện Phúc Thọ",
    "Huyện Quốc Oai",
    "Huyện Sóc Sơn",
    "Thị xã Sơn Tây",
    "Quận Tây Hồ",
    "Huyện Thạch Thất",
    "Huyện Thanh Oai",
    "Huyện Thanh Trì",
    "Quận Thanh Xuân",
    "Huyện Thường Tín",
    "Huyện Ứng Hòa"]
  },
  {
    city:"Vĩnh Phúc",
    district: ["Thành phố Vĩnh Yên",
    "Thị xã Phúc Yên",
    "Huyện Bình Xuyên",
    "Huyện Lập Thạch",
    "Huyện Sông Lô",
    "Huyện Tam Đảo",
    "Huyện Tam Dương",
    "Huyện Vĩnh Tường",
    "Huyện Yên Lạc"]
  },
  {
    city: "Thành phố Hồ Chí Minh",
    district: ["Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Quận Bình Tân",
    "Quận Bình Thạnh",
    "Quận Gò Vấp",
    "Quận Phú Nhuận",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Thủ Đức",
    "Huyện Bình Chánh",
    "Huyện Cần Giờ",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Nhà Bè"]
  }
]

  public resetName():void{
    console.log("Reseted your name on input.")
    this.name = '';
  }

  public districts: string[] = ["Quận/Huyện"];

  public changeCity(event : any) : void{
    console.log(event.target.value);
    console.log(this.vietNamData.find(data => data.city === event.target.value)?.district || []);

    //1st way
    // const result = this.vietNamData.filter((data) => data.city === event.target.value);
    // if(result.length > 0){
    //   this.districts = result[0].district;
    // }

    // 2nd way
    this.districts = this.vietNamData.find(data => data.city === event.target.value)?.district || [];
  }
}
