import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_color_namesPokemon_color_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_color_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
