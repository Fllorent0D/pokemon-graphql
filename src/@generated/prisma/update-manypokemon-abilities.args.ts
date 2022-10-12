import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesUpdateManyMutationInput } from '../pokemon-abilities/pokemon-abilities-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';

@ArgsType()
export class UpdateManypokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateManyMutationInput)
    data!: pokemon_abilitiesUpdateManyMutationInput;

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    @Type(() => pokemon_abilitiesWhereInput)
    where?: pokemon_abilitiesWhereInput;
}
