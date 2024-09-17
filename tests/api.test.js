// app.test.js
import request from 'supertest';
import app from '../src/app.js'; 



describe('Express routes', () => {
  it('should return "Hello, World!" on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  it('should return a list of POIs on GET /poi', async () => {
    const response = await request(app).get('/poi');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    
  });

  it('should return a specific POI on GET /poi/:id', async () => {
    const testId = 'YM2DKss7ehAtuhZdFEBi'; 
    const response = await request(app).get(`/poi/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', testId);
    
  });

  it('should return a list of Rentals on GET /rental', async () => {
    const response = await request(app).get('/rental');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    
  });

  it('should return a specific Rental on GET /rental/:id', async () => {
    const testId = 'yRhfyb1vvm8eZV6gvhxa'; 
    const response = await request(app).get(`/rental/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', testId);
    
  });

  it('should return a list of BusStops on GET /bus', async () => {
    const response = await request(app).get('/bus');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
   
  });

  it('should return a specific BusStop on GET /bus/:id', async () => {
    const testId = 'Vhgtrc9zsvacel6MwbsF';
    const response = await request(app).get(`/bus/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', testId);
   
  });
});