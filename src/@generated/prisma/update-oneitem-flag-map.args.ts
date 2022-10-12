import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapUpdateInput } from '../item-flag-map/item-flag-map-update.input';
import { Type } from 'class-transformer';
import { item_flag_mapWhereUniqueInput } from '../item-flag-map/item-flag-map-where-unique.input';

@ArgsType()
export class UpdateOneitemFlagMapArgs {

    @Field(() => item_flag_mapUpdateInput, {nullable:false})
    @Type(() => item_flag_mapUpdateInput)
    data!: item_flag_mapUpdateInput;

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;
}
