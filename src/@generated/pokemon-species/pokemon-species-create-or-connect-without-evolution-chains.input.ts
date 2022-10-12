import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutEvolution_chainsInput } from './pokemon-species-create-without-evolution-chains.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutEvolution_chainsInput)
    create!: pokemon_speciesCreateWithoutEvolution_chainsInput;
}
