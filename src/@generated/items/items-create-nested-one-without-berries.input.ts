import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutBerriesInput } from './items-create-or-connect-without-berries.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutBerriesInput {

    @Field(() => itemsCreateWithoutBerriesInput, {nullable:true})
    @Type(() => itemsCreateWithoutBerriesInput)
    create?: itemsCreateWithoutBerriesInput;

    @Field(() => itemsCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutBerriesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
