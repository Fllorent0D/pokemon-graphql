import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { naturesCreateNestedOneWithoutNature_pokeathlon_statsInput } from '../natures/natures-create-nested-one-without-nature-pokeathlon-stats.input';

@InputType()
export class nature_pokeathlon_statsCreateWithoutPokeathlon_statsInput {

    @Field(() => Int, {nullable:false})
    max_change!: number;

    @Field(() => naturesCreateNestedOneWithoutNature_pokeathlon_statsInput, {nullable:false})
    natures!: naturesCreateNestedOneWithoutNature_pokeathlon_statsInput;
}
