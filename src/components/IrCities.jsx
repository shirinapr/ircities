import React from "react";
import cn from 'classnames';

const IrCities = ({className, label}) => (
  <div>
    {label ? (
      <label className='label'>
        استان ها
      </label>
    )
    : ''}
    <select className={cn(className,'select')}>
        <option value='آذربایجان شرقی'>
          آذربایجان شرقی
        </option>
        <option value='آذربایجان غربی'>
          آذربایجان غربی
        </option>
        <option value='اردبیل'>
          اردبیل
        </option>
        <option value='اصفهان'>
          اصفهان
        </option>
        <option value='البرز'>
          البرز
        </option>
        <option value='ایلام'>
          ایلام
        </option>
        <option value='بوشهر'>
          بوشهر
        </option>
        <option value='تهران'>
          تهران
        </option>
        <option value='چهارمحال و بختیاری'>
          چهارمحال و بختیاری
        </option>
        <option value='خراسان جنوبی'>
          خراسان جنوبی
        </option>
        <option value='خراسان رضوی'>
          خراسان رضوی
        </option>
        <option value='خراسان شمالی'>
          خراسان شمالی
        </option>
        <option value='خوزستان'>
          خوزستان
        </option>
        <option value='زنجان'>
          زنجان
        </option>
        <option value='سمنان'>
          سمنان
        </option>
        <option value='سیستان و بلوچستان'>
          سیستان و بلوچستان
        </option>
        <option value='فارس'>
          فارس
        </option>
        <option value='قزوین'>
          قزوین
        </option>
        <option value='قم'>
          قم
        </option>
        <option value='کردستان'>
          کردستان
        </option>
        <option value='کرمان'>
          کرمان
        </option>
        <option value='کرمانشاه'>
          کرمانشاه
        </option>
        <option value='کهگیلویه و بویراحمد'>
          کهگیلویه و بویراحمد
        </option>
        <option value='گلستان'>
          گلستان
        </option>
        <option value='گیلان'>
          گیلان
        </option>
        <option value='لرستان'>
          لرستان
        </option>
        <option value='مازندران'>
          مازندران
        </option>
        <option value='مرکزی'>
          مرکزی
        </option>
        <option value='هرمزگان'>
          هرمزگان
        </option>
        <option value='همدان'>
          همدان
        </option>
        <option value='یزد'>
          یزد
        </option>
    </select>
  </div>
);

export default IrCities;
