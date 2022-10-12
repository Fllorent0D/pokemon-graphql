import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_mapUpdateWithoutItem_flagsInput } from './item-flag-map-update-without-item-flags.input';

@InputType()
export class item_flag_mapUpdateWithWhereUniqueWithoutItem_flagsInput {

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;

    @Field(() => item_flag_mapUpdateWithoutItem_flagsInput, {nullable:false})
    @Type(() => item_flag_mapUpdateWithoutItem_flagsInput)
    data!: item_flag_mapUpdateWithoutItem_flagsInput;
}
