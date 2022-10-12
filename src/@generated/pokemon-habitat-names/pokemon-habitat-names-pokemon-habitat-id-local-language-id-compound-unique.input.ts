import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_habitat_namesPokemon_habitat_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_habitat_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
