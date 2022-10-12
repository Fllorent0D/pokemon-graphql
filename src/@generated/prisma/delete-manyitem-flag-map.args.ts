import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapWhereInput } from '../item-flag-map/item-flag-map-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlagMapArgs {

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    @Type(() => item_flag_mapWhereInput)
    where?: item_flag_mapWhereInput;
}
