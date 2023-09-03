import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { TopPageModel } from './top-page.model/top-page.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class TopPageService {
    constructor(
        @InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>
    ){}
    
    async create(dto){
        return this.topPageModel.create(dto)
    }
}
