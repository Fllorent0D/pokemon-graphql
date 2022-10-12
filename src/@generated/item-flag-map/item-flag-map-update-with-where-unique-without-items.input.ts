import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_mapUpdateWithoutItemsInput } from './item-flag-map-update-without-items.input';

@InputType()
export class item_flag_mapUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;

    @Field(() => item_flag_mapUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_flag_mapUpdateWithoutItemsInput)
    data!: item_flag_mapUpdateWithoutItemsInput;
}
