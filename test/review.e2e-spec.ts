import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';


const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto={
	name:'Test',
	title:'Заголовок',
	description:'Описание',
	rating:5,
	productId
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId : string;

  beforeEach(async () => {
	const moduleFixture: TestingModule = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	app = moduleFixture.createNestApplication();
	await app.init();
  });

  it('/api (POST)', async (done) => {
	return request(app.getHttpServer())
		.post('/review/creat')
		.send(testDto)
		.expect(201)
		.expect('')
		.then(({body}:request.Response)=>{
			createdId=body._id;
			expect(createdId).toBeDefined();
			done
		});
  });


  afterAll(()=>{
	disconnect();
  })
});
