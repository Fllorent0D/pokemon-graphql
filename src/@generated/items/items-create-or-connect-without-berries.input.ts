import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutBerriesInput } from './items-create-without-berries.input';

@InputType()
export class itemsCreateOrConnectWithoutBerriesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => itemsCreateWithoutBerriesInput)
    create!: itemsCreateWithoutBerriesInput;
}
