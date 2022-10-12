import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesUpdateInput } from '../pokemon-abilities/pokemon-abilities-update.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesWhereUniqueInput } from '../pokemon-abilities/pokemon-abilities-where-unique.input';

@ArgsType()
export class UpdateOnepokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesUpdateInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateInput)
    data!: pokemon_abilitiesUpdateInput;

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;
}
