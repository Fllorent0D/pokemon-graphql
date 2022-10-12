import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_species_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokemon_species_id!: number;

    @Field(() => String, {nullable:true})
    form_description?: string;
}
