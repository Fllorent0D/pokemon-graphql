import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_form_namesUncheckedCreateWithoutPokemon_formsInput {

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    pokemon_name?: string;
}
