import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutEvolution_chainsInput } from './items-create-without-evolution-chains.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutEvolution_chainsInput } from './items-create-or-connect-without-evolution-chains.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutEvolution_chainsInput {

    @Field(() => itemsCreateWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsCreateWithoutEvolution_chainsInput)
    create?: itemsCreateWithoutEvolution_chainsInput;

    @Field(() => itemsCreateOrConnectWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutEvolution_chainsInput)
    connectOrCreate?: itemsCreateOrConnectWithoutEvolution_chainsInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
