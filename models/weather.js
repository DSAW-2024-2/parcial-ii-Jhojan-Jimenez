class weatherModel {
  static async weather(latitude, longitude) {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.reason);
      }
      return data.current_weather.temperature;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = weatherModel;
