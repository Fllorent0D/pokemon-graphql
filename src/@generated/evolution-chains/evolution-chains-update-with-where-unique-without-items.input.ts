import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_chainsUpdateWithoutItemsInput } from './evolution-chains-update-without-items.input';

@InputType()
export class evolution_chainsUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;

    @Field(() => evolution_chainsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => evolution_chainsUpdateWithoutItemsInput)
    data!: evolution_chainsUpdateWithoutItemsInput;
}
