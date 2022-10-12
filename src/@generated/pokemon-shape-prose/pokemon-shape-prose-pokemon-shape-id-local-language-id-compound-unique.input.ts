import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_shape_prosePokemon_shape_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_shape_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
