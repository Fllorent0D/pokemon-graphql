import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereUniqueInput } from '../pokemon-abilities/pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateInput } from '../pokemon-abilities/pokemon-abilities-create.input';
import { pokemon_abilitiesUpdateInput } from '../pokemon-abilities/pokemon-abilities-update.input';

@ArgsType()
export class UpsertOnepokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;

    @Field(() => pokemon_abilitiesCreateInput, {nullable:false})
    @Type(() => pokemon_abilitiesCreateInput)
    create!: pokemon_abilitiesCreateInput;

    @Field(() => pokemon_abilitiesUpdateInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateInput)
    update!: pokemon_abilitiesUpdateInput;
}
