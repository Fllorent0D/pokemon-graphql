import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesPokemon_idSlotCompoundUniqueInput } from './pokemon-abilities-pokemon-id-slot-compound-unique.input';

@InputType()
export class pokemon_abilitiesWhereUniqueInput {

    @Field(() => pokemon_abilitiesPokemon_idSlotCompoundUniqueInput, {nullable:true})
    pokemon_id_slot?: pokemon_abilitiesPokemon_idSlotCompoundUniqueInput;
}
