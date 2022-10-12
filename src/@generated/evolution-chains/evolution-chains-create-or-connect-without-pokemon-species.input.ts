import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateWithoutPokemon_speciesInput } from './evolution-chains-create-without-pokemon-species.input';

@InputType()
export class evolution_chainsCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;

    @Field(() => evolution_chainsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => evolution_chainsCreateWithoutPokemon_speciesInput)
    create!: evolution_chainsCreateWithoutPokemon_speciesInput;
}
