import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutEvolution_chainsInput } from './pokemon-species-update-without-evolution-chains.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutEvolution_chainsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutEvolution_chainsInput)
    data!: pokemon_speciesUpdateWithoutEvolution_chainsInput;
}
