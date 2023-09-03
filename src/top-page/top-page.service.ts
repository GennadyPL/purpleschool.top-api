import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { TopPageModel } from './top-page.model/top-page.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';

@Injectable()
export class TopPageService {
    constructor(
        @InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>
    ){}
    
    async create(dto : CreateTopPageDto){
        return this.topPageModel.create(dto)
    }
    
    async findById(id:string){
        return this.topPageModel.findById(id).exec();

    }


    async deleteById(id:string){
        return this,this.topPageModel.findByIdAndDelete(id).exec();
    }

    async updateById(id:string,dto: CreateTopPageDto){
        return this.topPageModel.findByIdAndUpdate(id,dto , {new:true}) .exec()
    }
}