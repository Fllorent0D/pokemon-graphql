import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    @Type(() => pokemon_abilitiesWhereInput)
    where?: pokemon_abilitiesWhereInput;
}
