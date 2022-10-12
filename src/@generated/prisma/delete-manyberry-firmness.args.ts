import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessWhereInput } from '../berry-firmness/berry-firmness-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyberryFirmnessArgs {

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    @Type(() => berry_firmnessWhereInput)
    where?: berry_firmnessWhereInput;
}
