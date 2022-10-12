import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapWhereUniqueInput } from '../item-flag-map/item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateInput } from '../item-flag-map/item-flag-map-create.input';
import { item_flag_mapUpdateInput } from '../item-flag-map/item-flag-map-update.input';

@ArgsType()
export class UpsertOneitemFlagMapArgs {

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;

    @Field(() => item_flag_mapCreateInput, {nullable:false})
    @Type(() => item_flag_mapCreateInput)
    create!: item_flag_mapCreateInput;

    @Field(() => item_flag_mapUpdateInput, {nullable:false})
    @Type(() => item_flag_mapUpdateInput)
    update!: item_flag_mapUpdateInput;
}
