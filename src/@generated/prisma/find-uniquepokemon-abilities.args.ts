import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereUniqueInput } from '../pokemon-abilities/pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;
}
