import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_flag_mapInput } from './items-create-without-item-flag-map.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_flag_mapInput } from './items-create-or-connect-without-item-flag-map.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutItem_flag_mapInput {

    @Field(() => itemsCreateWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_flag_mapInput)
    create?: itemsCreateWithoutItem_flag_mapInput;

    @Field(() => itemsCreateOrConnectWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_flag_mapInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_flag_mapInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
