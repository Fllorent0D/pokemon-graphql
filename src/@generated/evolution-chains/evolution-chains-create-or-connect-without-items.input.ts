import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateWithoutItemsInput } from './evolution-chains-create-without-items.input';

@InputType()
export class evolution_chainsCreateOrConnectWithoutItemsInput {

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;

    @Field(() => evolution_chainsCreateWithoutItemsInput, {nullable:false})
    @Type(() => evolution_chainsCreateWithoutItemsInput)
    create!: evolution_chainsCreateWithoutItemsInput;
}
