import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flag_mapInput } from './items-create-without-item-flag-map.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_flag_mapInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flag_mapInput)
    create!: itemsCreateWithoutItem_flag_mapInput;
}
