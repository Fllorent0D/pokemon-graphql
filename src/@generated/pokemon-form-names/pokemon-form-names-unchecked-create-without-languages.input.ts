import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_form_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    pokemon_name?: string;
}
