import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesPokemon_idSlotCompoundUniqueInput } from './pokemon-types-pokemon-id-slot-compound-unique.input';

@InputType()
export class pokemon_typesWhereUniqueInput {

    @Field(() => pokemon_typesPokemon_idSlotCompoundUniqueInput, {nullable:true})
    pokemon_id_slot?: pokemon_typesPokemon_idSlotCompoundUniqueInput;
}
