import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutEvolution_chainsInput } from './items-create-without-evolution-chains.input';

@InputType()
export class itemsCreateOrConnectWithoutEvolution_chainsInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => itemsCreateWithoutEvolution_chainsInput)
    create!: itemsCreateWithoutEvolution_chainsInput;
}
