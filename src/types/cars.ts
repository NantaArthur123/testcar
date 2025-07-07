export type cars ={
    car_id: number,
    car_name: string,
    day_rate: string,
    month_rate: string,
    image: string,
}

export type orders = {
    car_id: number,
    order_id: number,
    order_date: string,
    pickup_date: string,
    dropoff_date: string,
    pickup_location: string,
    dropoff_location: string
}