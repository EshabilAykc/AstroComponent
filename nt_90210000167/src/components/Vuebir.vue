<template>
  <div class="full-page">
    <div class="date-picker">
      <h2>{{ title }}</h2>
      <div class="calendar">
        <div class="month">
          <button class="prev-month" @click="prevMonth">&lt;</button>
          <div class="month-name">{{ monthName }}</div>
          <button class="next-month" @click="nextMonth">&gt;</button>
        </div>
        <div class="days">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            class="day"
            @click="selectDate(day)"
            :class="{ 'selected': day === selectedDay }"
          >
            {{ day }}
          </div>
        </div>
        <div class="selected-date">
          <p v-if="selectedDay">
            Seçilen Tarih: {{ year }}-{{ month + 1 }}-{{ selectedDay }}
          </p>
        </div>
      </div>
    </div>

    <div class="additional-text">
      <p>YAKLAŞAN SINAVLAR</p>
      <p>DGS: 16/07/2023
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth(),
      selectedDay: now.getDate(),
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    monthName() {
      const monthNames = [
        "OCAK",
        "ŞUBAT",
        "MART",
        "NİSAN",
        "MAYIS",
        "HAZİRAN",
        "TEMMUZ",
        "AĞUSTOS",
        "EYLÜL",
        "EKİM",
        "KASIM",
        "ARALIK",
      ];
      return monthNames[this.month];
    },
    daysInMonth() {
      const days = [];
      const date = new Date(this.year, this.month, 1);
      while (date.getMonth() === this.month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
  },
  methods: {
    prevMonth() {
      if (this.month === 0) {
        this.year--;
        this.month = 11;
      } else {
        this.month--;
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.year++;
        this.month = 0;
      } else {
        this.month++;
      }
    },
    selectDate(day) {
      this.selectedDay = day;
    },
  },
};
</script>

<style>
.full-page {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #4ecdc4, #556270);
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.date-picker {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
}

.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.month {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.month-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.day {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.day:hover {
  background-color: #9ebad5;
}

.selected-date {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
}

.additional-text {
  position: absolute;
  bottom: 80%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
  color: #fff;
}

</style>
