import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesCreateInput } from '../pokemon-abilities/pokemon-abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesCreateInput, {nullable:false})
    @Type(() => pokemon_abilitiesCreateInput)
    data!: pokemon_abilitiesCreateInput;
}
