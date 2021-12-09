getAge(int year, int month, int day) {

    GregorianCalendar cal = new GregorianCalendar();
    int y, m, d, noofyears;

    y = cal.get(Calendar.YEAR);// current year ,
    m = cal.get(Calendar.MONTH);// current month
    d = cal.get(Calendar.DAY_OF_MONTH);// current day
    cal.set(year, month, day);// here ur date
    noofyears = (int) (y - cal.get(Calendar.YEAR));
    LOGD("Age......", String.valueOf(noofyears));

    if ((m < cal.get(Calendar.MONTH)) || ((m == cal.get(Calendar.MONTH)) && (d < cal.get(Calendar.DAY_OF_MONTH)))) {
        --noofyears;
    }
    LOGD("Age......", String.valueOf(noofyears));
    if (noofyears != 0) {
        ageCount = noofyears;
    } else {
        ageCount = 0;
    }
    if (noofyears < 0)
        throw new IllegalArgumentException("age < 0");
    return noofyears;
}