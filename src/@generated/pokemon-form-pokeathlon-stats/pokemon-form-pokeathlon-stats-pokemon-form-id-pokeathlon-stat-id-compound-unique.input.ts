import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_form_pokeathlon_statsPokemon_form_idPokeathlon_stat_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;
}
