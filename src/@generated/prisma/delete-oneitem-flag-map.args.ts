import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapWhereUniqueInput } from '../item-flag-map/item-flag-map-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlagMapArgs {

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;
}
