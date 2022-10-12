import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_proseInput } from './items-create-without-item-prose.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_proseInput } from './items-create-or-connect-without-item-prose.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutItem_proseInput {

    @Field(() => itemsCreateWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_proseInput)
    create?: itemsCreateWithoutItem_proseInput;

    @Field(() => itemsCreateOrConnectWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_proseInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_proseInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
