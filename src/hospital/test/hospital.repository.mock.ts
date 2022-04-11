class HospitalRepositoryMock {
  hospitals: { id: number; name: string; address: string; telephone: string }[];

  constructor() {
    this.hospitals = [
      { id: 1, name: 'peter pan', address: 'paris', telephone: '1234567890' },
      { id: 2, name: 'peter pan2', address: 'paris2', telephone: '1234567890' },
      { id: 3, name: 'peter pan3', address: 'paris3', telephone: '1234567890' },
    ];
  }

  async getAllHospital() {
    return this.hospitals;
  }

  async addAHospital(hospital) {
    this.hospitals.push(hospital);
    return hospital;
  }
}

export default HospitalRepositoryMock;
