import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Type } from 'class-transformer';
import { item_flagsCreateWithoutItem_flag_mapInput } from './item-flags-create-without-item-flag-map.input';

@InputType()
export class item_flagsCreateOrConnectWithoutItem_flag_mapInput {

    @Field(() => item_flagsWhereUniqueInput, {nullable:false})
    @Type(() => item_flagsWhereUniqueInput)
    where!: item_flagsWhereUniqueInput;

    @Field(() => item_flagsCreateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => item_flagsCreateWithoutItem_flag_mapInput)
    create!: item_flagsCreateWithoutItem_flag_mapInput;
}
